var intervalID;
function showText() {
    intervalID = setInterval(show, 250);
}
function show() {
    document.getElementById('text-overlay').style.opacity = '100%';
    if(document.getElementById('text-overlay').style.opacity>1) {
        clearInterval(intervalID); 
        console.log("helo")
    }
}
function hideText() {
    intervalID = setInterval(hide, 250);
}
function hide() {
    document.getElementById('text-overlay').style.opacity = '0%';
    clearInterval(intervalID);
}