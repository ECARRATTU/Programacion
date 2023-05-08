import * as rls from "readline-sync";

const cadenaDeTexto : string = "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. La vida es un 10% lo que nos pasa y un 90% cómo reaccionamos ante ello. La creatividad es la inteligencia divirtiéndose. En la vida no se trata de esperar a que pase la tormenta, se trata de aprender a bailar bajo la lluvia. Si lo puedes soñar, lo puedes hacer. La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos. La educación es el arma más poderosa que puedes usar para cambiar el mundo. Todo lo que puedas imaginar es real. La verdad nunca daña una causa que es justa. El fracaso es una gran oportunidad para empezar otra vez con más inteligencia. El secreto de la creatividad es saber cómo esconder tus fuentes. No tengas miedo de renunciar a lo bueno para perseguir lo grandioso. La paciencia es amarga, pero su fruto es dulce. La única forma de hacer un gran trabajo es amar lo que haces. Lo que no te mata, te hace más fuerte. El éxito no es la clave de la felicidad, la felicidad es la clave del éxito. Si buscas resultados distintos, no hagas siempre lo mismo. Siempre parece imposible hasta que se hace. La simplicidad es la máxima sofisticación.";

//Se pide ingresar la palabra a buscar dentro de cadenaDeTexto
let palabraBuscada : string = rls.question("Ingrese la palabra a buscar: ");

//¿Qué es una expresión regular?
//Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda .
//Cuando busca datos en un texto, puede usar este patrón de búsqueda para describir lo que está buscando.
//Una expresión regular puede ser un solo carácter o un patrón más complicado.
//Las expresiones regulares se pueden utilizar para realizar todo tipo de operaciones de búsqueda y reemplazo de texto .

const expresionRegular = new RegExp(palabraBuscada, 'gi');

//El match()método devuelve un arreglo que contiene los resultados de hacer coincidir una cadena con otra cadena (o una expresión regular).

let arregloCoincidencias = cadenaDeTexto.match(expresionRegular);

if (arregloCoincidencias) {
  console.log("La palabra",palabraBuscada, "aparece " + arregloCoincidencias.length, "veces");
} else {
  console.log("No se encuentran apariciones de",palabraBuscada);
}

