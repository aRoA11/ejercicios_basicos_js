const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]
function includesCamiseta(list) {
  let item = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes('Camiseta')) {
      item.push(list[i])
    }
  }
  return item
}
console.log(includesCamiseta(products))
