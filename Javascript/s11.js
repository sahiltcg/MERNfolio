
let button = document.createElement("button")

button.innerText = "I am a button"
button.style.cursor = "pointer"

button.addEventListener("click", function(){
    alert("don't click me")
})

document.body.appendChild(button)