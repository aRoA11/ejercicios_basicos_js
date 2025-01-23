const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]
function repeatCounter(list) {
  const count = {}
  for (let i = 0; i < list.length; i++) {
    const words = list[i]
    if (count[words]) {
      count[words] += 1
    } else {
      count[words] = 1
    }
  }
  return count
}
console.log(repeatCounter(words))
