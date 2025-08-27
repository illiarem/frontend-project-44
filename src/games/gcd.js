import app from '../index.js'
import getRandom from '../random.js'

const gameRules = 'Find the greatest common divisor of given numbers.'
const gameData = []

const getQuestion = () => {
  const randomNum1 = getRandom()
  const randomNum2 = getRandom()
  gameData.length = 0
  gameData.push(randomNum1, randomNum2)
  return `Question: ${randomNum1} ${randomNum2}`
}

const getGcd = (gcd, divisor) => divisor === 0 ? gcd : getGcd (divisor, gcd % divisor)

const getAnswer = () => {
  const [randomNum1, randomNum2] = gameData
  return String(getGcd(randomNum1, randomNum2))
}

export default () => app(gameRules, getQuestion, getAnswer)
