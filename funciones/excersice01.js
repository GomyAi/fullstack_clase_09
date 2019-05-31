/*
A Daniel le acaban de mandar una lista con sus calificaciones, 
quiere saber si su promedio es suficiente para tener una beca este año,
 el promedio mínimo que necesita es 8, el programa recibirá la cantidad de
  calificaciones y un arreglo de calificaciones para poder calcular el resultado

*/


//let promedio = 0
function sumaCalificaciones(calificacion){
    let suma = 0
    for (let i =0; i < calificacion.length; i ++ ){
        suma = suma + calificacion[i]
    }
    return suma
}
    //console.log ('Tu promedio es :' + suma)
    const calificacion = [10,6,7,8,10]
    const promedio = sumaCalificaciones(calificacion)/calificacion.length
    if (promedio >= 8){
        console.log ('Felicidades has obtenido una beca ')
    }else {
        console.log('Tu promedio no alcanzo la beca ')
    }





