function setup()
{
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    posenet=ml5.posenet(video,modelLoaded);
    posenet.on('pose',gotPoses);
};

function modelLoaded()
{
    console.log('Posenet is launched');
};

function draw()
{
    background("#00ff1a");
};

function gotPoses(results)
{
     if(results.length >0);
     {
         console.log(results);

     }

};