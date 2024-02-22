//scroller progress
let el = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop/height)*100}%`;
});


// show side menu
let navMenu = document.getElementById("burger-icon");
let sidebar = document.getElementById("sidebar");
navMenu.onclick =  ()=>{
    sidebar.classList.toggle("active");
}
// hide side menu
let closeMenu = document.getElementById("close");
closeMenu.onclick = ()=>{
    sidebar.classList.toggle("active");
}