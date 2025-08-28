//PARTE 1   
//1
interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: {
    calle: string;
    ciudad: string;
    pais: string;
  };
  mostrarInfo: () => string;
}

const estudiante:Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
        },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en
        ${this.direccion.ciudad}`;
    }
};
console.log(estudiante.mostrarInfo()); 

//2

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle: () => string;
}

const producto:Producto = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
        unidades disponibles`;
        }
};
console.log(producto.mostrarDetalle());

//3
interface Pelicula{
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir: () => string;
}

const pelicula:Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por
        ${this.director}`;
    }
};
console.log(pelicula.reproducir());

//4

interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender: () => string;
}

const vehiculo:Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
        }
};
console.log(vehiculo.encender());

//5

interface Usuario {
  username: string;
  password: string;
  roles: string[]; 
  login: () => string;
}
const usuario:Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles:
        ${this.roles.join(', ')}`;
        }
};
console.log(usuario.login());

//SEGUNDA PARTE

// Estaba incorrecto porque se usó 'true' como tipo; se reemplazó por 'boolean'
let myValue: number | string | boolean = 10; 
console.log("myValue:", myValue);

// Se corrigió porque se usó 'Boolean' en lugar de 'boolean' en minúscula
let myBoolean: boolean = true; 
console.log("myBoolean:", myBoolean);

// Antes tenía tipo string por error, ahora es tipo number
let healthPoints: number = 150; 
console.log("healthPoints:", healthPoints);

// Se arregló porque el valor no coincidía con el literal permitido "myTag"
let otherMultipleDataType: number | boolean | "myTag" = "myTag"; 
console.log("otherMultipleDataType:", otherMultipleDataType);

let myVar;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);

// Se solucionó porque no se había asignado un valor al declarar la constante
const myConstant: number = 10; 
console.log("myConstant:", myConstant);

// Al inicio se asumía que solo era string, se ajustó para aceptar también number
let inferedDataType: string | number = "Texto inicial"; 
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);

// Se cambió porque se había puesto un número en vez de un valor booleano
const isActive: boolean = true; 
console.log("isActive:", isActive);

// Se corrigió porque 'true' no encajaba en los tipos permitidos (string o number)
let mixed: number | string = "true"; 
console.log("mixed:", mixed);

// Se modificó el nombre porque 'while' es una palabra reservada del lenguaje
let myWhile: string = "Hola"; 
console.log("myWhile:", myWhile);

// Se arregló una confusión entre 'numer' y el tipo correcto 'number'
let myNumber: number = 10; 
console.log("myNumber:", myNumber);

// Se eliminó un string que estaba incorrectamente incluido en un arreglo numérico
let numeros: number[] = [1, 2, 3]; 
console.log("numeros:", numeros);

// Faltaba uno de los elementos requeridos en la tupla
let tupla: [string, number] = ["Hola", 10]; 
console.log("tupla:", tupla);

// Se había escrito con los tipos en el orden incorrecto dentro de la tupla
let otraTupla: [string, boolean] = ["Hola", true]; 
console.log("otraTupla:", otraTupla);

// Inicialmente no permitía null como valor válido, se ajustó el tipo
let texto: string | null = "Hola mundo"; 
texto = null;
console.log("texto:", texto);

// Se corrigió porque el valor asignado no pertenecía a los literales definidos
let color: "rojo" | "verde" | "azul" = "rojo"; 
console.log("color:", color);

// Se usó 'any' pero fue necesario convertir antes de llamar a toUpperCase
let valor: any = 10;
console.log("valor toUpperCase:", valor.toString().toUpperCase()); 

// Hubo un intento de reasignar una constante, lo cual no está permitido
const version: number = 1.0;
// version = 2.0; // no se puede

// Se agregó el tipo con el apellido como propiedad opcional
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);

// Se ajustó el tipo para que también pueda aceptar undefined
let edad: number | undefined = undefined; 
console.log("edad:", edad);
//prueba