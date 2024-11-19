import { Project, Job } from "./models/models";
import data_project from "./data/data_project.json";

let projects: Project[] = [...data_project];

/*Implementa una función que permita añadir nuevas tareas a un proyecto.*/
function excersise1() {
  const newJob = {
    id: "job1-f27b-4969-915b-9787dc9de3df",
    description: "Job1",
    state: "pendiente",
    date_limit: "01-06-2025",
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

function excersise2() {
  const idProject = "Ejercicio2-b731-4213-b8a7-eefc2650daf5";

  const projectSelected = projects.find((project) => project.id === idProject);

  if (projectSelected) {
    console.log( projectSummary(projectSelected));
  }

  function projectSummary(projectSelected: Project) {
    const conteoPorEstado = projectSelected.jobs.reduce(
      (acc, job) => {
      acc[job.state] = acc[job.state] || 0 + 1;
      return acc;
    });
    return conteoPorEstado;
  }
}

/*Crea una función que ordene las tareas de un proyecto por fecha límite
utilizando el método sort de JavaScript */
function excersise3() {
  const idProject2 = "Ejercicio2-b731-4213-b8a7-eefc2650daf5";
  const projectSelected = projects.find((project) => project.id === idProject2);

  console.log(projectSelected);

  if (projectSelected) {
    sortJobinProject(projectSelected);
  }

  

  function sortJobinProject(project: Project) {
    project.jobs.sort((a, b) => {
      const dateA = new Date(a.date_limit);
      const dateB = new Date(b.date_limit);
      return dateA.getTime() - dateB.getTime();
    });
  }

  console.log(projectSelected);
}

/*Crea una función de orden superior filtrarTareasProyecto que tome una
función de filtrado como argumento y la aplique a la lista de tareas de un
proyecto */
function excersise4() {




}

/* Implementa una función calcularTiempoRestante que utilice el método
reduce para calcular el número total de días que faltan para completar todas
las tareas pendientes de un proyecto
 */
function excersise5() {
  const idProject5 = "Ejercicio5-b731-4213-b8a7-eefc2650daf5";
  const projectSelected = projects.find((project) => project.id === idProject5);

  if (projectSelected) {
    calculateRemainingTime(projectSelected);
  }

  function calculateRemainingTime(project: Project) {
    const today = new Date();

    console.log(`hoy es: ${today}`);

    let remainingDays = project.jobs.reduce((acc, curr) => {
      const dateLimit = new Date(curr.date_limit);

      if (curr.state === "pendiente" || curr.state === "en progreso") {
        //se consideran tanto los projectos pendientes como los en procesos

        const diffTime = dateLimit.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 0) {
          acc += diffDays;
        } else {
          acc += 0;
        }
      }

      return acc;
    }, 0);

    console.log(`Los dias restante para el projecto es: ${remainingDays}`);
  }
}

/*Desarrolla una función obtenerTareasCriticas que identifique y retorne las
tareas que están a menos de 3 días de su fecha límite y aún no están
completadas */

function excersise6() {}

/*Desarrolla una función cargarDetallesProyecto que simule una llamada
asíncrona a una API para cargar los detalles de un proyecto.
Utiliza Promises o async/await.*/

function excersise7() {
  /*
  // Versión con Promises
// Ahora asinc1 y asinc2 se supone que retornan una Promise
function main() {
  asinc1(parametros)
  .then(function(r1){ return asinc2(r1); })
  .then(function(r2){
  console.log("Resultado final: " + r2); 
  })
}

// Lo anterior puede escribirse aún más concisamente así:
function main() {
  asinc1(parametros)
  .then(asinc2)
  .then(function(r2){
  console.log("Resultado final: " + r2); 
})}*/
}

/*Crea una función actualizarEstadoTarea que simule la actualización del
estado de una tarea en el servidor y maneje tanto el caso de éxito como el de
error. */

function excersise8() {
  let state = "Completada";
  const idProject = "553d235a-8980-4088-a49e-d00d92ca4897";
  const idJob = "643b5a34-257c-4ff3-b207-c1b0ab296eb9";

  updateStatusTask();
  async function updateStatusTask() {
    try {
      const data = await updateStatusDB(state, idProject, idJob);
      console.log("http 200 ok");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function updateStatusDB(state: string, idProject: string, idJob: string) {
    const projectSelected = projects.find(
      (project) => project.id === idProject
    );
    console.log(projectSelected);
    if (projectSelected) {
      projectSelected.jobs.forEach((job) => {
        if (job.id === idJob) {
          job.state = state;
        }
      });
    }

    return projectSelected;
  }
}

/*Implementa un sistema simple de notificacionesTareas que permita a
diferentes partes del código "escuchar" cuando se completa una tarea */

function excersise9() {}

console.log("Ejercicio 1");
//excersise1();

console.log("Ejercicio 2");
//excersise2();

console.log("Ejercicio 3");
//excersise3();

console.log("Ejercicio 4");
excersise4();
console.log();

console.log("Ejercicio 5");
excersise5();

console.log("Ejercicio 6");
excersise6();
console.log();

console.log("Ejercicio 7");
excersise7();
console.log();

console.log("Ejercicio 8");
console.log("Listo");
//excersise8();
console.log();

console.log("Ejercicio 9");
excersise9();
console.log();

