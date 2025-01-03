// let body = document.querySelector("body")
// body.addEventListener("mousemove", function(event) {
//     let element = document.createElement("div");
//     element.classList.add("circle");
//     console.log(element);
//     element.style.left = event.clientX + "px";
//     element.style.top = event.clientY + "px";
//     body.appendChild(element);
    
//     element.classList.add("fade-out");
//     setTimeout(() => {
//         circle.remove(); // Remove circle from DOM
//     }, 500); 
// });

// <<================================================================>>

let body = document.querySelector("body");
body.addEventListener("mousemove", function(event) {
    let element = document.createElement("div");
    element.classList.add("circle");
    
    // Set the position of the circle
    element.style.left = event.clientX - 10 + "px"; // Adjust for circle center
    element.style.top = event.clientY - 10 + "px"; // Adjust for circle center

    body.appendChild(element);
    
    // Add fade-out animation class
    // element.classList.add("fade-out");

    // Remove the circle after the fade-out
    setTimeout(() => {
        element.remove(); 
    }, 500); 

    // Change the color randomly
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    element.style.borderColor = randomColor;

    // Change the size of the circle
    // let randomSize = Math.random() * (100 - 20) + 20; // Random size between 20px and 100px
    // element.style.width = `${randomSize}px`;
    // element.style.height = `${randomSize}px`;


});

// <<===============================================================>>

// let body = document.querySelector("body");
// body.addEventListener("mousemove", function(event) {
//     // Create an icon element
//     let icon = document.createElement("i");
//     icon.classList.add("fa-regular", "fa-star"); // Example Font Awesome star icon

//     // Set the position of the icon
//     icon.style.left = event.clientX - 10 + "px"; // Adjust for icon center
//     icon.style.top = event.clientY - 10 + "px"; // Adjust for icon center

//     // Add styles and append to body
//     icon.classList.add("cursor-icon");
//     body.appendChild(icon);

//     // Add fade-out class and remove after animation
//     icon.classList.add("fade-out");
//     setTimeout(() => {
//         icon.remove();
//     }, 500);
// });
