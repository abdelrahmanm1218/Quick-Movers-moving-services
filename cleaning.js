let formSection = document.getElementById("form-section");
let multiFormDiv = document.getElementById("multiform-first");
let pagination = document.getElementById("pagination");

//pagination icons
let contact = document.getElementById("contact");
let objDetails = document.getElementById("object-details");
let objComponents = document.getElementById("object-components");
//forms
let firstMultiForm = document.getElementById("first-form");
let secondMultiForm = document.getElementById("second-form");
let thirdMultiForm = document.getElementById("third-form");

/*progress bar in pagination*/
let progress = document.getElementById("progress");


firstMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("prevented")
    firstMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
    progress.classList.add("second");
    objDetails.classList.add("active");

})

secondMultiForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("prevented")
    secondMultiForm.classList.add("hidden");
    thirdMultiForm.classList.remove("hidden");
    progress.classList.add("fourth");
    objComponents.classList.add("active");
})

thirdMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    thirdMultiForm.classList.add("hidden");
    pagination.classList.add("hidden");
    multiFormDiv.classList.add("hidden");
    formSection.classList.add("hidden");
})

let firstBack = document.getElementById("first-back");
let secondBack = document.getElementById("second-back");
let thirdBack = document.getElementById("third-back");

firstBack.addEventListener("click",(e)=>{
    console.log("first back clicked");
})

secondBack.addEventListener("click", ()=>{
    console.log("second back clicked");
    objDetails.classList.remove("active");
    progress.classList.remove("second");
    secondMultiForm.classList.add("hidden");
    firstMultiForm.classList.remove("hidden");
})

thirdBack.addEventListener("click",()=>{
    console.log(" third back clicked clicked");
    objComponents.classList.remove("active");
    progress.classList.remove("fourth");
    thirdMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
})