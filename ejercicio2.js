//2.1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }
jedi.edad = 25
console.log(jedi)

//2.2
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20
console.log(
  `Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`
)
//2.3
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }
precioSable1 = sable1.precio
precioSable2 = sable2.precio
console.log(precioSable1 + precioSable2)

//2.4
let precioBaseGlobal = 10000

precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

// Tu código para actualizar el precio final de cada nave aquí...
