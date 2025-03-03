// let curso = prompt("¿De qué curso son tus alumnos?")
// let asignaturas = prompt("¿Qué asignaturas cursan? Sepáralo con '-'")

// let alumnoss = [ 
//     { nombre: 'Juan', edad: 25 }, 
//     { nombre: 'Ana', edad: 30 }, 
//     { nombre: 'Pedro', edad: 40 } 
// ]

// let info = alumnoss.map(alumno => `nombre: ${alumno.nombre} \nedad: ${alumno.edad} \ncurso: ${alumno.curso} \nasignaturas: ${alumno.asignaturas}`)
// console.log(alumnoss)

let alumnos = [
    { nombre: 'Victor', edad: 26 },
    { nombre: 'Riki', edad: 18 },
    { nombre: 'Sergio', edad: 20 }
];

let alumnosCursoYAsignaturas = alumnos.map(alumno => {
    let curso = prompt(`¿En qué curso está ${alumno.nombre}?`);
    let asignaturas = prompt(`¿Qué asignaturas cursa ${alumno.nombre}? (Sepáralas por -)`).split('-');
    return {
        ...alumno,
        curso: curso,
        asignaturas: asignaturas
    };
});

console.log(alumnosCursoYAsignaturas);
