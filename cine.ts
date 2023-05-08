import * as rls from "readline-sync";

let cantidadButacasTeatro : number;
let indice : number;
//Definir el tamaño del arreglo
cantidadButacasTeatro = rls.questionInt("Ingrese la cantidad de butacas: ");
let arregloButacas : boolean[] = new Array(cantidadButacasTeatro);

//Esta función carga un arreglo de booleanos en forma aleatoria
function cargarArregloButacas(aButacas: boolean[], cantidadButacas: number) {
    // Generar valores aleatorios y convertirlos en booleanos
    for (let i = 0; i < cantidadButacas; i++) {
        const valorAleatorio = Math.random() >= 0.5;
        aButacas.push(Boolean(valorAleatorio));
    }
    // Mostrar el arreglo en la consola
    console.log(aButacas); 
}

//Esta función cuenta la cantidad de valores falsos que hay en el arreglo booleano
function contarButacasVacias (aButacas: boolean[]) : number {
    let butacasVacías : number = 0;
    for (let i = 0; i < aButacas.length; i++){
        if (aButacas[i] == false) {
            butacasVacías++;    
        }
    }
    return butacasVacías;
}

//Se manda a cargar el arreglo con valores booleanos en forma aleatoria
cargarArregloButacas(arregloButacas,cantidadButacasTeatro);
console.log("la cantidad de butacas vacías es: ", contarButacasVacias(arregloButacas));