const container = document.querySelector(".container");

for (let i=1; i<=16*16; i++){
    const square = document.createElement("div");
    container.appendChild(square);
    square.style.cssText = "border:1px solid pink; height:30px; width:30px; gap:10px;";
}