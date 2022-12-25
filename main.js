noseX = 0;
noseY = 0;
function preload() {
clown_nose = loadImage("https://i.postimg.cc/yNtbx2WF/clown.jpg");
}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function take_snapshot() {
save("my_filter_image.png");
}
function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}
function modelLoaded() {
console.log("PoseNet is Initialised");
}
function gotPoses(results) {
if (results.length>0) {
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
noseX = results[0].pose.nose.x-10;
noseY = results[0].pose.nose.y-10;
}
}
