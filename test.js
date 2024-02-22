console.log("first")
const items = document.querySelectorAll('#itemsList .item');
const selectedItemsList = document.getElementById('selectedItemsList');
const box2 = document.getElementById('box2');

items.forEach(item => {
    item.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text/plain', event.target.innerText.trim());
    });
});

items.forEach(item => {
    const selectButton = item.querySelector('.select-button');
    selectButton.addEventListener('click', function () {
        const selectedItemText = item.innerText.trim();
        const selectedDiv = document.createElement('div');
        selectedDiv.classList.add('selected-item');
        selectedDiv.innerHTML = `<span>${selectedItemText}</span>`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            selectedDiv.remove();
        });

        selectedDiv.appendChild(deleteButton);


        console.log("selected div")
        console.log(selectedDiv);
        var frames = [{transform: "translateX(-241px)"},{transform:"translate(0,10px)"}];
        var animate = selectedDiv.animate(frames,{duration:"800",timing:"ease"});
        console.log(animate)


        selectedItemsList.appendChild(selectedDiv);
    });
});

box2.addEventListener('dragover', function (event) {
    event.preventDefault();
});

box2.addEventListener('drop', function (event) {
    event.preventDefault();
    hello();
    const selectedItemText = event.dataTransfer.getData('text/plain');
    // const selectedDiv = document.createElement('div');
    selectedDiv.classList.add('selected-item');
    selectedDiv.innerHTML = `<span>${selectedItemText}</span>`;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        selectedDiv.remove();
    });
    selectedDiv.appendChild(deleteButton);
    selectedItemsList.appendChild(selectedDiv);
});
            
