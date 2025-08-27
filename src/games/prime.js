import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const gameData = []

const getQuestion = () => {
  const randomNumber = getRandom()
  gameData.length = 0
  gameData.push(randomNumber)
  return randomNumber
}

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

const getAnswer = () => {
  const [randomNumber] = gameData
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  return correctAnswer
}

export default () => app(gameRules, getQuestion, getAnswer)
