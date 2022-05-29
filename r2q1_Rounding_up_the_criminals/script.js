// PLACE YOUR CODE HERE
let container=document.querySelector('#container')
for (i=0; i<=8; i++){
    if (container.children[i].classList.contains('a')){
        if(container.children[i].classList.contains('undercover')){
            container.children[i].style.backgroundColor='yellow'
            container.children[i].innerHTML +="(jailed)"
        }
        else {   
        container.children[i].style.backgroundColor='red'
            container.children[i].innerHTML +="(jailed)"
        }
    }
    
}