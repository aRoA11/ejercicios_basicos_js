const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList) {
  const name = 'Marc'
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === name) {
      return { exists: true, position: i }
    }
  }
  return { exists: false }
}
console.log(nameFinder(names))
