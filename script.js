const container = document.querySelector(".container");
const btn = document.querySelector(".reset");
const body = document.querySelector("body");

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

btn.addEventListener("click",()=>{
    let n = parseInt(prompt("Enter the number of rows and columns for the grid!"));
    console.log(`${n}`);

    if(n>0 && n<100){
        container.innerHTML = "";    /*Clears the container elements when the button is clicked"*/
        for (let j=1; j<=n*n; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `width:${480/n}px;
                                    height:${480/n}px`
            container.appendChild(square);
            
            square.addEventListener("mouseover",()=>{
                square.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                                        ${Math.floor(Math.random()*256)},
                                        ${Math.floor(Math.random()*256)}`;
            });
            
        };
    }
    else{
        alert("Please enter a number between 1 and 100");
    }
   
});

