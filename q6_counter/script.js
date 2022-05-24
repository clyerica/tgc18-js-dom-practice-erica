document.querySelector('body').innerHTML='<div id="box">0</div><button id="increment">+</button><button id="decrease">-</button><button id="reset">Reset</button>';
let box=document.querySelector('#box');

box.style.backgroundColor='green'

document.querySelector('#increment').addEventListener('click', function(){
    box.innerHTML=Number(box.innerHTML) + 1
    if (box.innerHTML>=10){
        box.innerHTML=10
    }

    if (box.innerHTML%2==0){
        box.style.backgroundColor='green'
    }
    else {
        box.style.backgroundColor='red'
    }
})

document.querySelector('#decrease').addEventListener('click', function(){
    box.innerHTML=Number(box.innerHTML) - 1
    if(box.innerHTML<=0){
        box.innerHTML=0
    }

    if (box.innerHTML%2==0){
        box.style.backgroundColor='green'
    }
    else {
        box.style.backgroundColor='red'
    }
})

document.querySelector('#reset').addEventListener('click', function(){
    box.innerHTML=0
    box.style.backgroundColor='green'
})


