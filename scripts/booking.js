/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let numberOfDays = 0;
let dailyRate = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.querySelectorAll('.day-selector .blue-hover').forEach(function (el) {
	el.addEventListener('click', function (e) {
		let listItem = e.target;
		// Checked if clicked already
		if (listItem.classList.contains('clicked')) {
			listItem.classList.remove('clicked');
			numberOfDays--;
		} else {
			listItem.classList.add('clicked');
			numberOfDays++;
		}
		calculate();
	});
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.querySelector('#clear-button').addEventListener('click', function () {
	// Clear all the 'clicked' from the classes
	document
		.querySelectorAll('.day-selector .blue-hover')
		.forEach(function (el) {
			el.classList.remove('clicked');
		});

	numberOfDays = 0;
	calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.querySelector('#half').addEventListener('click', function (e) {
	dailyRate = 20;
	e.target.classList.add('clicked');
	document.querySelector('#full').classList.remove('clicked');
	calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.querySelector('#full').addEventListener('click', function (e) {
	dailyRate = 35;
	e.target.classList.add('clicked');
	document.querySelector('#half').classList.remove('clicked');
	calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
	let totalCost = numberOfDays * dailyRate;
	document.querySelector('#calculated-cost').innerHTML = totalCost;
}
