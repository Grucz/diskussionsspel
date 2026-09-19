// Globala variabler
let currentScenarioIndex = -1;
let usedScenarios = [];
let started = false;          // Har spelet lämnat startläget?
let timerInterval;
let timerSeconds = 0;
let timerTotalSeconds = 0;    // Vald tid, för att räkna ut stapelns bredd
let timerRunning = false;

const START_TEXT = "Klicka på Nästa för att slumpa fram ett scenario.";

// DOM-element
const scenarioTitle = document.getElementById('scenario-title');
const scenarioText = document.getElementById('scenario-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const timerDisplay = document.getElementById('timer-display');
const timerBarFill = document.getElementById('timer-bar-fill');
const timerStart = document.getElementById('timer-start');
const timerReset = document.getElementById('timer-reset');
const timerMinutes = document.getElementById('timer-minutes');

// Initialisera webbsidan
document.addEventListener('DOMContentLoaded', () => {
    // Visa starttext i stället för ett scenario
    showStartText();

    // Ställ in timern i viloläge (visar vald tid, full stapel)
    resetTimer();

    // Lägg till händelselyssnare för knappar
    nextBtn.addEventListener('click', showNextScenario);
    prevBtn.addEventListener('click', showPreviousScenario);
    timerStart.addEventListener('click', startTimer);
    timerReset.addEventListener('click', resetTimer);
    timerMinutes.addEventListener('change', resetTimer);

    // Föregående-knappen är inaktiv tills ett scenario visats
    prevBtn.disabled = true;
});

// Funktion för att visa startläget
function showStartText() {
    scenarioTitle.textContent = "";
    scenarioText.textContent = START_TEXT;
}

// Funktion för att visa nästa scenario
function showNextScenario() {
    // Stoppa timern om den är igång
    if (timerRunning) {
        resetTimer();
    }

    started = true;

    // Om alla scenarier har visats
    if (usedScenarios.length === scenarios.length) {
        showCompletionMessage();
        return;
    }

    // Välj ett slumpmässigt scenario som inte har visats tidigare
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * scenarios.length);
    } while (usedScenarios.includes(randomIndex));

    // Lägg till det valda scenariot i listan över använda scenarier
    usedScenarios.push(randomIndex);
    currentScenarioIndex = usedScenarios.length - 1;

    // Visa scenariot
    displayScenario(randomIndex);

    // Uppdatera knapparnas tillstånd
    updateButtonStates();
}

// Funktion för att visa föregående scenario
function showPreviousScenario() {
    // Stoppa timern om den är igång
    if (timerRunning) {
        resetTimer();
    }

    // Minska index och visa scenariot
    currentScenarioIndex--;

    // Visa scenariot
    displayScenario(usedScenarios[currentScenarioIndex]);

    // Uppdatera knapparnas tillstånd
    updateButtonStates();
}

// Funktion för att visa ett specifikt scenario
function displayScenario(index) {
    const scenario = scenarios[index];
    scenarioTitle.textContent = scenario.title;
    scenarioText.textContent = scenario.text;
}

// Funktion för att uppdatera knapparnas tillstånd
function updateButtonStates() {
    prevBtn.disabled = currentScenarioIndex <= 0;
    nextBtn.disabled = false;
}

// Funktion för att visa meddelande när alla scenarier har visats
function showCompletionMessage() {
    scenarioTitle.textContent = "Färdig";
    scenarioText.textContent = "Alla scenarier har visats. Tack för att du deltog i diskussionsspelet!";
    nextBtn.disabled = true;
    prevBtn.disabled = currentScenarioIndex <= 0;
}

// Funktion för att starta/pausa timern
function startTimer() {
    // Om timern redan är igång, pausa den
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerStart.textContent = 'Starta timer';
        timerDisplay.classList.remove('timer-alert');
        return;
    }

    // Om ingen tid är kvar (t.ex. efter avslutad nedräkning), börja om
    if (timerSeconds <= 0) {
        const minutes = parseInt(timerMinutes.value);
        timerTotalSeconds = minutes * 60;
        timerSeconds = timerTotalSeconds;
    }

    // Uppdatera display och stapel
    timerDisplay.classList.remove('timer-alert');
    updateTimerDisplay();
    updateTimerBar();

    // Starta nedräkning
    timerRunning = true;
    timerStart.textContent = 'Pausa timer';

    timerInterval = setInterval(() => {
        timerSeconds--;

        // Om tiden är slut
        if (timerSeconds <= 0) {
            timerSeconds = 0;
            clearInterval(timerInterval);
            timerRunning = false;
            timerStart.textContent = 'Starta timer';
            updateTimerDisplay();
            updateTimerBar();
            timerDisplay.classList.add('timer-alert');
            return;
        }

        updateTimerDisplay();
        updateTimerBar();
    }, 1000);
}

// Funktion för att återställa timern
function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    timerStart.textContent = 'Starta timer';
    timerDisplay.classList.remove('timer-alert');

    // Återställ tiden baserat på valt värde
    const minutes = parseInt(timerMinutes.value);
    timerTotalSeconds = minutes * 60;
    timerSeconds = timerTotalSeconds;

    // Uppdatera display
    updateTimerDisplay();

    // Snäpp tillbaka stapeln till full utan att animera glidningen
    timerBarFill.style.transition = 'none';
    updateTimerBar();
    // Tvinga fram omritning och slå på övergången igen
    void timerBarFill.offsetWidth;
    timerBarFill.style.transition = '';
}

// Funktion för att uppdatera timer-displayen
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Funktion för att uppdatera stapelns bredd och färg
function updateTimerBar() {
    const fraction = timerTotalSeconds > 0 ? timerSeconds / timerTotalSeconds : 0;
    timerBarFill.style.width = `${fraction * 100}%`;

    // Skifta färg mot slutet
    timerBarFill.classList.remove('warning', 'danger');
    if (fraction <= 0.15) {
        timerBarFill.classList.add('danger');
    } else if (fraction <= 0.5) {
        timerBarFill.classList.add('warning');
    }
}
