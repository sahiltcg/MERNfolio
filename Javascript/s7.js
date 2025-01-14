// Leap year or not

function leapYear(num){
    if((num%4 ==0 && num % 100 !== 0)|| num%400 == 0){
        console.log(num,"is a leap year");        
    } else{
        console.log(num,"is not a leap year");        
    }
}

leapYear(2000)
leapYear(1997)
leapYear(3000)
leapYear(1629)