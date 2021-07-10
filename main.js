Webcam.set({
    height: 300,
    width: 350,
    image_format:'png',
    png_quality: 90
});
var camera= document.getElementById("cam");
Webcam.attach(camera);

function clickSnapshot(){
   Webcam.snap(function(data_uri){
   document.getElementById("results").innerHTML='<img id="captured_image"src="'+data_uri+'">';

   });
}
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);
