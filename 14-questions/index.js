// Define and initialize current page number
let currentPage = 1; 

// Arrays to hold elements with class 'page' and 'menuitem' respectively
let pages; 
let menuItems; 

// Parameters for fetching quiz questions from Open Trivia Database API
let amount = 6; // Number of questions to fetch
let category = 12; // Category ID for the quiz questions
let difficulty = "medium"; // Difficulty level of questions
let type = "boolean"; // Type of questions (True/False)

// Construct API URL with query parameters
let apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

// Setup function to initialize the quiz application
function setup() {
    noCanvas(); // Disable canvas (for p5.js use)
    fetchQuizQuestions(); // Fetch quiz questions from API
    pages = selectAll('.page'); // Select all elements with class 'page'
    menuItems = selectAll('.menuitem'); // Select all menu items

    // Add event listeners to menu items for page switching
    for (let m of menuItems) {
        m.mousePressed(function(e) {
            let nr = e.target.id.slice(-1); // Get page number from menu item ID
            shiftPage(nr); // Switch to the selected page
        });
    }

    shiftPage(currentPage); // Initialize display of the current page

    // Hide header after 10 seconds for a cleaner interface
    setTimeout(function() {
        select('header').addClass('hidden');
    }, 10000);
}

// Function to switch between pages based on user interaction
function shiftPage(num) {
    if (num == "ArrowLeft") { // Check if the left arrow key is pressed
        num = currentPage - 1;
    }
    if (num == "ArrowRight") { // Check if the right arrow key is pressed
        num = currentPage + 1;
    }

    // Validate the page number and prevent invalid page switches
    if (isNaN(num) || num > pages.length || num == 0) {
        return;
    }
    
    // Hide the current page and deactivate the menu item
    select("#page" + currentPage).removeClass('visible');
    select("#menu" + currentPage).removeClass('active');

    // Update the current page number and show the new page
    currentPage = num;
    select("#page" + currentPage).addClass('visible');
    select("#menu" + currentPage).addClass('active');
}

// Function to handle keyboard inputs for page navigation
function keyPressed() {
    shiftPage(key); // Shift page based on the key pressed
}

// Asynchronous function to fetch quiz questions from the API
async function fetchQuizQuestions() {
    let result = await fetch(apiUrl); // Fetch data from the API
    if (result.ok) { // Check if the fetch was successful
        let quizData = await result.json(); // Parse the JSON response
        quizData.results.forEach((question, index) => {
            showQuestion(question, index + 2); // Display questions starting from page 2
        });
    } else {
        console.log('There was an error fetching the data.'); // Log an error message if the fetch fails
    }
}

// Function to display a quiz question on a specific page
function showQuestion(q, pageIndex) {
    // Create a div for the question text and append it to the corresponding page
    let questionDiv = createDiv(q.question).class('question').parent(`#page${pageIndex}`);
    showAnswers(q, pageIndex); // Display the answers for the question
}

// Function to create answer buttons for True/False questions
function showAnswers(q, pageIndex) {
    // Create 'True' and 'False' buttons and append them to the corresponding page
    let trueButton = createButton('True').parent(`#page${pageIndex}`);
    let falseButton = createButton('False').parent(`#page${pageIndex}`);

    // Add event listeners to the buttons for checking the answer
    trueButton.mousePressed(() => checkAnswer(q, "true", trueButton, falseButton));
    falseButton.mousePressed(() => checkAnswer(q, "false", trueButton, falseButton));
}

// Function to check if the user's answer is correct and provide feedback
function checkAnswer(q, answer, trueButton, falseButton) {
    // Remove any existing feedback classes from the buttons
    trueButton.removeClass('correct');
    falseButton.removeClass('wrong');
    trueButton.removeClass('wrong');
    falseButton.removeClass('correct');

    // Compare the user's answer with the correct answer
    if (q.correct_answer.toLowerCase() === answer.toLowerCase()) {
        // Add feedback classes to indicate if the answer was correct or incorrect
        if (answer === "true") {
            trueButton.addClass('correct');
            falseButton.addClass('wrong');
        } else {
            trueButton.addClass('wrong');
            falseButton.addClass('correct');
        }
    } else {
        if (answer === "true") {
            trueButton.addClass('wrong');
            falseButton.addClass('correct');
        } else {
            trueButton.addClass('correct');
            falseButton.addClass('wrong');
        }
    }
}
