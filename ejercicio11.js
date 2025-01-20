const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let totalSum = 0
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (typeof item === 'number') {
      totalSum += item
    } else if (typeof item === 'string') {
      totalSum += item.length
    }
    {
    }
  }
  const promedio = totalSum / list.length
  return promedio
}
console.log(averageWord(mixedElements))
