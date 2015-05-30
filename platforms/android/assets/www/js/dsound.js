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

function showAccel(acceleration) {
    showx.innerText = acceleration.x.toString();
    showy.innerText = acceleration.y.toString();
    showz.innerText = acceleration.z.toString();
    showt.innerText = acceleration.timestamp.toString();
};


function showAccelError() {
    alert('onError!');
};

var start = 0;

function dsoundTick(timestamp) {
  if (start === 0) {
      start = timestamp;
      alert('starting loop');
    }
  var progress = timestamp - start;
  try {
        navigator.accelerometer.getCurrentAcceleration(showAccel, showAccelError);
      } catch(e) {
        alert(e.message);  
      }

  if (progress < 30000) {
    window.requestAnimationFrame(dsoundTick);
  }
}

try{
    window.requestAnimationFrame(dsoundTick);
} catch(e){
    alert('reqanim not: ' + e.message);
    
}