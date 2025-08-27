import app from '../index.js'
import getRandom from '../random.js'

const mathSigns = ['+', '-', '*']
const gameRules = 'What is the result of the expression?'
const gameData = []

const getQuestion = () => {
  const randomNum1 = getRandom()
  const randomNum2 = getRandom()
  const randomSign = mathSigns[getRandom (0, 2)]
  gameData.length = 0
  gameData.push(randomNum1, randomNum2, randomSign)
  return `${randomNum1} ${randomSign} ${randomNum2}`
}

const getAnswer = () => {
  const [randomNum1, randomNum2, randomSign] = gameData
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
    default:
      throw new Error(`Unknown sign: '${randomSign}'!`)
  }
  return String(correctAnswer)
}

export default () => app(gameRules, getQuestion, getAnswer)
