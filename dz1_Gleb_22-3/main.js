const INNInput = document.querySelector('#INNInput')
const INNCheck = document.querySelector('#INNCheck')
const INNResult = document.querySelector('.INNResult')

const regExp = /^ 0|1|2\d{13}$/

INNCheck.onclick = () => {
    if (regExp.test(INNInput.value)) {
        INNResult.innerHTML = 'OK'
        INNResult.style.color = 'green'
    } else {
        INNResult.innerHTML = 'NOT OK'
        INNResult.style.color = 'red'
    }
}

let position = 0
function recAnimation () {
    position++;
    if (position<451)
        document.querySelector('.box').style.left = position + 'px';
    animation();
}
function animation() {
    setTimeout(recAnimation, 10)
}
animation()