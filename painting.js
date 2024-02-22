let formSection = document.getElementById("form-section");
let multiFormDiv = document.getElementById("multiform-first");
let pagination = document.getElementById("pagination");

let contact = document.getElementById("contact");
let details = document.getElementById("details");
let components = document.getElementById("components");

let firstMultiForm = document.getElementById("first-form");
let secondMultiForm = document.getElementById("second-form");
let thirdMultiForm = document.getElementById("third-form");

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
    thirdMultiForm.classList.remove("hidden");
    progress.classList.add("fourth");
    components.classList.add("active");
})
thirdMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    thirdMultiForm.classList.add("hidden");
    progress.classList.add("fifth");
})