function firstContainer(){
    let paginationIcons = document.querySelectorAll("#pagination-one i");
    let paginationCount = paginationIcons.length;
    let cards = document.querySelectorAll("#cards-one .item");
    let cardsCount = cards.length;
    let currentSlide = 0;
    for(let i = 0; i<paginationCount;i++){
        paginationIcons[i].onclick = ()=> {
            currentSlide = parseInt(paginationIcons[i].getAttribute("data-item"));
            checker(paginationIcons,cards,currentSlide);
        }
    }

}

function secondContainer(){
    let paginationIcons = document.querySelectorAll("#pagination-two i");
    let paginationCount = paginationIcons.length;
    let cards = document.querySelectorAll("#cards-two .item");
    let cardsCount = cards.length;
    let currentSlide = 0;
    for(let i = 0; i<paginationCount;i++){
        paginationIcons[i].onclick = ()=> {
            currentSlide = parseInt(paginationIcons[i].getAttribute("data-item"));
            checker(paginationIcons, cards, currentSlide);
        }
    }
}
function thirdContainer(){
    let paginationIcons = document.querySelectorAll("#pagination-three i");

    let paginationCount = paginationIcons.length;
    let cards = document.querySelectorAll("#cards-three .item");
    let cardsCount = cards.length;
    let currentSlide = 0;
    for(let i = 0; i<paginationCount;i++){
        paginationIcons[i].onclick = ()=> {
            currentSlide = parseInt(paginationIcons[i].getAttribute("data-item"));
            checker(paginationIcons, cards, currentSlide);
        }
    }
}
function checker(icons, cards, current){
    //remove all active
    removeAllActive(icons,cards);
    //add active class to clicked icons
    icons[current].classList.add("active");
    //remove notactive class from item
    cards[current].classList.remove("notactive");
    cards[current].classList.add("active");
}

function removeAllActive(icons,cards){
    icons.forEach((icon)=> icon.classList.remove("active"));
    cards.forEach((card)=> card.classList.remove("active"));
}
firstContainer()
secondContainer()
thirdContainer()




