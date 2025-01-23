const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
function veganFood(list) {
  for (const fruit of fruits) {
    list.push({ name: fruit, isVegan: true })
  }
  let veganFood = []
  for (const food of list) {
    if (food.isVegan === true) {
      veganFood.push(food)
    }
  }
  fruits.push(veganFood)
  return veganFood
}
console.log(veganFood(foodSchedule))
