const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]
function includesCamiseta(list) {
  let hola = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes('Camiseta')) {
      hola.push(list[i])
    }
  }
  return hola
}
console.log(includesCamiseta(products))
