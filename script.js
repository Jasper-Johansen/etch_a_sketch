const container = document.querySelector(".container");

for (let i=1; i<=16*16; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.style.cssText = `border:1px solid pink; 
                            height:30px; 
                            width:30px; 
                            margin:2px;`;

    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)}`;
    });
    
        };

