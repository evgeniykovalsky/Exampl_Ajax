'use strict';
// let myMasiv=[];
// function creatСolor()
// {
   
   


        
//         let a=Math.floor(Math.random() * 255);
//         let b=Math.floor(Math.random() * 255);
//         let c=Math.floor(Math.random() * 255);
//         return `rgb(${a}, ${b}, ${c})`;
        
// }

// function creatMasiv(n)
// {
   
//     let maxLength=n;

//    do{
        
//         let a=Math.floor(Math.random() * 16);
//          if(!myMasiv.includes(a)){
//             myMasiv.push(a);
            
//          }

       
//     }while(myMasiv.length<16)
//     console.log(myMasiv);
// }
// creatMasiv(16);

// function shafle(){
// let ul=document.querySelector('ul');
//     let li=ul.querySelectorAll('li');
//     let i=0;
//    li.forEach(elem=>{
     
//        elem.style.order=myMasiv[i];
//        elem.style.backgroundColor=creatСolor();
//        i++;
//    })
// }
// shafle();
let url='https://jsonplaceholder.typicode.com/posts';

// const sendPost=()=>{
//     const request=new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState!==4){
//             return;
//         }
//         if(request.status===200){
//             let data=JSON.parse(request.responseText);
//             createWrap(data);
               
//         }
//     });
//     request.open('GET',url);
//     request.setRequestHeader('Content-type','application/json');
//     request.send();
// }
const createWrap=(data)=>{
    data.forEach(item => {
        if(item.userId==1){
        let str=`<div class="col-12 col-md-6">
        <div class="wrap"> <h2> ${item.title} </h2>
        <p>  ${item.body}</p>
        </div>
        </div>`;
        document.querySelector('.row').insertAdjacentHTML('beforeend',str);
        }
        
    });
}
// sendPost();

const sendPost=()=>{
       
   return new Promise((resolve,reject)=>{
       const request=new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if(request.readyState!==4){
            return;
        }
        if(request.status===200){
            let data=JSON.parse(request.responseText);
           resolve(data);
               
        }
        else{
            reject('Беда печаль: Ошибка получения');
        }
    });
       request.open('GET',url);
       request.setRequestHeader('Content-type','application/json');
       request.send();
   });
   
}
sendPost().then((data)=>{createWrap(data)}).catch((error)=>{console.error(error)});