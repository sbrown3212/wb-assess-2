// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

document.querySelector('#auth').addEventListener('click', e => {
    if (e.target.innerText === `Log in`) {
        e.target.innerText = `Log out`;
    } else {
        e.target.innerText = `Log in`;
    }
})



// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

document.querySelector('#send-alert button').addEventListener('click', (e) => {
    // e.preventDefault(); // only necessary if the page should not reload?
    alert(document.querySelector('#alert-message').value)
})



// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

document.querySelector('#item-adder').addEventListener('dblclick', (e) => {
    const newItem = document.createElement('li');
    newItem.innerText = `Item`;
    document.querySelector('#list').appendChild(newItem);
})

// Doesn't pass test.



// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

document.querySelector('#blue').addEventListener('click', (e) => {
    const changesColors = document.querySelectorAll('.changes-colors');
    for (const el of changesColors) {
        el.style.color = 'blue';
    }
})

document.querySelector('#red').addEventListener('click', (e) => {
    const changesColors = document.querySelectorAll('.changes-colors');
    for (const el of changesColors) {
        el.style.color = 'red';
    }
})

// Doesn't pass test.

// QUESTION: Can this be done with one event listener?
// Or does it need to be two because there are two separate button elements with different actions?
// Would it work to add a class to the color changer buttons and assign the e.style.color to the id of the target clicked?
// (I didn't try because we aren't supposed to edit js-dom.html)
// It just doesn't seem very dry as I have it now.



// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

function factorial(num) {
    if (num > 1) {
        return num * factorial(num - 1);
    } else {
        return 1;
    }
};

document.querySelector('#factorial-calculator button').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#factorial-input').value;
    document.querySelector('#result').innerText = factorial(input);
})



// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

document.querySelector('form#recommend-word button').addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('#word').value;
    const feedback = document.querySelector('.form-feedback');
    if (input.length >= 4) {
        feedback.innerText = `Thanks for your submission!`;
        feedback.style.color = `green`;
    } else {
        feedback.innerText = `The word must be at least 4 characters long.`;
        feedback.style.color = `red`;
    }
})

// QUESTION: Can the instructions be corrected? In some areas, it asks for four characters, and in other areas, it asks for three.
