var btn_on=document.querySelector("#on");
var btn_off=document.querySelector("#off");
var blb =document.querySelector(".bulb");

btn_on.addEventListener("click",function(){
    blb.style.backgroundColor="yellow";
})

btn_off.addEventListener("click",function(){
    blb.style.backgroundColor="white";
})