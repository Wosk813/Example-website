var cvButton = document.getElementById('cvButt')
var cvBackButton = document.getElementById('goBack')
var cv = document.getElementById('cv')
var background = document.getElementById('background')

cvButton.addEventListener("click", showCV)
cvBackButton.addEventListener("click", hideCV)
function showCV(){
    cv.classList.add('show')
    cv.classList.remove('hide')
    background.classList.add('background')
}
function hideCV(){
    cv.classList.add('hide')
    cv.classList.remove('show')
    background.classList.remove('background')
}