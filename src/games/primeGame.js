import isPrime from '../isPrime.js'
import { getRandomNumber } from '../randomEntities.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
let randomNumber

const askAQuestion = () => {
  randomNumber = getRandomNumber()
  const question = `Question: ${randomNumber}`
  return question
}

const getAnAnswer = () => {
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  return correctAnswer
}

export default () => app(gameRules, askAQuestion, getAnAnswer)
