camera=document.getElementById(camera)

Webcam.set({ height:300,
     width:350,
      image_format:'png',
       png_quality:90 });
        Webcam.attach('camera');

       function snapshot(){
            Webcam.snap(function(data_uri){ 
           document.getElementById("snapshot").innerHTML='<img id="c_i" src="'+data_uri+'">'; }); }

console.log('ml5.version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2dCXD9D9g/model.json',modelLoaded);
function modelLoaded(){
    console.log('ModelLoaded');
}
function speak(){

    synth=window.speechSynthesis;
    s1="your predictions are"+p1<br>+p2;
    var utterThis= new SpeechSynthesisUtterance(s1);
    synth.speak(utterThis);
}
function predict() {
    
    img=document.getElementById('c_i');
    classifier.classify(img , gotResult);
}
function gotResult(error , results){

    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("heint").innerHTML=results[0].label;
        document.getElementById("heint2").innerHTML=results[1].label;
        p1=results[0].label;
        p2=results[1].label;
           speech();
           if(results[0] == "happy"){
            document.getElementById("update_emoji").innerHTML="&#128080;";
           }
           if(results[0] == "sad"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
           }
           if(results[0] == "angry"){
            document.getElementById("update_emoji").innerHTML = "&#128076;";
           }
           if(results[1] == "happy"){
            document.getElementById("update_emoji2").innerHTML="&#128080;";
           }
           if(results[1] == "sad"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
           }
           if(results[1] == "angry"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
           }
           
    }
}