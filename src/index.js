import readlineSync from 'readline-sync'

export default (gameRules, getQuestion, getAnswer) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameRules)
  let winScore = 0

  while (winScore < 3) {
    console.log(`Question: ${getQuestion()}`)
    const playerResponse = readlineSync.question('Your answer: ').toLowerCase()
    const correctAnswer = getAnswer()

    if (playerResponse === correctAnswer) {
      console.log('Correct!')
      winScore += 1
    }
    else {
      console.log(`'${playerResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
  return
}
