let h1 = document.querySelector("h1");
    h1.style.color = "#2475B0";
    h1.style.fontSize = "50px";


let list = `
<li>Javascript</li>
<li>React</li>
<li>NextJs</li>
<li>Angular</li>
<li>NodeJS</li>
<li>Bootstrap</li>
<li>Tailwind</li>
`;

let ul = document.querySelector("ul");
ul.style.fontWeight = 800;
ul.style.color = "#586776";
ul.innerHTML = list;


let title = document.createElement("h1");
title.textContent = "Hey sahil this is me";
title.style.fontSize = "50px";
title.style.color = "#6ab04c";
document.body.appendChild(title);

// Loops to create same element multiple times



let pra = () => {
    for(let i = 0; i<5;i++){
        let para = document.createElement("p")
        para.className = "para"
        para.textContent = `This is a para: ${i}`;
        para.style.fontSize = "16px"
        para.style.fontWeight = "600"
        para.color = "#BB2CD9"
        document.body.appendChild(para)
    }
}

// pra()

let div = document.createElement("div")
div.innerHTML = pra()
div.className = "para"
console.log(div);

let maths = () => {
    let value = prompt("Solve 50 - 10")
    if(value == 40){
        let p = document.querySelector("p")
        p.textContent = "Success"
    }else{
        let p = document.querySelector("p")
        p.textContent = "Failed"
    }
}
