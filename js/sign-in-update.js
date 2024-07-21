let elSignInUpdateForm=document.querySelector(".sign-in-update-form")

elSignInUpdateForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data={
        newLogin:e.target.login.value,
        newPassword:e.target.password.value
    }
    window.localStorage.setItem("isRegistered", JSON.stringify(data))
    setTimeout(()=>{
location.pathname="./index.html"
    },500)
})

