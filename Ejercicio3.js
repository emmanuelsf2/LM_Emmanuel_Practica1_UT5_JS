function Ejercicio3(arrayNombres1, arrayNombres2)
{
    let nombresIncluidos = true
    let algunosIncluido = false
    arrayNombres1.forEach(nombres => {
        if (!arrayNombres2.includes(nombres))
            nombresIncluidos = false
        else
            algunosIncluido = true
    });

    if (nombresIncluidos) {
        console.log("Personas: " + arrayNombres1.join('/'))
        console.log("Array donde buscar: " + arrayNombres2.join('/'))
        console.log("Todos están incluidos.")
    }
    else if (!algunosIncluido && !nombresIncluidos) {
        console.log("Personas: " + arrayNombres1.join('/'))
        console.log("Array donde buscar: " + arrayNombres2.join('/'))
        console.log("Nunguno está incluido.")
    }
    else {
        console.log("Personas: " + arrayNombres1.join('/'))
        console.log("Array donde buscar: " + arrayNombres2.join('/'))
        console.log("Algunos están incluidos.")
    };
}

/* Array original */
Ejercicio3(["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])
/* Ninguno incluido */
Ejercicio3(["Lina Armida Machado Iglesias", "Apolonia Santiago Buendía", "Poncio Cobo Herrera", "Rafaela Seco Cañas", "Fulgencio Alarcón Lloret"], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])
/* Algunos incluidos */
Ejercicio3(["Elisabet Ricart Monreal", "Poncio Cobo Herrera", "Isaac Talavera Luna"], ["Elisabet Ricart Monreal", "María Del Carmen Sedano-Rocamora", "Roldán Alvarado", "Leocadio de Pera", "Isaac Talavera Luna"])