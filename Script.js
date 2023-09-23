let a= document.querySelector("h1")
console.log(a);
a.innerHTML = "u r Changed now "
a.style.color="yellow"
a.style.backgroundColor="salmon"
a.style.fontSize="80px"
a.style.border="30px solid grey"
let abc=0
let bcd=0
let btn=document.getElementById("btn")
let main= document.getElementById("main")
 btn.addEventListener("click",function(){
    if(abc == 0){
    a.style.backgroundColor="black"
    abc=1
    btn.innerHTML="OFF"
    }
    else{
        a.style.backgroundColor="salmon"
        btn.innerHTML="ON"
abc=0  
  }
 })
 dark.addEventListener("click",function(){
    if(bcd == 0){
    main.style.backgroundColor="black"
    bcd=1
    dark.innerHTML="Normal"
    }
    else{
        main.style.backgroundColor="transparent"
        dark.innerHTML="Dark Theme"
bcd=0  
  }
 })