//Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
//Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
//Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información

import * as rls from "readline-sync";

let cantidadAlumnos : number = rls.questionInt("Ingrese la cantidad de alumnos: ");
let cantidadCalificaciones : number = 3;

//Esta función crea la matriz que contendrá los alumnos y sus respectivas notas para cada trimestre
function crearMatriz(cantAlumnos : number,cantCalificaciones : number) : number[][]{
    let matriz : number[][]= new Array(cantAlumnos);
    for (let i=0; i < cantAlumnos; i++){
    matriz[i]= new Array(cantCalificaciones);
    }
return matriz;
}

//Esta función se utiliza para cargas las calificaciones de los diferentes trimestres para los alumnos
function cargarCalificaciones(matrizCalificaciones:number[][],cantAlumnos:number,cCalificaciones:number){
    let f:number, c:number, nota : number;
    
    for (f=0; f < cantAlumnos; f++) {
        console.log("Cargando alumno Nro: ",f);
        for (c=0; c < cCalificaciones; c++) {
            console.log("Calificacion Trimestre Nro: ",c+1);
            nota = rls.questionInt("Ingrese nota para el alumno: ");
            matrizCalificaciones[f][c]= nota;
        }
    }
}

//Esta función calcula el promedio de un alumno en particular, los mismos se enumeran a partir de 0
function obtenerPromedioAlumno(matrizCalificaciones:number[][],cantAlumnos:number,cCalificaciones:number): number {
    let f:number, c:number;
    let nroAlumno : number = rls.questionInt( "Ingrese Nro de alumno por el que desea preguntar: ");
    let promedioAnual : number = 0;
    let sumaNotas : number = 0;
    if ((nroAlumno >= 0) && (nroAlumno <= cantAlumnos)) {
        for (f=nroAlumno; f <= nroAlumno; f++) {
            for (c=0; c < cCalificaciones; c++) {
                sumaNotas = sumaNotas+ matrizCalificaciones[f][c];
            }
        }    
    } else {
        console.log("Numero de alumno invalido")
    }
    promedioAnual = sumaNotas / cCalificaciones;
    return promedioAnual;
}

let notasAlumnos : number[][]= crearMatriz(cantidadAlumnos,cantidadCalificaciones);
cargarCalificaciones(notasAlumnos,cantidadAlumnos,cantidadCalificaciones);
console.log("el promedio anual es: ",obtenerPromedioAlumno(notasAlumnos,cantidadAlumnos,cantidadCalificaciones));