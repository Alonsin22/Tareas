const botonAgregar = document.getElementById("boton-agregar-01");
const inputTarea = document.getElementById("input-nombre-tarea");
const inputFecha = document.getElementById("input-fecha-tarea");
const listaTareas = document.getElementById("tareas-por-hacer");
const tareasBorradas = document.getElementById("tareas_terminadas");

botonAgregar.addEventListener("click", ()=>{
    const tarea = inputTarea.value;
    const nuevaTarea = document.createElement("li");
    const textotarea = document.createTextNode(tarea);
    textotarea.textContent = tarea + " - " + inputFecha.value + " ";
    nuevaTarea.appendChild(textotarea);
    const t = nuevaTarea.textContent;
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Terminar";
    botonBorrar.addEventListener("click", () => {
        const TXT = document.createTextNode(t);
        const tareasTerminadas = document.createElement("li");
        tareasTerminadas.appendChild(TXT);
        tareasBorradas.appendChild(tareasTerminadas);
        nuevaTarea.remove();
    });
    nuevaTarea.appendChild(botonBorrar);
    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = "";
    inputFecha.value = "";
});
