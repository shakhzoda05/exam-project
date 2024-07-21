let elSignInForm=document.querySelector(".sign-in-form")

elSignInForm.addEventListener("submit",function(e){
    e.preventDefault()
    const data={
        login:e.target.login.value,
        password:e.target.password.value
    }
    e.target.reset()
    const isRegistered =JSON.parse(window.localStorage.getItem("isRegistered"))
    if(isRegistered){
        if(data.login.toLowerCase()==isRegistered.newLogin && data.password.trim().toLowerCase()==isRegistered.newPassword){
            window.localStorage.setItem("loginedUser",JSON.stringify(data))
            location.pathname="./student.html"



    }

    else{
        if(data.login.toLowerCase()=="shaxzoda" && data.password.trim().toLowerCase()=="123"){
            window.localStorage.setItem("loginedUser",JSON.stringify(data))
            location.pathname="./student.html"
        }
        else{
            alert("Login va Parolda Xatolik bor! Qayta urinib ko'ring yoki ro'yxatdan o'ting")
        }


    }
}
    
})