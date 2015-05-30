document.querySelector("#button1").addEventListener("touchend", playMP3, false);

function playMP3() {
    var mp3URL = "/android_asset/www/sounds/santa.mp3";
    try{
        var media = new Media(mp3URL, null, mediaError);
    } catch(e) {
         alert(e.message);  
    }
    media.play();
}


function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}

// accelerometer functions
var showx = document.querySelector("#showx");
var showy = document.querySelector("#showy");
var showz = document.querySelector("#showz");
var showt = document.querySelector("#showt");

function onSuccess(acceleration) {
    showx.innerText = acceleration.x.toString();
    showy.innerText = acceleration.y.toString();
    showz.innerText = acceleration.z.toString();
    showt.innerText = acceleration.timestamp.toString();
};

function onError() {
    alert('onError!');
};

var options = { frequency: 100 };  // Update every .1 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
