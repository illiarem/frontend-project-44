import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

const getGameData = () => {
  const randomNumber = getRandom()
  const answer = getAnswer(randomNumber)
  return [randomNumber, answer]
}

const isEven = num => num % 2 === 0

const getAnswer = randomNumber => isEven(randomNumber) ? 'yes' : 'no'

export default () => app(gameRules, getGameData)
