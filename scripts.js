//ALL DOM ELEMENTS
let timerDisplay = document.querySelector("#timer-display");
let timerContainer = document.querySelector("#timer-container");
let realTime = document.querySelector("#real-time-container");
let startButton = document.querySelector("#start-button");
let stopButton = document.querySelector("#stop-button");
let resetButton = document.querySelector("#reset-button");
let addFifteenButton = document.querySelector("#add-15");
let subtractFifteenButton = document.querySelector("#subtract-15");



//DECLARE ALL IMPORTANT VARIABLES
let interval;
let second = 0;
let minute = 0;
let hour = 0;



//this function makes the Timer display numbers PROPERLY (keep this)
function fixNumberDisplay (number){
    if (number < 10){
        let newNumber = "0" + number;
        return newNumber;
    } else {
    return number;
    };
}


//THIS IS THE MOST IMPORTANT FUNCTION WITH THE MOST LOGIC
function startCounter (){
   interval = setInterval(function(){

      //Conditionals for TIMER COLOR ALERTS 
      if (hour === 1 && minute >= 30 && minute < 45){
        timerContainer.style.background = "rgb(196, 192, 80)";
       } else if (hour === 1 && minute >= 45) {
        timerContainer.style.background = "rgb(208, 60, 60)";
       } else if (hour === 1 && minute >= 50){
        //flashing red animation????!??!?
       } else if (hour === 2){
        clearInterval(interval);
        timerDisplay.classList.toggle("white-text");
        timerContainer.classList.toggle("flashing");
        } else {
        timerContainer.style.background = "rgb(0, 102, 0)";
       };

    if (second < 60){
        /*it took me forever to figure out the bug on why
        it was skipping the number 9. long story short: i had 
        to turn the (i++) into a (++i) because (i) was getting used
        in the expression before it could be displayed. */
        ++second;
    timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(second);
    }
    //this adds a minute every 60 seconds
    if (second === 60){
        ++minute;
        second = 0;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(second);;
    }
    //this adds an hour every 60 minutes
    if (minute >= 60){
        ++hour;
        minute = 0;
        timerDisplay.textContent = fixNumberDisplay(hour) + ":" + fixNumberDisplay(minute) + ":" + fixNumberDisplay(second);;
    }

    
   }, 1000);
   

 

}



/* ALMOST PERFECT JUST FIX IT SO IT DOESNT RETURN TO GREEN.
MAYBE JUST STOP AT 2 HOURS AND KEEP FLASHING.
Green = 1 hour and 30 minutes
Yellow = in between
Red = 1 hour and 45 minutes
*/




//OTHER SHIT
function stopCounter (){
    clearInterval(interval);
}
function resetCounter (){
    location.reload();
}
function addFifteen(){
    minute += 15;
}
function subtractFifteen(){
    minute -= 15;
}



startButton.addEventListener("click", startCounter);
stopButton.addEventListener("click", stopCounter);
resetButton.addEventListener("click", resetCounter);
addFifteenButton.addEventListener("click", addFifteen);
subtractFifteenButton.addEventListener("click", subtractFifteen);




/* EVERYTHING HERE IS FOR THE 2.0 UPDATE

- Add seconds again to main timertimer✅
- Show what GreenYellowandRed represent on the bottom✅
- Add or Remove 15 minutes at any point✅
- Display Real Time above timertimer✅ 

*/

/*NOTE: i got a weird bug where the minutes above 60 kept going,
for example it would say 71 minutes instead of 1:11:00 but I am 80% sure
I fixed it just keep an eye out for it. I literally don't know where it came from.
Probably because i really need to clean up all this code in general so 
next time I wanna add features everything's easier to do.
*/




/*this whole function right here was pretty complex for me.
I figured it out and I used stack overflow but even I think this is hard 
right here. but I did it. */
function displayClock (){
const dateObj = new Date();
let hours = dateObj.getHours();
let minutes = dateObj.getMinutes();
let seconds = dateObj.getSeconds();
let clockHour = hours < 10 ? "0" + hours : hours;
let clockMinute = minutes < 10 ? "0" + minutes : minutes;
let ampm = clockHour < 12 ? "AM" : "PM";
let clockTime = clockHour > 12 ? clockHour - 12 : clockHour;
let displayTime = clockTime + ":" + clockMinute + " " + ampm;
realTime.textContent = displayTime;
};

/*looks like i can just call setInterval i dont necessarilly gotta 
put it in a variable*/
setInterval(displayClock, 1000);













