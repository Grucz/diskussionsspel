// Globala variabler
let currentScenarioIndex = -1;
let usedScenarios = [];
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

// DOM-element
const scenarioTitle = document.getElementById('scenario-title');
const scenarioText = document.getElementById('scenario-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const timerToggle = document.getElementById('timer-toggle');
const timerContainer = document.getElementById('timer-container');
const timerDisplay = document.getElementById('timer-display');
const timerStart = document.getElementById('timer-start');
const timerReset = document.getElementById('timer-reset');
const timerMinutes = document.getElementById('timer-minutes');

// Initialisera webbsidan
document.addEventListener('DOMContentLoaded', () => {
    // Visa första scenariot
    showNextScenario();
    
    // Lägg till händelselyssnare för knappar
    nextBtn.addEventListener('click', showNextScenario);
    prevBtn.addEventListener('click', showPreviousScenario);
    timerToggle.addEventListener('click', toggleTimer);
    timerStart.addEventListener('click', startTimer);
    timerReset.addEventListener('click', resetTimer);
    
    // Inaktivera föregående-knappen i början
    prevBtn.disabled = true;
});

// Funktion för att visa nästa scenario
function showNextScenario() {
    // Stoppa timern om den är igång
    if (timerRunning) {
        resetTimer();
    }
    
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
}

// Funktion för att visa/dölja timer
function toggleTimer() {
    if (timerContainer.classList.contains('hidden')) {
        timerContainer.classList.remove('hidden');
        timerToggle.textContent = 'Dölj timer';
    } else {
        timerContainer.classList.add('hidden');
        timerToggle.textContent = 'Visa timer';
        // Stoppa timern om den är igång
        if (timerRunning) {
            resetTimer();
        }
    }
}

// Funktion för att starta timern
function startTimer() {
    // Om timern redan är igång, stoppa den
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerStart.textContent = 'Starta timer';
        timerDisplay.classList.remove('timer-alert');
        return;
    }
    
    // Sätt tiden baserat på valt värde
    const minutes = parseInt(timerMinutes.value);
    timerSeconds = minutes * 60;
    
    // Uppdatera display
    updateTimerDisplay();
    
    // Starta nedräkning
    timerRunning = true;
    timerStart.textContent = 'Pausa timer';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        
        // Om tiden är slut
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerRunning = false;
            timerStart.textContent = 'Starta timer';
            timerDisplay.classList.add('timer-alert');
            
            // Spela en ljudsignal (valfritt)
            // playAlertSound();
            
            return;
        }
        
        updateTimerDisplay();
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
    timerSeconds = minutes * 60;
    
    // Uppdatera display
    updateTimerDisplay();
}

// Funktion för att uppdatera timer-displayen
function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

