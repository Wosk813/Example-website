var cvButton = document.getElementById('cvButt')
var cvBackButton = document.getElementById('goBack')
var cv = document.getElementById('cv')
cvButton.addEventListener("click", showCV)
cvBackButton.addEventListener("click", hideCV)
function showCV(){
    cv.style.display = 'flex'
}
function hideCV(){
    cv.style.display = 'none'
}