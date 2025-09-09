const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random?tags=&author='
const FALLBACK_QUOTE_API_URL = 'https://dummyjson.com/quotes/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const wpmElement = document.getElementById('wpm')
const accuracyElement = document.getElementById('accuracy')
const restartBtn = document.getElementById('restartBtn')

let correct = true
let startTime
let timerInterval
let currentQuote = ''
let totalCharacters = 0
let correctCharacters = 0

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    renderNewQuote()
    setupEventListeners()
})

function setupEventListeners() {
    quoteInputElement.addEventListener('input', handleInput)
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartGame)
    }
    
    // Allow restart with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            restartGame()
        }
    })
}

