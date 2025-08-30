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
  let answer

  switch (randomSign) {
    case '+':
      answer = randomNum1 + randomNum2
      break
    case '-':
      answer = randomNum1 - randomNum2
      break
    case '*':
      answer = randomNum1 * randomNum2
      break
    default:
      throw new Error(`Unknown sign: '${randomSign}'!`)
  }
  return answer
}

export default () => app(gameRules, getGameData)
