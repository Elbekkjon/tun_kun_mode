const naV = document.getElementById('naV')
const butM = document.getElementById('butM')
const head = document.getElementsByTagName('header')
const secti = document.getElementsByTagName('section')

function menu() {
    naV.classList.toggle('show')
}
function button() {
    secti[0].classList.toggle('butt')
    head[0].classList.toggle('butt')
    butM.classList.toggle('butt')
    console.log(5)
}