// PLACE YOUR CODE HERE
let account=document.querySelector('#account');
let wallet=document.querySelector('#other-wallet');

document.querySelector('#topUp10').addEventListener('click', function(){
    account.innerHTML = parseInt(account.innerHTML)+10;
})

document.querySelector('#transfer10ToWallet').addEventListener('click', function(){
    if(parseInt(account.innerHTML)>=10){
        account.innerHTML = parseInt(account.innerHTML)-10;
        wallet.innerHTML = parseInt(wallet.innerHTML)+10;
    }
})

document.querySelector('#transfer10ToAccount').addEventListener('click', function(){
   if (parseInt(wallet.innerHTML)>=10){
    account.innerHTML = parseInt(account.innerHTML)+10;
    wallet.innerHTML = parseInt(wallet.innerHTML)-10;
   }
})

document.querySelector('#spendBtn').addEventListener('click', function(){
    let spendAmt=parseInt(document.querySelector('#spendAmt').value)
    if (parseInt(wallet.innerHTML)>=spendAmt){
        wallet.innerHTML = parseInt(wallet.innerHTML)-spendAmt;
    }
})