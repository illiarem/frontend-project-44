import readlineSync from 'readline-sync'

export default (gameRules, getGameData) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameRules)
  const numberOfGames = 3

  for (let winScore = 0; winScore < numberOfGames; winScore += 1) {
    const [question, answer] = getGameData()
    console.log(`Question: ${question}`)
    const playerResponse = readlineSync.question('Your answer: ').toLowerCase()

    if (playerResponse !== answer) {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
