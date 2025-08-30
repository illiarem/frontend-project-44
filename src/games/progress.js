import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'What number is missing in the progression?'

const getCurrentElement = (start, step, index) => start + index * step

const getGameData = () => {
  const seqLength = getRandom(5, 10)
  const startNum = getRandom()
  const step = getRandom(1, 5)
  const skipIndex = getRandom(0, seqLength - 1)
  let question = ''
  let answer

  for (let i = 0; i < seqLength; i++) {
    const currentElement = getCurrentElement(startNum, step, i)
    if (i !== skipIndex) {
      question = `${question} ${currentElement}`
    }
    else {
      answer = String(currentElement)
      question = `${question} ..`
    }
  }
  return [question.trim(), answer]
}

export default () => app(gameRules, getGameData)
