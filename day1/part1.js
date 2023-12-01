import fs from 'fs'
const lines = fs.readFileSync('./input.txt', 'utf-8').split('\n')
const calibration = (ch) =>
{
  let first, last;
  for (let i = 0; i < ch.length; i++)
  {
    if (Number(ch[i]))
    {
      if (!first)
      {
        first = ch[i]
      }
      last = ch[i]
    }
  }
  return Number(first+last)
}
const sumCalibration = (lines) =>
{
  let sum = 0;
  lines.map(el => { sum = sum + calibration(el) })
  return sum
}
console.log(sumCalibration(lines))