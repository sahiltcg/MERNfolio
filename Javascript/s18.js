// Create a function that displays the current date and time in a specific format.

let clock = document.querySelector(".time")
let toggel = document.querySelector("button")
let is24Hours = true;

function updateclock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // console.log(now.toDateString());
    // console.log(`Time now is: `);
    
    if(!is24Hours){
        let ampm = hours>=12 ? "PM" : "AM"
        hours = hours % 12 || 12; 
        clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`
    } else{
        clock.innerText = `${hours}:${minutes}:${seconds}`
    }
}

function toggelHours(){
    is24Hours = !is24Hours
    toggel.textContent = is24HourFormat
    ? 'Switch to 12-Hour Format'
    : 'Switch to 24-Hour Format';
}

toggel.addEventListener("click",toggelHours)

setInterval(updateclock,1000)

updateclock();
