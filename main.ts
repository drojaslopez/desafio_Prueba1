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


const idProject2 = "Ejercicio2-b731-4213-b8a7-eefc2650daf5";
const projectSelected = projects.find((project) => project.id === idProject2);

if (projectSelected) {
  sortJobinProject(projectSelected);
}

function sortJobinProject(project: Project) {
  console.log("Entro")
  project.jobs.sort((a,b)  => {
    console.log("first")
    const dateA = new Date(a.date_limit);
    const dateB = new Date(b.date_limit);
    return dateA.getTime() - dateB.getTime();
    
  });
}

console.log(projectSelected)
    
}

/*Crea una función que ordene las tareas de un proyecto por fecha límite
utilizando el método sort de JavaScript */

/*Crea una función de orden superior filtrarTareasProyecto que tome una
función de filtrado como argumento y la aplique a la lista de tareas de un
proyecto */

/* Implementa una función calcularTiempoRestante que utilice el método
reduce para calcular el número total de días que faltan para completar todas
las tareas pendientes de un proyecto
 */

/*Desarrolla una función obtenerTareasCriticas que identifique y retorne las
tareas que están a menos de 3 días de su fecha límite y aún no están
completadas */

/*Desarrolla una función cargarDetallesProyecto que simule una llamada
asíncrona a una API para cargar los detalles de un proyecto.
Utiliza Promises o async/await.*/

/*Crea una función actualizarEstadoTarea que simule la actualización del
estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
error. */

/*Implementa un sistema simple de notificacionesTareas que permita a
diferentes partes del código "escuchar" cuando se completa una tarea */

console.log("Ejercicio 1");
console.log();
excersise1();

console.log("Ejercicio 2");
console.log();
excersise2();


