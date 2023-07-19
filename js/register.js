document.addEventListener('DOMContentLoaded',()=> { 
    
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");
    let email = document.querySelector("#email");
    let registerBtn = document.querySelector("#signup");

    registerBtn.addEventListener("click",function(e){
    e.preventDefault();
    if (username.value === "" || password.value === "" || email.value === "") {
        alert("please fill data");
    } else {
        localStorage.setItem("us",username.value);
        localStorage.setItem("pa",password.value);
        localStorage.setItem("em",email.value);
        setTimeout(()=> 
            {
                window.location = "index.html";
            },1500);
        }
    }); /* register it and chk it if there is any us pa em*/

}) /* lod all than action it*/

/******************************************************************************************************************************************/