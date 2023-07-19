document.addEventListener('DOMContentLoaded',()=> {
let username  = document.querySelector("#username"); 
let password = document.querySelector("#password"); 
let loginBtn = document.querySelector("#sign-in"); 

let getUser = localStorage.getItem("us");
let getPassWord = localStorage.getItem("pa");

loginBtn.addEventListener("click",function(e){
    e.preventDefault();
    if (username.value === "" && password.value === "") {
        alert("please fill data");
    } else {
        if (getUser && getUser.trim() === username.value.trim() &&
            getPassWord &&
            getPassWord === password.value.trim())
        {
            setTimeout(()=> 
            {
                window.location = "index.html";
            },1500);
        }else {
            window.location = "register.html";

        }
    }    
})
});