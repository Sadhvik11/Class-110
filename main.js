Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    }) ;
    Camera = document.getElementById("camera") ;
    Webcam.attach('#camera') ;
function takeSnapshot() {
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+ data_uri+'"/>' ;
}
) ;
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/model/v_sl95BzE/model.json'. modelLoaded) ;
function modelLoaded() {
console.log("model loaded") ;
}
function speak() {
var synth = window.speechSynthesis ;
speak_data_1 = "the first prediction is " + prediction_1 ;
speak_data_2 = "the second prediction is " + prediction_2 ;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2) ;
synth.speak(utterThis) ;
}
