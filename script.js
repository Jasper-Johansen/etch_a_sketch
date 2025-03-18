const container = document.querySelector(".container");

for (let i=1; i<=16*16; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)},
                                ${Math.floor(Math.random()*256)}`;
    });
    
};

