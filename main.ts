import { Project, Job } from "./models/models";
import data_project from "./data/data_project.json";
import data_job from "./data/data_jobs.json";

let projects: Project[] = [...data_project];
let jobs: Job[] = [...data_job];

/*Implementa una función que permita añadir nuevas tareas a un proyecto.*/
function excersise1() {
  const newJob = {
    id: "job1-f27b-4969-915b-9787dc9de3df",
    description: "Job1",
    state: "pendiente",
    date_limit: "22-06-2025",
  };
  const idProject = "Ejercicio1-b731-4213-b8a7-eefc2650daf5";

  const projectSelected = projects.find((project) => project.id === idProject);

  console.log(projectSelected);

  if (projectSelected) {
    updateJobinProject(projectSelected, newJob);
  }

  function updateJobinProject(project: Project, newJob: Job) {
    project.jobs.push(newJob);
  }

  console.log(projectSelected);
}

/*Desarrolla una función que utilice métodos de array (map, filter, reduce) para
generar un resumen del proyecto mostrando el número de tareas en cada
estado*/

function excersise2(){

}

/*Crea una función que ordene las tareas de un proyecto por fecha límite
utilizando el método sort de JavaScript */
function excersise3(){


  const idProject2 = "Ejercicio2-b731-4213-b8a7-eefc2650daf5";
  const projectSelected = projects.find((project) => project.id === idProject2);
  
  if (projectSelected) {
    sortJobinProject(projectSelected);
  }
  
  function sortJobinProject(project: Project) {    
    project.jobs.sort((a,b)  => {
      const dateA = new Date(a.date_limit);
      const dateB = new Date(b.date_limit);
      return dateA.getTime() - dateB.getTime();
      
    });
  }
  
  console.log(projectSelected)
      
  }

/*Crea una función de orden superior filtrarTareasProyecto que tome una
función de filtrado como argumento y la aplique a la lista de tareas de un
proyecto */
function excersise4(){

}


/* Implementa una función calcularTiempoRestante que utilice el método
reduce para calcular el número total de días que faltan para completar todas
las tareas pendientes de un proyecto
 */
function excersise5(){
  const idProject5 = "Ejercicio5-b731-4213-b8a7-eefc2650daf5";
  const projectSelected = projects.find((project) => project.id === idProject5);
  
  if (projectSelected) {    
  }

  

}


/*Desarrolla una función obtenerTareasCriticas que identifique y retorne las
tareas que están a menos de 3 días de su fecha límite y aún no están
completadas */

function excersise6(){

}


/*Desarrolla una función cargarDetallesProyecto que simule una llamada
asíncrona a una API para cargar los detalles de un proyecto.
Utiliza Promises o async/await.*/

function excersise7(){

}

/*Crea una función actualizarEstadoTarea que simule la actualización del
estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
error. */

function excersise8(){

}

/*Implementa un sistema simple de notificacionesTareas que permita a
diferentes partes del código "escuchar" cuando se completa una tarea */

function excersise9(){

}




console.log("Ejercicio 1");
console.log();
//excersise1();

console.log("Ejercicio 2");
console.log();
//excersise2();

console.log("Ejercicio 3");
console.log();
//excersise3();

console.log("Ejercicio 4");
console.log();
excersise4();

console.log("Ejercicio 5");
console.log();
excersise5();

console.log("Ejercicio 6");
console.log();
excersise6();

console.log("Ejercicio 7");
console.log();
excersise7();

console.log("Ejercicio 8");
console.log();
excersise8();

console.log("Ejercicio 9");
console.log();
excersise9();