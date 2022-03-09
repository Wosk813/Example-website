var cvButton = document.getElementById('cvButt')
var cvBackButton = document.getElementById('goBack')
var cv = document.getElementById('cv')
var body = document.getElementById('parallax')

cvButton.addEventListener("click", showCV)
cvBackButton.addEventListener("click", hideCV)
function showCV(){
    cv.style.transform = 'translateX(0)';
    body.style.filter = 'brightness(50%)';
}
function hideCV(){
    cv.style.transform = 'translateX(100%)';
    body.style.filter = 'brightness(100%)';
}