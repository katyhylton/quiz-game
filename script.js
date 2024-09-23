// Selecting all button elements on the page
let buttons = document.querySelectorAll("button");

// Select the first HTML element with class of score
let scoreElement = document.querySelector(".score");

// Keep track of score 
let score = 0;

let questionsAnswered = 0;

// Define the check function
function check(event) {
    // Find the clicked button
    let button = event.target;
    questionsAnswered++;

    // Find the current question
    let question = button.closest(".question");

    // Get the class name of the button
    let name = button.className;
    
    if (name === "Correct") {
        // Answer is correct
        button.style.background = "darkgreen";
        button.style.color = "white";
        // Update score
        score++;
    } else {
        // Answer is wrong
        button.style.background = "darkred";
        button.style.color = "white";
        // Find the explanation element
        let explanation = question.querySelector(".explanation");
        // Show explanation
        explanation.style.display = "block";
    }

    // Display the score to the user on the page
    scoreElement.textContent = score;

    // Find all button elements inside the current question
    let questionButtons = question.querySelectorAll("button");

    // Disable other buttons
    for (let btn of questionButtons) {
        btn.disabled = true;
    }

    // Check if exactly 5 questions have been answered
    if (questionsAnswered === 5) {
        // Hide all messages before showing the relevant one
        let allMessages = document.querySelectorAll(".message");
        allMessages.forEach(message => {
            message.style.display = "none";
        });

        // Display the appropriate message based on the score
        let message;
        if (score == 0) {
            message = document.querySelector("#reallydontrock");
        } else if (score == 1) {
            message = document.querySelector("#dontrock2");
        } else if (score == 2) {
            message = document.querySelector("#dontrock1");
        } else if (score == 3) {
            message = document.querySelector("#kindarock2");
        } else if (score == 4) {
            message = document.querySelector("#kindarock1");
        } else if (score == 5) {
            message = document.querySelector("#totallyrock");
        }

        // Show the message if it was found
        if (message) {
            message.style.display = "block";
        }
        // Log values for debugging
console.log('Questions Answered:', questionsAnswered);
console.log('Score:', score);
    }
}



// For each button on the list
for (let button of buttons) {
    // Run check function when clicked
    button.onclick = check;
}
