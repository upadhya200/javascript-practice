/*var btn_on=document.querySelector("#on");
var btn_off=document.querySelector("#off");
var blb =document.querySelector(".bulb");

btn_on.addEventListener("click",function(){
    blb.style.backgroundColor="yellow";
})

btn_off.addEventListener("click",function(){
    blb.style.backgroundColor="white";
})*/
var blb =document.querySelector(".bulb");
var swt = document.querySelector("#switch");
var flag_value=0;

swt.addEventListener("click",function(){
    if (flag_value==0) {
        blb.style.backgroundColor="Yellow"
        console.log("yellow")
        flag_value=1
    } else {
        blb.style.backgroundColor="transparent"
        console.log("transparent")
        flag_value=0
    }
})