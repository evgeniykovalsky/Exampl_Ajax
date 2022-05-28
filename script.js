'use strict';

// let select = document.querySelector('#cars'),
//     output = document.querySelector('.output');

// select.addEventListener('change', ()=> {
//     const request = new XMLHttpRequest();
   
//     request.addEventListener('readystatechange', (event) => {
        
//         if (request.readyState === 4 && request.status === 200) {
            
//             const data = JSON.parse(request.responseText);
            
//             data.cars.forEach(item => {
//                 if(item.brand === select.value) {
//                     output.innerHTML = 'Model: ' + item.model + '<br> Price: '+ item.price;
//                 }
//             });
//         }
//     });
    
//     request.open('GET', './cars.json');
    
//     request.setRequestHeader('Content-type','application/json');
//     request.send();
// });

const sendForm=()=>{
let form=document.querySelector('form'),
     user=form.querySelector('[type=text]'),
     email=form.querySelector('[type=mail]'),
     mesDiv=document.querySelector('.message');
     let massage={
         'success':'Ващі дані успішно відправлені',
         'warning': 'Дані відправляються',
         'error': 'Помилка відправленних данних'
     }
     form.addEventListener('submit',(event)=>{
         event.preventDefault();
         const requst=new XMLHttpRequest();
         requst.addEventListener('readystatechange',()=>{
               mesDiv.classList.add('warning');
               mesDiv.innerHTML=massage.warning;

               if(requst.readyState!=4){
                   return;
               }
               if(requst.status===200){
                   mesDiv.classList.remove('warning');
                   mesDiv.classList.add('succses');
                   mesDiv.innerHTML=massage.success;
               }
               else{
                mesDiv.classList.remove('warning');
                mesDiv.classList.add('error');
                mesDiv.innerHTML=massage.error;
               }




         });
         requst.open('POST','./send.php');
         requst.setRequestHeader('Content-type','application/json');
         const data={};
         data.user=user.ariaValueMax;
         data.email=email.value;
         const body=JSON.stringify(data);


     })
}
sendForm();
   