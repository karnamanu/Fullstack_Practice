let increamentBtn = document.querySelector('#increament');
increamentBtn.addEventListener('click', increamentCounter)
let counter = 0;
function increamentCounter(){
    let counterEl = document.getElementById('counter');
    counter++
    counterEl.innerText = counter
}
function decreamentCounter(){
    let counterEl = document.getElementById('counter');
    counter--
    counterEl.innerText = counter
}

let decreamentBtn = document.querySelector('#decreament');
 decreamentBtn.addEventListener('click', decreamentCounter)


