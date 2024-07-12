var date = new Date()
var time = date.getHours
var body = document.body

if (time > 6 && time < 12) {
    body.style.backgroundImage = 'url(img/dia.jpg)'
    body.style.backgroundPosition = 'center'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'

}
else if (time > 12 && time < 18) {
    body.style.backgroundImage = 'url(img/tarde.jpg)'
    body.style.backgroundPosition = 'center'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}
else {
    body.style.backgroundImage = 'url(img/noite.jpg)'
    body.style.backgroundPosition = 'center'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
}