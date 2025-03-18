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
    container.innerHTML = "";    /*Clears the container elements when the button is clicked"*/

    if(n>100 || n==0){
        alert("Please enter a number between 1 and 100");
    }
    else{
        for (let j=1; j<=n*n; j++){
            container.style.cssText=`width:${n*30}px;
                                    height:${n*30}px;`
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            
            square.addEventListener("mouseover",()=>{
                square.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
                                        ${Math.floor(Math.random()*256)},
                                        ${Math.floor(Math.random()*256)}`;
            });
            
        };

    };
   
});

