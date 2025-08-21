const mathSigns = ['+', '-', '*']

export default () => {
  const randomSignNum = Math.trunc(Math.random() * 3)
  return mathSigns[randomSignNum]
}
