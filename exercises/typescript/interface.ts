enum Color {
  Violeta = "Violeta",
  Amarillo = "Amarillo",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Amarillo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);

rect.toString = function (): string {
  return this.color ? `Un rectango ${this.color}` : `Un rectango incoloro`;
};

console.log(rect.toString());
