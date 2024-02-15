var a = document.querySelector("h1");//to connect/manupulate javascript with h1 tag
//console.log(a);
a.innerHTML="Click Me";//to connect/manupulate javascript with content of html tag
a.style.fontSize="100px";// to connect/manupulate javascript with CSS element
a.style.backgroundColor="Yellow";//here we are accessing the var a for H1 , so it is only changing the h1 background not for whole body background.

document.querySelector('body').style.backgroundColor="red";// Here i have access the body tag from html and changed the background color property(by accessing the CSS)

a.addEventListener("click",function(){
    a.innerHTML="Hyy💕💞,I Love You😘"
    a.style.backgroundColor="pink"
    a.style.color="white"
    document.querySelector('body').style.backgroundColor="#AC7D88"
    a.style.padding="80px"
});//EventListener
