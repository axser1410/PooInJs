// Creación de objetos utilizando la clase 'Persona'
//const persona1 = new Persona("Juan", 25);
//const persona2 = new Persona("María", 30);

// Acceso a los atributos y llamada a los métodos

const btnObjEvaluacion = document.getElementById("objEvaluacionProyecto")
const btnObjFeria = document.getElementById("objFeriaAcademica")
const span1 = document.getElementById("span1")
const arregloEvaluacion = ["ingrese el nombre del proyecto", "ingrese la materia", "ingrese el puntaje", "integrante 1", "integrante 2", "integrante 3"]
const arregloFeria = ["ingrese el nombre del proyecto", "ingrese el nombre de la universidad"]
let objetosEvaluacion = []
let objetosFeria = []
let objetosGeneral = []

class EvaluacionProyectosObj { // Definición de la clase 'Persona'
    constructor(carrera, universidad, nombreObjeto) { // Constructor
        this.nombreObjeto = nombreObjeto;
        this.carrera = carrera;
        this.universidad = universidad;
        this.np = 0;
        this.p = [];
        this.filasP = 3;
        this.ni = 0;
        this.i = [];
        this.filasI = 3
    }
    
    mostrar(){
        console.log(this.carrera, this.universidad, this.nombreObjeto);
        for (let i = 0; i < this.np; i++) {
            console.log(this.p[i][0]);//nombreproyecto
            console.log(this.p[i][1]);//materia
            console.log(this.p[i][2]);//puntaje
            console.log(this.i[i][0]);
            console.log(this.i[i][1]);
            console.log(this.i[i][2]);  
        }
    }

