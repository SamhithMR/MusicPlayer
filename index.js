var timer;
var percent = 0;

var audio = document.getElementById("music");
audio.addEventListener("playing", function (_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
});
audio.addEventListener("pause", function (_event) {
    clearTimeout(timer);
});

var advance = function (duration, element) {
    var progress = document.getElementById("progress");
    increment = 10 / duration
    percent = Math.min(increment * element.currentTime * 10, 100);
    progress.style.width = percent + '%'
    startTimer(duration, element);
}

var startTimer = function (duration, element) {
    if (percent < 100) {
        timer = setTimeout(function () {
            advance(duration, element)
        }, 100);
    }
}

function togglePlay(e) {
    e = e || window.event;
    var btn = e.target;

    if (!audio.paused) {
        audio.pause();
        icon.src = "resourses/music resme.png";
        isPlaying = false;

    } else {
        audio.play();
        icon.src = "resourses/pause.png";
        isPlaying = true;
    }
}

var menue = document.getElementById("menubar");

function toggle() {
    if (menue.style.display == "none") {
        menue.style.display = "block";
        menu_icon.src = "resourses/exit.png"
    } else {
        menue.style.display = "none";
        menu_icon.src = "resourses/menu.png"
    }
}