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