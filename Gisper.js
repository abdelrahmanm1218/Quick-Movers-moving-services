let formSection = document.getElementById("form-section");
let multiFormDiv = document.getElementById("multiform-first");
let pagination = document.getElementById("pagination");

let contact = document.getElementById("contact");
let details = document.getElementById("details");


let firstMultiForm = document.getElementById("first-form");
let secondMultiForm = document.getElementById("second-form");


let progress = document.getElementById("progress");

firstMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("prevented")
    firstMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
    progress.classList.add("second");
    details.classList.add("active");

})
secondMultiForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("prevented")
    secondMultiForm.classList.add("hidden");
    progress.classList.add("fourth");
    // pagination.classList.add()
    // movingTo.classList.add("active");
})



let firstBack = document.getElementById("first-back");
let secondBack = document.getElementById("second-back");
// let thirdBack = document.getElementById("third-back");

firstBack.addEventListener("click",(e)=>{
    console.log("first back clicked");
})

secondBack.addEventListener("click", ()=>{
    console.log("second back clicked");
    details.classList.remove("active");
    progress.classList.remove("second");
    secondMultiForm.classList.add("hidden");
    firstMultiForm.classList.remove("hidden");
})
