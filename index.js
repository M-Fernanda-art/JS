// CONDICIONALES ANIDADOS

// Es una condición dentro de otra condición. Para esto se usa "if". Se utiliza 
// cuando primero es necesario comprobar una condición general y luego una especifica.


// -----Comprobar si un estudiante aprobó y luego si obtuvo nota sobresaliente-----

const nota = parseFloat (prompt("por favor ingresa la nota"))

if (nota >=3.5) {
    if (nota >= 4.0) {
        console.log("Pasaste con sobresaliente");
    } else {
        console.log("Pasaste la materia");
    }
} else {
    console.log("Reprobaste la materia. Debes presentar taller de recuperación");
}


// OPERADORES LOGISTICOS

// sirven para combinar o modificar condiciones, ayudan a tomar decisiones más complejas combinando condiciones.
// Los principales son:
// 1. && significa "y" ambas condiciones deben cumplirse
// 2. OR || "o" funciona si se cumple solo una condicio
// 3. NOT ! "no" invierte el valor


const proyectoIngles = prompt("¿presentaste el proyecto de inglés?") == "si";

if (nota >= 4.5 && proyectoIngles) {
    console.log("Como aprobaste y presentaste el proyecto de inglés, te ganaste el viaje extracurricular");

} else {
    console.log ("No aplicas para el viaje extracurricular, intentalo el próximo semestre");
}


// ARRAYS

// Un array es una colección de varios datos en una sola variable, como una lista, sirve para no 
// tener que crear una constante por cada dato. Funciona con []


// LENGTH = muestra la cantidad de items en la lista

const destinosViaje = ["guatavita", "barichara", "napoles"];

console.log("Cantidad de destinos para viaje extracurricular:", destinosViaje.length);


// FOREACH = muestra cada elemento de la lista

destinosViaje.forEach(function(destinosViaje) {
    console.log("Destino para viaje extracurricular:", destinosViaje);
});


// PUSH = agrega elemento al final

const sugerenciaDestino = prompt("Agrega una sugerencia de destino para el viaje extracurricular:");

destinosViaje.push(sugerenciaDestino);

console.log(`Se agregó "${sugerenciaDestino}" a la lista de destinos`);
console.log(destinosViaje);


// OBJETOS

// Es una variable que guarda información más completa y organizada mediante propiedades. La diferencia con 
// el Array es que es una lista mientras que el objeto son datos detallados. El objeto tiene metodos que son 
// funciones que realizan una acción con la información del objeto.


// ASSIGN = Muestra dos bloques de información en uno

const cursoUno = {
    nombreProfesor: "Laura Gutierrez",
    codigo: 1305
};

const materiasSemestre = {
    primerSemestre: ["matematicas", "artes", "inglés", "español"],
    segundoSemestre: ["fisica", "biologia", "quimica", "sociales"]
};

const infoCurso = Object.assign({}, cursoUno, materiasSemestre);

console.log(infoCurso);


// FREEZE = No permite realizar cambios a los que uno congele

Object.freeze(cursoUno);

cursoUno.nombreProfesor = "Xiommy Arevalo";
cursoUno.codigo = 1824;

console.log(cursoUno);

// HAS OWN PROPERTY = Para revisar si existe una propiedad

console.log(cursoUno.hasOwnProperty("codigo"));
console.log(cursoUno.hasOwnProperty("numeroEstudiantes"));



// AMPLIACIÓN DE INVESTIGACIÓN


// INGRESO A PARQUE DE DIVERSIONES

function verificarIngreso() {
    const edad = parseInt(document.getElementById("edad").value);
    // Obtiene el valor y convierte texto a número entero
    const resultado = document.getElementById("resultado");

    if(edad >= 12) {
        // Si tiene 12 o más puede ingresar
        if(edad >= 18) {
            // Dentro de los que pueden ingresar, verificar si es adulto
            resultado.textContent = "Puedes ingresar a todas las atracciones"
            // Mensaje si es igual o mayor a 18
    } else {
        resultado.textContent = "Puedes ingresar, pero con restricciones en algunas atracciones";
        // Mensaje edad entre 12 a 17
    }
    } else { 
        resultado.textContent = "No puedes ingresar sin acompañante adulto";
        // Mensaje si es menor a 12
    }
}


// VERIFICAR ENTRADA VIP

function verificarEntrada() {
    const edad = parseInt(document.getElementById("edad").value);
    const boletoVIP = document.getElementById("boletoVIP").checked;
    // .checked devuelve true y false
    const resultado2 = document.getElementById("resultado2");

    if (edad >= 18 && boletoVIP) {
        // Debe cumplir que sea mayor de edad y tener boleto VIP
        resultado2.textContent = "Puedes ingresar al evento VIP";
    } else if (edad >= 18 || boletoVIP) {
        // Si cumple solo una condición
        resultado2.textContent = "Cumples parcialmente, consulta con administración";
    } else {
        resultado2.textContent = "No puedes ingresar al evento VIP";
        // No cumple ninguna
    }
}

// LISTA DE LIBROS

const libros = [
    "De la tierra a la luna",
    "Shadowhunters",
    "La cabaña",
    "El principito",
    "Maze runner"
];
// Lista que almacena varios libros en una variable

function mostrarLibros() {
    // Se activa al presionar el botón
    const lista = document.getElementById("listaLibros");
    lista.innerHTML = "";
    // Evita duplicados

    libros.forEach(function(libro) {
        // Recorre cada libro
        const li = document.createElement("li");
        // Crea una línea de lista
        li.textContent = libro;
        // Asigna el texto
        lista.appendChild(li);
        // La muestra
    });
}