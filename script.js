const submitButton = document.getElementById('submit');
const answerInput = document.getElementById('answer');
const resultText = document.getElementById('result');
const scoreSpan = document.getElementById('score');

let score = 0;
let currentDungeon = 1; // Variable to track the current dungeon.

const dungeons = [ //Array containing dungeon data
    { question: "In the cold dungeon, the sound of chains echoed. The prisoner had lost their ______, leaving only resentment.", answer: "sanity" },
    { question: "The damp stone wall was covered with ancient characters. They warned of an ______ curse of a thousand years.", answer: "ancient" },
    { question: "The faint light from the torch shone on a stone coffin. Inside, there was no gold, but a rotting ______.", answer: "skeleton" },
    { question: "In the darkness, a ______ voice whispered words of sorrow, begging to be released.", answer: "ghostly" },
    { question: "On the stone pedestal, a leather ______ lay open. The pages were written in blood, recording the ritual to summon demons.", answer: "grimoire" },
    // ... add more dungeons here ...
];

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = dungeons[currentDungeon - 1].answer; // get the correct answer.

    if (userAnswer === correctAnswer) {
        resultText.textContent = "Correct! You have passed the dungeon.";
        resultText.style.color = "green";
        score += 10;
        scoreSpan.textContent = score;
        answerInput.value = ''; // Clear input

        // Move to the next dungeon (Temporarily not available, need further processing)
        currentDungeon++;
        if(currentDungeon <= dungeons.length){
          loadDungeon(currentDungeon); // Function to load a new dungeon (see below)
        } else {
          resultText.textContent = "Congratulations! You have completed all the dungeons.";
            // Hide button, do not allow to continue playing or display the play again button
        }


    } else {
        resultText.textContent = "Incorrect. Try again!";
        resultText.style.color = "red";
    }
}

function loadDungeon(dungeonNumber){
    const currentDungeonData = dungeons[dungeonNumber - 1]; // Data of current dungeon.
    document.getElementById("question").textContent = currentDungeonData.question;
    document.querySelector("#dungeon h1").textContent = "Dungeon " + dungeonNumber;
    resultText.textContent = ""; // Clear the result of the previous dungeon
}

submitButton.addEventListener('click', checkAnswer);

// Add handling when the user presses Enter in the input box
answerInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});