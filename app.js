let selectField=document.querySelector("#selectField");
let selectPara=document.querySelector(".selectPara");
let arrowImg=document.querySelector(".arrowImg");
let options=document.querySelectorAll(".option");



arrowImg.addEventListener("click",()=>{
    list.style.display="block";
});
for(let option of options){
    option.addEventListener("click",()=>{
       selectPara.innerText=option.innerText;
     arrowImg.src=option.childNodes[1].src; 
     list.style.display="none";
    })
   

}




//    option.addEventListener("click",()=>{
//        selectPara.innerHTML=this.textContent;

//     })
// }