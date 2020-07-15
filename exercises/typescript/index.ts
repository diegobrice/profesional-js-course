let muted: boolean = true;
muted = false;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

let nombre: string = "Diego";
let saludo = `Me llamo ${nombre}`;

let people: string[] = [];
people = ["Isabel", "Nicole"];
people.push("Diego");
console.log(people);

let people2: Array<string | number | boolean> = [];
people2 = ["hola", "Mundo"];
people2.push(2);
people2.push(true);
console.log(people2);

enum Color {
  Rojo,
  Verde,
  Azul,
}

let colorFavorito: Color = Color.Azul;
console.log("Mi color favorito: ", colorFavorito);
console.log(Color[1]);

//ANY
let comodin: any = "Joker";
comodin = { type: "wildcard" };

//objetos
let some: object = { type: "wildcard" };

//tuplas
let x: [string, number, number];
x = ["hola", 22, 33];
console.log("tupla: ", x[0]);
