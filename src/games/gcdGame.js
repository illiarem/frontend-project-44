import app from '../index.js'
import getRandomNumber from '../getRandomNumber.js'

const gameRules = 'Find the greatest common divisor of given numbers.'
let randomNum1
let randomNum2

const askAQuestion = () => {
  randomNum1 = getRandomNumber()
  randomNum2 = getRandomNumber()
  const question = `Question: ${randomNum1} ${randomNum2}`
  return question
}

const getAnAnswer = () => {
  let gcd = randomNum1
  let divisor = randomNum2
  let remainder

  while (remainder !== 0) {
    remainder = gcd % divisor
    gcd = divisor
    divisor = remainder
  }

  return String(gcd)
}

export default () => app(gameRules, askAQuestion, getAnAnswer)
