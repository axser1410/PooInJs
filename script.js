// Creación de objetos utilizando la clase 'Persona'
//const persona1 = new Persona("Juan", 25);
//const persona2 = new Persona("María", 30);

// Acceso a los atributos y llamada a los métodos

const btnObjEvaluacion = document.getElementById("objEvaluacionProyecto")
const btnObjFeria = document.getElementById("objFeriaAcademica")
const span1 = document.getElementById("span1")
const arregloEvaluacion = ["ingrese el nombre del proyecto", "ingrese la materia", "ingrese el puntaje", "integrante 1", "integrante 2", "integrante 3"]
const arregloFeria = []
let objetosFeria = []
let objetosEvaluacion = []

class EvaluacionProyectosObj { // Definición de la clase 'Persona'
    constructor(carrera, universidad) { // Constructor
        this.carrera = carrera;
        this.universidad = universidad;
        this.npc = 0;
        this.p = [[0]*3];
        this.filasP = 3;
        this.nic = 0;
        this.i = [[0]*3];
        this.filasI = 3
    }
  
    ingresarintegrante1(integrante1) { // Método de instancia
        this.ni[1][this.ni] = integrante1
    }
    ingresarintegrante2(integrante2) { // Método de instancia
        this.ni[2][this.ni] = integrante2
    }
    ingresarintegrante3(integrante3) { // Método de instancia
        this.ni[3][this.ni] = integrante3
    }
}
class FeriaAcademica {
    constructor(nombre, lugar, fecha) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.fecha = fecha;
        this.ne = 0;
        this.e = [[]];
        this.filasE = 3;
        
    }
  
    // Método de instancia
    agregarNombreProyecto(nombreProyecto) {
        this.nic[1][this.ne] = nombreProyecto
    }
    agregarUniversidad(universidad) {
        this.nic[2][this.ne] = universidad
    }
    
}
function creaObjEvaluacion(){
    let a = prompt("ingrese su carrera")
    let b = prompt("ingrese su universidad")
    let objetoCrear = new EvaluacionProyectosObj(a,b);
    console.log(objetoCrear);
    let resp = prompt("desea agregar algun proyecto?   (si/no)")
    while (resp != "no") {
        this.npc = this.npc + 1
        this.p[this.npc] = []
        console.log("funciona hasta1");
        for (let i = 0; i < 6; i++) {
            console.log("funciona hasta2");
            for (let j = 0; j < arregloEvaluacion.length; j++) {
                console.log("funciona hasta3");
                this.p[j][i] = prompt(arregloEvaluacion[j])
                console.log("funciona hasta4");
            }
        }
        resp = prompt("desea seguir agregando?   si  o  no")
    }
    const entrada = document.getElementById("textoPrin")// error al declarar la variable "const entrada" fuera de todo(al inicio)
    //let objetoCrear = entrada.value;
    objetosEvaluacion.push(objetoCrear)
    console.log(objetosEvaluacion); 
    entrada.value = ""
}
function creaObjFeria() {
    const entrada = document.getElementById("textoPrin")
    //let objetoCrear = entrada.value
    objetosFeria.push(objetoCrear)
    console.log(objetosFeria);

    entrada.value = ""
}

function revision() {
    console.log("juego cargado");
}

window.addEventListener("load", revision)