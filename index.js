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

Un array es una colección de varios datos en una sola variable, como una lista, sirve para no 
tener que crear una constante por cada dato.