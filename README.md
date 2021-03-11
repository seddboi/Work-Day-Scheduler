# Work-Day-Scheduler


## Introduction
This is a Work Day Scheduler which allows you to plan a work schedule from the time frame of 9 AM to 5 PM.
It is a very simplistic function, which allows for a message to be entered, then saved using the blue save button to the right. This functionality allows for it to be saved to where you may refresh the page and the information you entered will remain. The time sections are also color coded, grey being a time section that has passed, red being the current present time section, and green being those sections in the future. 

## How I accomplished the project
To begin, I started with the setup of the basics of the HTML and CSS. The HTML consisted of a section for each time section from 9 AM to 5 PM, all of them being labeled by their hour in 24 hour time. For the most part, the project was based around establishing the connection to storing the entered values in localStorage. This was created by creating two separate variables that would identify the description that was entered and the id tag that was established for each section. Once I successfully was able to collect those values, I established the connection to storing the data in localStorage by assigning the collected id (selectedTime in the Javascript code) as the key and the collected message entry (selectedDesc in the Javascript code) as the value.
I then created the hour tester function, which tested the current hour (using Moment.js), and compared it to the hour the was selected within each time slot. Since the hour shown was in a string form attached to some other characters, It was unable to be compared, until I used .parseInt to convert it into a number value. This is then how I compared the two values to color code the past(grey), present(red), and future(blue) times.
In order to get the entered values for the descriptions in each section, I had to get those items back in each section, to which I established a line of code for each section, .val() to set the value in each section, and the passed in parameter being localStorage.getItem() and passing in each key that was saved. That was done for each time slot that was created.

## Sample Viewing of the Project

!(Untitled_ Mar 11, 2021 12_55 PM.gif)

## Links to Repository and Functioning Site

Github Repository: https://github.com/seddboi/Work-Day-Scheduler

Working Site: https://seddboi.github.io/Work-Day-Scheduler/