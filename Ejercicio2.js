function verAsignaturas(...arrayAlumnos)
{
    if (arrayAlumnos.length == 0)
        console.log("No hay datos para mostrar.")
    
    arrayAlumnos.forEach(([nombre, curso, ...asignaturas]) => {
        console.log(`${nombre} - ${curso} - asognaturas: ${asignaturas.join('/')}`)
    });
}

verAsignaturas(["Sara", "DAMA", "Programación", "ED"],["Martín", "DAMB", "Programación", "LM", "ED", "BBDD", "FOL", "SI"],["Emma", "ASIR", "ISO", "BBDD", "LM"])
verAsignaturas(["Álvaro", "Semi", "BBDD"])
verAsignaturas()