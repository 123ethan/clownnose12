noseX = 0;
noseY = 0;
function preload()
{
   clown_nose = loadImage('https://i.postimg.cc/PJcTX9tv/114-1147898-clown-nose-png-clip-art-clown-nose-transparent.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video  = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('Posenet is initialized')
      }

      function gotPoses(results)
{
    if(results.lenght > 0){
console.log(results)
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x =" + noseX)
console.log("nose y =" + noseY)
    }
}

function draw()
{
    image(video , 0 , 0 , 300 , 300);
    circle(noseX, noseY, 20);
    fill(255,0,0);
    stroke(255,0,0);
   
}
function take_snapshot()
{
    save('MyFilterImage.png')
}

