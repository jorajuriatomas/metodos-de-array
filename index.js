const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const pizzasImpares = pizzas
  .filter((pizza) => pizza.id % 2 !== 0)
  .map((pizza) => pizza.nombre)
  .join(", ");

console.log(`las pizzas impares son ${pizzasImpares}`);

const pizzasBaratas = pizzas
  .filter((pizza) => pizza.precio < 600)
  .map((pizza) => pizza.nombre)
  .join(", ");

console.log(`las pizzas menores a 600 son ${pizzasBaratas}`);

console.log("Las pizzas del local son:");
pizzas.forEach((pizza) => console.log(`${pizza.nombre}: ${pizza.precio}`));

console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingrediente) => {
    console.log(`   ${ingrediente}`);
  });
});
