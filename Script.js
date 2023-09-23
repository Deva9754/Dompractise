var istatus = document.querySelector("h2")
var abc = document.querySelector("#add")
var check = 0
abc.addEventListener("click",function(){
    if (check == 0) {
        istatus.innerHTML = "You are now Friends"
        istatus.style.color = "green"
        check = 1
        
         alert("You are  now Friends")
        abc.innerHTML = "Remove Friend"
    console.log("abc")
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        abc.innerHTML = "Add Friend"
        check = 0
    }
})
