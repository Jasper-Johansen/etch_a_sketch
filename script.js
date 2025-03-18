const container = document.querySelector(".container");
const btn = document.querySelector(".reset");
const body = document.querySelector("body");

for (let i=1; i<=16*16; i++){
    const square = document.createElement("div");
    let opacityVal = 0.1;
    const r = Math.floor(Math.random()*256); 
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

/*Realized that the rgb randomization should be outside the mouseover
event to prevent the color from changing when the mouse is moved over
the square next time.
Now each square has the same colour opacity.*/

    square.classList.add("square");
    container.appendChild(square);
    
    square.addEventListener("mouseover",()=>{
        if (opacityVal<1.01){
            opacityVal += 0.1;
            square.style.backgroundColor = `rgba(${r},${g},${b},${opacityVal})`;
            
        }
        
    });
    
};

btn.addEventListener("click",()=>{
    let n = parseInt(prompt("Enter the number of rows and columns for the grid!"));
    console.log(`${n}`);

    if(n>100 || n === 0 || isNaN(n)){   /* n === NaN isn't possible, so one should use isNaN function*/
        alert("Please enter a number between 1 and 100");
    }
    else{
        container.innerHTML = "";    /*Clears the container elements when the button is clicked"*/
        for (let j=1; j<=n*n; j++){
            const square = document.createElement("div");
            let opacityVal = 0.1;
            const r = Math.floor(Math.random()*256); 
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            
            square.classList.add("square");
            square.style.cssText = `width:${480/n}px;
                                    height:${480/n}px`
            container.appendChild(square);
    
            square.addEventListener("mouseover",()=>{
                if (opacityVal<1.01){
                    opacityVal += 0.1
                    square.style.backgroundColor = `rgba(${r},
                                        ${g},
                                        ${b},${opacityVal})`;
                }
                
            });
            
        };

    };
   
});

