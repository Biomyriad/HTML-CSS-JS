document.getElementById("showcase_video").onmouseover = e => {
    var videoWindow = e.currentTarget;
    videoWindow.muted = true;
    videoWindow.play();
}

document.getElementById("showcase_video").onmouseout = e => {
    var videoWindow = e.currentTarget;
    videoWindow.pause();
    videoWindow.muted = false;
}