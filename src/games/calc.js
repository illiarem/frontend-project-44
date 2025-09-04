import app from '../index.js'
import getRandom from '../random.js'

const mathSigns = ['+', '-', '*']
const gameRules = 'What is the result of the expression?'

const getGameData = () => {
  const randomNum1 = getRandom()
  const randomNum2 = getRandom()
  const randomSign = mathSigns[getRandom (0, 2)]
  const question = `${randomNum1} ${randomSign} ${randomNum2}`
  const answer = String(getAnswer(randomNum1, randomNum2, randomSign))
  return [question, answer]
}

const getAnswer = (randomNum1, randomNum2, randomSign) => {
  switch (randomSign) {
    case '+':
      return randomNum1 + randomNum2
    case '-':
      return randomNum1 - randomNum2
    case '*':
      return randomNum1 * randomNum2
    default:
      throw new Error(`Unknown sign: '${randomSign}'!`)
  }
}

export default () => app(gameRules, getGameData)
