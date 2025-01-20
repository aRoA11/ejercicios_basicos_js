const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numberList[i]
  }
  return total / numberList.length
}
const promedio = average(numbers)
console.log('El promedio es:', promedio)
