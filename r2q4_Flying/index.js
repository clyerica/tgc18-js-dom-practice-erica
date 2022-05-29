function extractFormInfo()
{
  totalCost=0

  let firstName = null;
  firstName= document.querySelector('#first').value;

  let lastName = null;
  lastName = document.querySelector('#last').value;  

  let ticketClass=null;
  let ticketOptions=document.querySelectorAll('.ticket');
  for (let t of ticketOptions){
    if (t.checked){
      ticketClass=t.value
    }
  }
  if (ticketClass=='first-class'){
    totalCost=totalCost+1200
  }
  else if(ticketClass=='business'){
    totalCost=totalCost+750
  }
  else if(ticketClass=='economy'){
    totalCost=totalCost+250
  }
  
  let options = []
  let optionList ='<ul>'
  let optionChecks = document.querySelectorAll('.option');
  for (let o of optionChecks){
    if(o.checked){
      options.push(o.value);
      totalCost= totalCost+10
      optionList+=`<li>${o.value}</li>`
    }
  }
  optionList+='</ul>'

  document.querySelector('#summary').innerHTML=`
    <ul>
      <li>Name: ${firstName} ${lastName}</li>
      <li>Ticket Class: ${ticketClass}</li>
      <li>Options: ${optionList}</li>
      <li>Total Cost: ${totalCost}</li>
   </ul>`
}

document.querySelector('#booking-button').addEventListener('click', function(){
  extractFormInfo();
})