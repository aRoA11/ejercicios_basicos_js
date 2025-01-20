const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  let uniqueArray = []
  for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item)
    }
  }
  return uniqueArray
}
console.log(removeDuplicates(duplicates))
