
function getFormValues() {

    let email = null;
    email= document.querySelector("#email-address").value

    let model = null;
    let modelOptions=document.querySelectorAll('.phone-type')
    for (let m of modelOptions){
        if (m.checked){
            model=m.value;
            break;
        }
    }

    let services = [];
    let servicesOptions=document.querySelectorAll('.services');
    for (let s of servicesOptions){
       if(s.checked){
           services.push(s.value)
       }
    }

    let pickup = null;
    pickup=document.querySelector('#pick-up').value

    // leave this line alone!
    return [email, model, services, pickup];

}

// document.querySelector('#submit').addEventListener('click', function(){
//     getFormValues();
//     email= document.querySelector("#email-address").value

//     let modelOptions=document.querySelectorAll('.phone-type')
//     for (let m of modelOptions){
//         if (m.checked){
//             model=m.value;
//             break;
//         }
//     }

//     let servicesOptions=document.querySelectorAll('.services');
//     for (let s of servicesOptions){
//        if(s.checked){
//            services.push(s.value)
//        }
//     }

//     let pickupSelect=document.querySelectorAll('#pick-up');
//     pickup=pickupSelect.value

//     console.log(email, model, services, pickup)
// })

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
