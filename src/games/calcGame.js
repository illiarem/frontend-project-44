import app from '../index.js'
import { getRandomNumber, getRandomSign } from '../randomEntities.js'

const gameRules = 'What is the result of the expression?'
let randomNum1
let randomNum2
let randomSign

const askAQuestion = () => {
  randomNum1 = getRandomNumber()
  randomNum2 = getRandomNumber()
  randomSign = getRandomSign()
  const question = `Question: ${randomNum1} ${randomSign} ${randomNum2}`
  return question
}

const getAnAnswer = () => {
  let correctAnswer
  switch (randomSign) {
    case '+':
      correctAnswer = randomNum1 + randomNum2
      break
    case '-':
      correctAnswer = randomNum1 - randomNum2
      break
    case '*':
      correctAnswer = randomNum1 * randomNum2
      break
  }
  return String(correctAnswer)
}

export default () => app(gameRules, askAQuestion, getAnAnswer)
