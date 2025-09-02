import readlineSync from 'readline-sync'

export default (gameRules, getGameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name?')
  console.log(`Hello, ${name}!`)
  console.log(gameRules)
  let winScore = 0

  while (winScore < 3) {
    const [question, answer] = getGameData()
    console.log(`Question: ${question}`)
    const playerResponse = readlineSync.question('Your answer: ').toLowerCase()

    if (playerResponse === answer) {
      console.log('Correct!')
      winScore += 1
    }
    else {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
