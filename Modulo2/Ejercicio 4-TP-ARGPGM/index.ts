// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  readonly name: string;
  readonly age: number;
  readonly lastName: string;

  constructor(name: string, age: number, lastName: string) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
  }
  getName(): string {
    return this.name;
  }
  getAge(): number {
    return this.age;
  }
  getLastName(): string {
    return this.lastName;
  }
  public toString(): string {
    return `${this.name} (${this.age} years old)`;
  }

  public edad(year: number): number {
    return year - this.age;
  }

  public nombreCompleto(): string {
    return this.name + this.lastName;
  }
}

class Operacion {
  protected valorA: number;
  protected valorB: number;
  protected result: number;

  constructor() {
    this.valorA = 0;
    this.valorB = 0;
    this.result = 0;
  }

  set ValorA(value: number) {
    this.valorA = value;
  }

  set ValorB(value: number) {
    this.valorB = value;
  }

  get Result(): number {
    return this.result;
  }
}

class Suma extends Operacion {
  Sumar() {
    this.result = this.valorA + this.valorB;
  }
}

class Resta extends Operacion {
  Restar() {
    this.result = this.ValorA - this.ValorB;
  }
}

let operacionSuma = new Suma();
operacionSuma.ValorA = 45;
operacionSuma.ValorB = 10;
operacionSuma.Sumar();
console.log("El resultado de la suma es: ", operacionSuma.Result);
