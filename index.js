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




// ------Validar si un usuario ingresó contraseña correcta y luego si tiene permisos de administrador-----