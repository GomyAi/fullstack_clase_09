/*Paco no estudió mucho para sus últimos exámenes, 
quiere saber cuántos exámenes tendrá que realizar de nuevo, 
el programa recibirá la cantidad de exámenes y un arreglo de calificaciones para poder calcular el resultado
*/



const calificaciones = [6,7,5,7,5]
function examenes(){
    let examenesARealizar = 0
    let i = 0
    for (i; i < calificaciones.length; i++){
        let calificacion = calificaciones[i]
        if (calificacion < 6 ){
            examenesARealizar = examenesARealizar + 1
        }
    }return examenesARealizar

}
console.log(" Paco tiene que realizar " + examenes() + " materias")