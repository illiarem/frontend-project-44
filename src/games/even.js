import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
const gameData = []

const getQuestion = () => {
  const randomNumber = getRandom()
  gameData.length = 0
  gameData.push(randomNumber)
  return randomNumber
}

const isEven = num => num % 2 === 0

const getAnswer = () => {
  const [randomNumber] = gameData
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

  return correctAnswer
}

export default () => app(gameRules, getQuestion, getAnswer)
