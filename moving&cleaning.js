/*form divs */
let formSection = document.getElementById("form-section");
let multiFormDiv = document.getElementById("multiform-first");
let pagination = document.getElementById("pagination");
let completion = document.getElementById("completion-div");
/*pagination icon number*/
let contact = document.getElementById("contact");
let details = document.getElementById("details")
let movingFrom = document.getElementById("moving-from");
let movingTo = document.getElementById("moving-to");
let cleaning = document.getElementById("cleaning");
// Forms
let firstMultiForm = document.getElementById("first-form");
let secondMultiForm = document.getElementById("second-form");
let thirdMultiForm = document.getElementById("third-form");
let fourthMultiForm = document.getElementById("fourth-form");
let fifthMultiForm = document.getElementById("fifth-form");
/*progress bar in pagination*/
let progress = document.getElementById("progress");
let contain = document.getElementById("contain")

firstMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("prevented")
    firstMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
    progress.classList.add("second");
    console.log("making details active")
    details.classList.add("active");

})

secondMultiForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("prevented")
    secondMultiForm.classList.add("hidden");
    thirdMultiForm.classList.remove("hidden");
    progress.classList.add("third");
    movingFrom.classList.add("active");
})

thirdMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    thirdMultiForm.classList.add("hidden");
    fourthMultiForm.classList.remove("hidden");
    progress.classList.add("fourth");
    movingTo.classList.add("active");
})

fourthMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    fourthMultiForm.classList.add("hidden");
    fifthMultiForm.classList.remove("hidden");
    progress.classList.add("fifth");
    cleaning.classList.add("active")
})
fifthMultiForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    fifthMultiForm.classList.add("hidden");
    pagination.classList.add("hidden");
    multiFormDiv.classList.add("hidden");
    contain.classList.remove("hidden")
    console.log("REMOVED")
    // completion.classList.remove("hidden");
})


let firstBack = document.getElementById("first-back");
let secondBack = document.getElementById("second-back");
let thirdBack = document.getElementById("third-back");
let fourthBack = document.getElementById("fourth-back");
let fifthBack = document.getElementById("fifth-back");
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

thirdBack.addEventListener("click",()=>{
    console.log(" third back clicked clicked");
    movingFrom.classList.remove("active");
    progress.classList.remove("third");
    thirdMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
})

fourthBack.addEventListener("click",()=>{
    console.log("fourth back clicked");
    movingTo.classList.remove("active");
    progress.classList.remove("fourth");
    fourthMultiForm.classList.add("hidden");
    thirdMultiForm.classList.remove("hidden");

})

fifthBack.addEventListener("click",()=>{
    console.log("fifth back clicked");
    cleaning.classList.remove("active");
    progress.classList.remove("fifth");
    fifthMultiForm.classList.add("hidden");
    fourthMultiForm.classList.remove("hidden");
})