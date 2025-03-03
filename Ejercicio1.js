function Ejercicio1(cadena, booleano, arrayNumerico, funcion)
{
    if (typeof cadena == 'string' && typeof booleano == 'boolean' && Array.isArray(arrayNumerico) && typeof funcion == 'function')
    {
        if (booleano)
        {
            let mult = 1;
            arrayNumerico.forEach(num => mult *= num)
            if (mult > 100)
            {
                if (cadena.includes('a'))
                    console.log("La 'a' no está permitida.")
                else
                    console.log("Muy bien no has usado la 'a'")
            }
            else
            {
                console.log("El resultado de tu array es insuficiente para comprobar la cadena.")
            }
        }
        else
        {
            funcion()
        }
    }
    else
    {
        console.log("Algún parámetro introducido no es correcto.")
    }
}

Ejercicio1()
Ejercicio1("hola mundo",true,[1,2,3,4],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",true,[10,20,30,40],()=>{alert("Se acabó el juego")})
Ejercicio1("Sí",false,[10,20,30,40],()=>{alert("Se acabó el juego")})
// Ejercicio1(cadena, booleano, arrayNumerico, funcion)