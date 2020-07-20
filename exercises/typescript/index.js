var muted = true;
muted = false;
var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador;
var nombre = "Diego";
var saludo = "Me llamo " + nombre;
var people = [];
people = ["Isabel", "Nicole"];
people.push("Diego");
console.log(people);
var people2 = [];
people2 = ["hola", "Mundo"];
people2.push(2);
people2.push(true);
console.log(people2);
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Azul;
console.log("Mi color favorito: ", colorFavorito);
console.log(Color[1]);
//ANY
var comodin = "Joker";
comodin = { type: "wildcard" };
//objetos
var some = { type: "wildcard" };
//tuplas
var x;
x = ["hola", 22, 33];
console.log("tupla: ", x[0]);
