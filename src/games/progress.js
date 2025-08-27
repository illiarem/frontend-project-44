import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'What number is missing in the progression?'
const gameData = []

const getCurrentElement = (start, step, index) => start + index * step

const getQuestion = () => {
  const seqLength = getRandom(5, 10)
  const startNum = getRandom()
  const step = getRandom(1, 5)
  const skipIndex = getRandom(0, seqLength - 1)
  let question = ''
  gameData.length = 0

  for (let i = 0; i < seqLength; i++) {
    const currentElement = getCurrentElement(startNum, step, i)
    if (i !== skipIndex) {
      question = `${question} ${currentElement}`
    }
    else {
      gameData.push(currentElement)
      question = `${question} ..`
    }
  }
  return question.trim()
}

const getAnswer = () => String(gameData[0])

export default () => app(gameRules, getQuestion, getAnswer)
