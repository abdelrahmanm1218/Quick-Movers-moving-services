let boxOne = document.getElementById("box-one");
let boxTwo = document.getElementById("box-two");
let boxThree = document.getElementById("box-three");
let boxFour = document.getElementById("box-four");
let boxFive = document.getElementById("box-five");

//onclick to div redirect to moving page
boxOne.onclick = ()=> {
    let newURL = 'moving.html';
    window.location.href=newURL;
}
//onclick to div redirect to cleaning page
boxTwo.onclick = ()=> {
    let newURL = 'cleaning.html';
    window.location.href = newURL;
}
//onclick to div redirect to moving and cleaning page
boxThree.onclick =()=>{
    let newURL = 'moving and cleaning.html';
    window.location.href = newURL;
}
//onclick to div redirect to Gisper page
boxFour.onclick = ()=>{
    let newURL = 'Gisper.html';
    window.location.href = newURL;
}
//onclick to div redirect to painting page
boxFive.onclick = ()=>{
    let newURL = "painting.html";
    window.location.href = newURL;
}
