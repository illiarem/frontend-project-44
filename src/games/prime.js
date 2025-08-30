import getRandom from '../random.js'
import app from '../index.js'

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getGameData = () => {
  const randomNumber = getRandom()
  const answer = getAnswer(randomNumber)
  return [randomNumber, answer]
}

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  return true
}

const getAnswer = randomNumber => isPrime(randomNumber) ? 'yes' : 'no'

export default () => app(gameRules, getGameData)
