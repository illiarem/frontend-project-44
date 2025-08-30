import app from '../index.js'
import getRandom from '../random.js'

const gameRules = 'Find the greatest common divisor of given numbers.'

const getGcd = (gcd, divisor) => divisor === 0 ? gcd : getGcd (divisor, gcd % divisor)

const getGameData = () => {
  const randomNum1 = getRandom()
  const randomNum2 = getRandom()
  const question = `${randomNum1} ${randomNum2}`
  const answer = String(getGcd(randomNum1, randomNum2))
  return [question, answer]
}

export default () => app(gameRules, getGameData)