    conseguirMenorPuntaje(){
        let puntaje = parseInt(this.p[0][2])
        for (let i = 0; i < this.np; i++) {
            if (parseInt(this.p[i][2]) <= puntaje) {
                puntaje = parseInt(this.p[i][2]);
            }
        }
        for (let i = 0; i < this.np; i++) {
            if (parseInt(this.p[i][2]) === puntaje) {
                console.log("el nombre del equipo con menor puntaje es "+ this.p[i][0]) //muestra los nombres del equipo
            }
            
        }
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
    constructor(nombre, lugar, fecha, nombreObjeto) {
        this.nombreObjeto = nombreObjeto
        this.nombre = nombre;
        this.lugar = lugar;
        this.fecha = fecha;
        this.ne = 0;
        this.e = [];
        this.filasE = 2;
        
    }

    agregarNombreProyecto(nombreProyecto) {    // Método de instancia
        this.ni[1][this.ne] = nombreProyecto
    }
    agregarUniversidad(universidad) {
        this.ni[2][this.ne] = universidad
    }
    
    mostrar(){
        console.log(this.nombre, this.lugar, this.fecha, this.nombreObjeto);
        for (let i = 0; i < this.np; i++) {
            console.log(this.e[i][0]);
            console.log(this.p[i][1]); 
        }
    }
}

function creaObjEvaluacionDefecto() {
    if(revisionCampoVacio() === true && revisionVariableCreada()=== true){        let entrada = document.getElementById("textoPrin")
        let entre = entrada.value
        let a = "Informatica"
        let b = "Universidad Mayor de San Andres"
        let objetoCrear = new EvaluacionProyectosObj(a, b, entre);
        this.np = 1
        objetoCrear.ne = 1
        objetoCrear.p[0] = ["Ia", "INFORMATICA", "76"]
        objetoCrear.i[0] = ["Alexandre", "Karen", "Victor"]
        //let objetoCrear = entrada.value;
        objetosEvaluacion.push(objetoCrear)
        objetosGeneral.push(objetoCrear)
        console.log(objetosEvaluacion); 
        entrada.value = ""
    }
    else{
        alert("ingrese un nombre de la variable para crear el objeto o cambie el nombre de la variable")

    }
}
function creaObjFeriaDefecto() {
    if(revisionCampoVacio() === true && revisionVariableCreada()=== true){
        let entrada = document.getElementById("textoPrin")
        let entre = entrada.value
        let a = "Alexandre";
        let b = "Monoblock";
        let c = "12/12/12";
        let objetoCrear = new FeriaAcademica(a, b, c, entre);
        this.np = 1
        objetoCrear.ne = 1
        objetoCrear.e[0] = ["Inteligencia Artificial", "Umsa"]
        //let objetoCrear = entrada.value;
        objetosEvaluacion.push(objetoCrear)
        objetosGeneral.push(objetoCrear)
        console.log(objetosEvaluacion); 
        entrada.value = ""
    }
    else{
        alert("ingrese un nombre de la variable para crear el objeto o cambie el nombre de la variable")
    }
}

function creaObjEvaluacion(){
    if(revisionCampoVacio() === true && revisionVariableCreada()=== true){
        let entrada = document.getElementById("textoPrin")// error al declarar la variable "const entrada" fuera de todo(al inicio)
        let entre = entrada.value
        let auxnp = 0
        let a = prompt("ingrese su carrera")
        let b = prompt("ingrese su universidad")
        let objetoCrear = new EvaluacionProyectosObj(a, b, entre);
        //console.log(objetoCrear);
        this.np = 0
        //console.log(this.np);
        let resp = prompt("desea agregar algun proyecto?   (si/no)")
        while (resp === "si") {
            let proyecto = []
            let integrantes = []
            auxnp = auxnp + 1
            this.np = auxnp
            //console.log(this.np, auxnp);
            //console.log("funciona hasta1");
            for (let i = this.np-1; i < this.np; i++) {
                //console.log("funciona hasta2");
                for (let j = 0; j < arregloEvaluacion.length/2; j++) {
                    //console.log("funciona hasta3");
                    let valor= prompt(arregloEvaluacion[j])
                    //console.log("funciona hasta4");
                    //console.log(valor);
                    proyecto.push(valor)
                    //console.log("funciona hasta5");
                    //console.log(proyecto);
                }
                for (let m = arregloEvaluacion.length/2; m < arregloEvaluacion.length; m++) {
                    //console.log("ingresa a 2");
                    let valor2 = prompt(arregloEvaluacion[m])
                    integrantes.push(valor2)
                    //console.log(integrantes);
                    //console.log("funciona hasta6");
                }
            }
            objetoCrear.p.push(proyecto)
            objetoCrear.i.push(integrantes)
            resp = prompt("desea seguir agregando?   si  o  no")
        }
        objetoCrear.np = auxnp
        //let objetoCrear = entrada.value;
        objetosEvaluacion.push(objetoCrear)
        objetosGeneral.push(objetoCrear)
        console.log(objetosEvaluacion); 
        entrada.value = ""
        
    }
    else{
        alert("ingrese un nombre de la variable para crear el objeto o cambie el nombre de la variable")
    }
}
function creaObjFeria() {
    if(revisionCampoVacio() === true && revisionVariableCreada()=== true){        let entrada = document.getElementById("textoPrin")
        let entre = entrada.value
        let auxnp = 0
        let a = prompt("ingrese su nombre")
        let b = prompt("ingrese el lugar")
        let c = prompt("ingrese la fecha")
        let objetoCrear = new FeriaAcademica(a, b, c, entre)
        resp = prompt("desea agregar algun proyecto?   (si/no)")
        while(resp === "si"){
            let entradas = []
            auxnp = auxnp + 1
            this.ne = auxnp
            //console.log(this.ne, auxnp);
            for (let i = this.ne-1; i < this.ne; i++) {
                for (let j = 0; j < arregloFeria.length; j++) {
                    let valor3 = prompt(arregloFeria[j])
                    entradas.push(valor3)
                }
            }
            objetoCrear.e.push(entradas)
            resp = prompt("desea seguir agregando?   (si/no)")

        }
        //let objetoCrear = entrada.value
        objetoCrear.ne = auxnp
        objetosFeria.push(objetoCrear)
        objetosGeneral.push(objetoCrear)
        console.log(objetosFeria);
        entrada.value = ""
    }
    else{
        alert("ingrese un nombre de la variable para crear el objeto o cambie el nombre de la variable")

    }
}


function revision() {
    console.log("juego cargado");
}

function revisionCampoVacio(){
    let entrada = document.getElementById("textoPrin")
    if(entrada.value === ""){
        return false;
    }
    else{
        return true;
    }
}

function revisionVariableCreada() {
    let sw = 0
    let entrada = document.getElementById("textoPrin")
    for (let i = 0; i < objetosEvaluacion.length; i++) {
        if(entrada.value ===objetosEvaluacion[i].nombreObjeto){
            sw =+ 1
        }    
    }
    if (sw === 0) {
        return true
    }else{
        return false
    }
}


function func1(){
    let entrada = document.getElementById("nombreBuscar")
    let valor = entrada.value
    let sw = 0
    for (let i = 0; i < objetosEvaluacion.length; i++) {
        if(valor === objetosEvaluacion[i].nombreObjeto){
            objetosEvaluacion[i].mostrar()
            sw = 1
            console.log("esta en ObjetosEvaluacion");
        }
    }
    for (let i = 0; i < objetosFeria.length; i++) {
        if(valor === objetosFeria[i].nombreObjeto){
            objetosEvaluacion[i].mostrar()
            sw = 1
            console.log("esta en objetosFeria");
        }
    }
    if (sw === 0) {
        console.log("no esta en ningun arreglo");
    }
}

function func2() {
    let entrada = document.getElementById("nombreBuscar")
    let valor = entrada.value
    for (let i = 0; i < objetosEvaluacion.length; i++) { //recorre objetos
        if (valor === objetosEvaluacion[i].nombreObjeto) {
            objetosEvaluacion[i].conseguirMenorPuntaje()
        }
    }
}

window.addEventListener("load", revision)