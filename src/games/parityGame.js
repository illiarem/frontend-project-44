import isEven from '../isEven.js'
import getRandomNumber from '../getRandomNumber.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
let randomNumber

const askAQuestion = () => {
  randomNumber = getRandomNumber()
  const question = `Question: ${randomNumber}`
  return question
}

const getAnAnswer = () => {
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  return correctAnswer
}

export default () => app(gameRules, askAQuestion, getAnAnswer)
