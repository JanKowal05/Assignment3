/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35;
var numberofDays = 0;
var totalcost = 0;

var clearButton = document.getElementById("clear-button");
var fullButton = document.getElementById("full");
var halfButton = document.getElementById("half");

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var dayButtons = [monday, tuesday, wednesday, thursday, friday];

var currentDay = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i < dayButtons.length; i++) {
	dayButtons[i].onclick = function(){
        currentDay = i;
    };

	dayButtons[i].addEventListener("click", addDay);
}

function addDay() {
	let button = dayButtons[currentDay];

	if (button.classList.contains("clicked") == false) {
		button.classList.add("clicked");
		numberofDays++;
	}

	console.log(numberofDays);

	calculate();
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", clearAll);

function clearAll() {
	for (let i = 0; i < dayButtons.length; i++) {
		if (dayButtons[i].classList.contains("clicked")) {
			dayButtons[i].classList.remove("clicked");
		}
	}

	fullButton.classList.add("clicked");
	halfButton.classList.remove("clicked");


	totalcost = 0;
	dailyRate = 35;
	numberofDays = 0;

	calculate();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener("click", setHalfRate);

function setHalfRate() {
	dailyRate = 20;

	halfButton.classList.add("clicked");
	fullButton.classList.remove("clicked");

	calculate();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener("click", setFullRate);

function setFullRate() {
	dailyRate = 35;

	fullButton.classList.add("clicked");
	halfButton.classList.remove("clicked");

	calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate() {
	totalcost = dailyRate * numberofDays;

	document.getElementById("calculated-cost").innerHTML = totalcost;
}