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
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bh-eaOKNZ/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model has loaded!")
}
function identifySnapshot(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}
function gotResults(error,results){
    if(error){
        console.error("An error has occured.",error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML= results[0].label;
        document.getElementById("object_accuracy").innerHTML= results[0].confidence.toFixed(3);
    }
}