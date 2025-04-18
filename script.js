 
let computerGuess = parseInt((Math.random() * 100) + 1);

let remainingGuesses = document.querySelector('.remaining');
let FirstNumberRemaining = 10;

let submit = document.getElementById('submit');
let previous = document.querySelector('.previous');
let reset = document.getElementById('reset');

function previousguesses(guessNumber) {
    previous.innerHTML += ` ${guessNumber}, `;
}

function guessByUser() {
    return parseInt(document.getElementById('guess').value);
}

function check(guessNumber) {
    let resultPara = document.querySelector('.result');

    if (guessNumber === computerGuess) {
        resultPara.style.display = "block";
        resultPara.innerHTML = `🎉 Your guess is correct: ${computerGuess} \n please tap on reset button to restart the game`;
        reset.style.display = "block"; // Show reset button

        // FirstNumberRemaining = 10; // prepare for next game
        // remainingGuesses.textContent = `${FirstNumberRemaining}`;
        // previous.innerHTML = '';
        // computerGuess = parseInt((Math.random() * 100) + 1);
    } else if (isNaN(guessNumber)) {
        resultPara.style.display = "block";
        resultPara.innerHTML = "⚠️ Please enter a valid number";
    } else {
        if (FirstNumberRemaining === 0) {
            resultPara.style.display = "block";
            resultPara.innerHTML = `❌ Game Over! The number was ${computerGuess}`;
            reset.style.display = "inline-block"; // Show reset button
            return; // Don't continue if game is over
        }

        resultPara.style.display = "block";
        if (guessNumber > computerGuess) {
            resultPara.innerHTML = `📈 Your guess is too high`;
        } else {
            resultPara.innerHTML = `📉 Your guess is too low`;
        }

        FirstNumberRemaining--;
        remainingGuesses.textContent = `${FirstNumberRemaining}`;
    }
}

submit.addEventListener('click', function (e) {
    e.preventDefault();

    let guessNumber = guessByUser();

    check(guessNumber);

    document.getElementById('guess').value = '';
    previousguesses(guessNumber);
});

reset.addEventListener('click', function (e) {
    e.preventDefault();

    FirstNumberRemaining = 10;
    remainingGuesses.textContent = `${FirstNumberRemaining}`;

    document.getElementById('guess').value = '';
    document.querySelector('.result').style.display = "none";
    previous.innerHTML = '';
    computerGuess = parseInt((Math.random() * 100) + 1);

    // Hide reset button again
    reset.style.display = "none";
});



