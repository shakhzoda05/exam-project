let elUserName=document.querySelector(".username")
const userData=JSON.parse(window.localStorage.getItem("userData"))
elUserName.textContent=userData.username


let elModalWrapper=document.querySelector(".modal-wrapper")

function handleClickAddBtn(){
    elModalWrapper.classList.replace("scale-0","scale-100")
}

function closeModal(){
    elModalWrapper.classList.replace("scale-100","scale-0")

}

let elChangeImg=document.querySelector(".changeImgUrl")
let elRenderImg=document.querySelector(".render-img")
let elSubmitForm=document.querySelector(".modal-form")
elChangeImg.addEventListener('change', function(e){
    elRenderImg.src=(URL.createObjectURL(e.target.files[0]))
})

// create Start
elSubmitForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log(evt)

    const data={
        id:1,
        imgUrl: elRenderImg.src,
        nameID:evt.target.name.value,
        gmailId:evt.target.gmail.value,
        phoneNumber:evt.target.phoneNumber.value,
        newNumber:evt.target.newNumber.value,
        dataValue:evt.target.dataValue.value
    }
    console.log(data )
})
function handleSubmitCreateStudent(e){

}