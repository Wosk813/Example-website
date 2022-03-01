var cvButton = document.getElementById('cvButt')
var cvBackButton = document.getElementById('goBack')
var cv = document.getElementById('cv')
//var body = document.getElementsByTagName('body')

cvButton.addEventListener("click", showCV)
cvBackButton.addEventListener("click", hideCV)
function showCV(){
    cv.style.right = '0'
    //body.style.filter = 'brightness("50%")'
}
function hideCV(){
    cv.style.right = '-1000px'
}