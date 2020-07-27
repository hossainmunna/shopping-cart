// document.getElementById('phonePlus').addEventListener('click',function(){
//    let phoneInput=  document.getElementById('phoneInput');
//    phoneCount = parseInt(phoneInput.value);
//    let phoneNewCount =  phoneCount + 1;
//    phoneInput.value = phoneNewCount;
//    let phonePrice =phoneNewCount *1199;
//    document.getElementById ('phonePrice').innerText =  "$" + phonePrice;
// });
// document.getElementById('phoneMinus').addEventListener('click',function(){
//    let phoneInput=  document.getElementById('phoneInput');
//    phoneCount = parseInt(phoneInput.value);
//    let phoneNewCount =  phoneCount - 1;
//    phoneInput.value = phoneNewCount;
//    let phonePrice =phoneNewCount *1199;
//    document.getElementById('phonePrice').innerText = "$" + phonePrice;
// })

document.getElementById('phonePlus').addEventListener('click',function(){
   handleProductChange (true);
});
document.getElementById('phoneMinus').addEventListener('click',function(){
   handleProductChange(false);
});

function handleProductChange (isPlus){
   let phoneInput=  document.getElementById('phoneInput');
   phoneCount = parseInt(phoneInput.value);
   // let phoneNewCount =  phoneCount - 1;
   if (isPlus == true){
      phoneNewCount = phoneCount +1;
   }
   if (isPlus == false && phoneCount > 0 ){
      phoneNewCount = phoneCount -1;
   }
   phoneInput.value = phoneNewCount;
   let phonePrice =phoneNewCount *1199;
   document.getElementById('phonePrice').innerText = "$" + phonePrice;
}

                  //case area 

   document.getElementById('casePlus').addEventListener('click',function(){
      let caseInput = document.getElementById ('caseInput')
      let caseCount = parseInt (caseInput.value);
      let caseNewCount = caseCount + 1;
      caseInput.value = caseNewCount;
      let casePrice = caseNewCount *59;
      document.getElementById ('casePrice').innerText = '$' + casePrice;
    });



      document.getElementById('caseMinus').addEventListener('click',function(){
         let caseInput = document.getElementById ('caseInput')
         let caseCount = parseInt (caseInput.value);
         let caseNewCount = caseCount -1  ;
         caseInput.value = caseNewCount;
         let casePrice = caseNewCount *59;
         document.getElementById ('casePrice').innerText = '$' + casePrice;        
       });

