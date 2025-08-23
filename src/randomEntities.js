const getRandomNumber = () => Math.trunc(Math.random() * 100)
const getRandomFromRange = (min, max) => Math.trunc(Math.random() * (max - min + 1) + min)

const mathSigns = ['+', '-', '*']

const getRandomSign = () => {
  const randomSignNum = getRandomFromRange (0, 2)
  return mathSigns[randomSignNum]
}

export { getRandomNumber, getRandomFromRange, getRandomSign }
