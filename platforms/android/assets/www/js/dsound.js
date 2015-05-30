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

alert ('spans defined');

function showAccel(acceleration) {
    showx.innerText = acceleration.x.toString();
    showy.innerText = acceleration.y.toString();
    showz.innerText = acceleration.z.toString();
    showt.innerText = acceleration.timestamp.toString();
};

alert ('show accel defined');


function showAccelError() {
    alert('onError!');
};

alert ('error handler defined');


function dsoundTick(timestamp) {
  if (!start) {
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

alert ('game loop defined');


window.requestAnimationFrame(dsoundTick);