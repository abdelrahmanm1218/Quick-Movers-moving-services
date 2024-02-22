/*start multistep form*/ 
/*form divs */ 
let formSection = document.getElementById("form-section");
let mainFormDiv = document.getElementById("main-form");
let multiFormDiv = document.getElementById("multiform-first");
let pagination = document.getElementById("pagination");
let completion = document.getElementById("completion-div");
/*pagination icon number*/
let personal = document.getElementById("personal");
let about = document.getElementById("about");
let moveOut = document.getElementById("move-out");
let moveIn = document.getElementById("move-in");
/*Forms*/
let mainForm = document.getElementById("first");
let firstMultiForm = document.getElementById("first-form");
let secondMultiForm = document.getElementById("second-form");
let thirdMultiForm = document.getElementById("third-form");
let fourthMultiForm = document.getElementById("fourth-form");

/*progress bar in pagination*/
let progress = document.getElementById("progress");

mainForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    mainFormDiv.classList.add("hidden");
    pagination.classList.remove("hidden");
    multiFormDiv.classList.remove("hidden")

})

firstMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("prevented")
    firstMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
    progress.classList.add("second");
    about.classList.add("active");

})

secondMultiForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("prevented")
    secondMultiForm.classList.add("hidden");
    thirdMultiForm.classList.remove("hidden");
    progress.classList.add("third");
    moveOut.classList.add("active");
})

thirdMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    thirdMultiForm.classList.add("hidden");
    fourthMultiForm.classList.remove("hidden");
    progress.classList.add("fourth");
    moveIn.classList.add("active");
})

fourthMultiForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // fourthMultiForm.classList.add("hidden");
    formSection.classList.add("hidden");
    pagination.classList.add("hidden");
    multiFormDiv.classList.add("hidden");
    completion.classList.remove("hidden");
})

let firstBack = document.getElementById("first-back");
let secondBack = document.getElementById("second-back");
let thirdBack = document.getElementById("third-back");
let fourthBack = document.getElementById("fourth-back");

firstBack.addEventListener("click",()=>{
    console.log("first back clicked");
    pagination.classList.add("hidden");
    multiFormDiv.classList.add("hidden");
    mainFormDiv.classList.remove("hidden");
})

secondBack.addEventListener("click", ()=>{
    console.log("second back clicked");
    about.classList.remove("active");
    progress.classList.remove("second");
    secondMultiForm.classList.add("hidden");
    firstMultiForm.classList.remove("hidden");
})

thirdBack.addEventListener("click",()=>{
    console.log(" third back clicked clicked");
    moveOut.classList.remove("active");
    progress.classList.remove("third");
    thirdMultiForm.classList.add("hidden");
    secondMultiForm.classList.remove("hidden");
})

fourthBack.addEventListener("click",()=>{
    console.log("fourth back clicked");
    moveIn.classList.remove("active");
    progress.classList.remove("fourth");
    fourthMultiForm.classList.add("hidden");
    thirdMultiForm.classList.remove("hidden");

})

















