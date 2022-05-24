// PLACE YOUR CODE HERE

// 1.
let emphasis=document.querySelectorAll('.emphasis');
for (let e of emphasis){
    e.style.fontFamily='Verdana'
}

// 2.
let finished=document.querySelectorAll('.finished');
for (let f of finished){
    f.style.textDecoration='line-through'
}

// 3.
let todo=document.querySelectorAll('ul#low-priority li.todo');
for (let t of todo){
    t.style.backgroundColor='blue'
}

// 4.
let alert=document.querySelectorAll('.alert')
for (let a of alert){
    a.style.fontColor='red'
}