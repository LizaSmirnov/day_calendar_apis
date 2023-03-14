## day_calendar_apis

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## Description

- With Html and CSS provided, worked on Javasript to reach into the html and create a working day calendar.
- An event listener was created when the person click on save button which pushed the text written for the time to local storage. To    be able to do this we had to reach into the html and use jquery to grab the text. 
- A color indicator was created to show which column was at the present time showing in red. Past was grey color and the future was green. 
-Last we had to find a way to match the different columns with the surrent time. To do this we added an new id to each time block and ran if statements. Based on those statements it will indicate whether the time was present, past, or future.

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Installation
- Mostly workin on html first made sure the event listener was working correctly and saveing to local storage.

![image](https://user-images.githubusercontent.com/122588135/224916059-f7bb28d5-63ea-44a9-8fde-08f71e0ecc56.png)

![image](https://user-images.githubusercontent.com/122588135/224916188-519c398a-e6f6-46a0-988e-74801c021c53.png)


- After that I made the calendar and time append to the html and display in the header.
  
![image](https://user-images.githubusercontent.com/122588135/224916434-71341da4-d3c3-405f-8e95-a5bf66191d5e.png)

- Lastly the hardest part was figuring out the for each column assign a number and then compare to the current time. 

![image](https://user-images.githubusercontent.com/122588135/224917010-00e046c2-0866-461f-97a5-067f48b163ea.png)

## Credits

- w3school.com 
- modules from classwork
- StackOverFlow.com
-https://jquery.com
-my tutors

## Deployement
https://lizasmirnov.github.io/javascript_passwordgenerator/

Liza Smirnov
ISC License [https://choosealicense.com/licenses/isc/]

## License

Copyright (c) [2023] [Liza Smirnov]

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

## Badges


## Features

N/A yet

## How to Contribute

N/A

## Tests

N/A
