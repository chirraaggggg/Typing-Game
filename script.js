const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random?tags=&author='
const FALLBACK_QUOTE_API_URL = 'https://dummyjson.com/quotes/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

let correct = true
let startTime
let timerInterval

function startTimer() {
  timerElement.innerText = 0
  startTime = new Date()
  timerInterval = setInterval(() => {
    timerElement.innerText = getTimerTime()
  }, 1000)
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

function resetTimer() {
    stopTimer()
    timerElement.innerText = '0'
  }
  