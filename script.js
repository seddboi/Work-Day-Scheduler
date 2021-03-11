// ---------------------------------------------------------------------------------------------
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// This function updates the text content of the date and time <p> tags using moment.js
function update() {
    // Here is where i established the variables which target the Current Date and Current Time Sections on th HTML
    var currentDateEl = document.getElementById('currentDay');
    var currentTimeEl = document.getElementById('currentTime')
    
    var currentDay = moment().format("dddd, MMMM Do, YYYY");
    currentDateEl.textContent = currentDay;

    var currentTime = moment().format("LTS");
    currentTimeEl.textContent = currentTime;
}

// This consistently changes and updates the time 
setInterval(update, 1000);
// ---------------------------------------------------------------------------------------------
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// This causes the whole program to run as soon as the Document Object Model is loaded and safe 
$(document).ready(function() {
    // This function listens for the save button click and install the desceiption and time within the 
    // the given selectedDesc and selectedTime variables, using jQuery
    // It also sets the values to localStorage
    $('.saveBtn').on('click', function() {
        var selectedDesc = $(this).siblings('.description').val();
        var selectedTime = $(this).parent().attr('id');
        // this sets selectedTime as the key and selectedDesc as the value in localStorage
        localStorage.setItem(selectedTime, selectedDesc);
        
        
        
    }); 

   
    // WHEN I refresh the page
    // THEN the saved events persist


    $('#9_AM .description').val(localStorage.getItem('9_AM'));
    $('#10_AM .description').val(localStorage.getItem('10_AM'));
    $('#11_AM .description').val(localStorage.getItem('11_AM'));
    $('#12_PM .description').val(localStorage.getItem('12_PM'));
    $('#13_PM .description').val(localStorage.getItem('13_PM'));
    $('#14_PM .description').val(localStorage.getItem('14_PM'));
    $('#15_PM .description').val(localStorage.getItem('15_PM'));
    $('#16_PM .description').val(localStorage.getItem('16_PM'));
    $('#17_PM .description').val(localStorage.getItem('17_PM'));

    hourTester();
});
// ---------------------------------------------------------------------------------------------

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function hourTester () {
    var currentHour = moment().hours();
    $('.section').each(function() {
        var selectedHour = parseInt($(this).attr('id').split('_')[0]);

        // These conditions test the past, present, and future instances between the current hour provided
        // from .moment and the selected hour that is parsed from the id name
        if (selectedHour < currentHour) {
            $(this).addClass('past');
        } else if (selectedHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}











