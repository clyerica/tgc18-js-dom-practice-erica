// PLACE YOUR CODE HERE
document.querySelector('#btn').addEventListener('click', function(){
    let leftNumber=Math.floor(Math.random()*6)+1;
    let rightNumber=Math.floor(Math.random()*6)+1;
    document.querySelector('#left').innerHTML= leftNumber;
    document.querySelector('#right').innerHTML= rightNumber;
    document.querySelector('span').innerHTML= leftNumber+rightNumber;
})