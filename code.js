Webcam.set({
  width:380,
  height:300,
  image_format: 'png',
  png_quality:90
}
);
camera=document.getElementById("webcam_display");

Webcam.attach(camera);

function capture() {
      Webcam.snap(function(data_uri){
      document.getElementById("captured_image").innerHTML="<img id='image1' src='" + data_uri + "'>";
});
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/AJeVkTPTu/model.json', modelLoaded);

function modelLoaded() {
     console.log("model loaded");
}

function identify() {
img=document.getElementById("image1");
classifier.classify(img, gotResult);

}

function gotResult(error, results) {
 if(error) {
   console.error(error);
 }
 else{
   console.log(results);
   document.getElementById("person_name").innerHTML=results[0].label;
   document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2)*100+"%";
   
 }
}



