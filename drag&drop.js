let lists = document.querySelectorAll("list");
        let rightBox = document.getElementById("right");
        let leftBox = document.getElementById("left");
        
        // Drag and Drop functionality
        for(item in lists){
            item.addEventListener("dragstart",function(e){
                let selected = e.target;
                console.log("dragging")
            })
        }