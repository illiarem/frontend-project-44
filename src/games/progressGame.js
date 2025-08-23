import { getRandomNumber, getRandomFromRange } from '../randomEntities.js'
import app from '../index.js'
import getCurrentElement from '../currentElement.js'

const gameRules = 'What number is missing in the progression?'
let correctAnswer

const askAQuestion = () => {
  const seqLength = getRandomFromRange(5, 10)
  const startNum = getRandomNumber()
  const step = getRandomFromRange(1, 5)
  const skipIndex = getRandomFromRange(0, seqLength - 1)
  let question = ''

  for (let i = 0; i < seqLength; i++) {
    const currentElement = getCurrentElement(startNum, step, i)
    if (i !== skipIndex) {
      question = `${question} ${currentElement}`
    }
    else {
      correctAnswer = currentElement
      question = `${question} ..`
    }
  }
  question = `Question:${question}`
  return question
}

const getAnAnswer = () => String(correctAnswer)

export default () => app(gameRules, askAQuestion, getAnAnswer)
