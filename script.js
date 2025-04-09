let Lista = [];

const agregar = () => {
    let tarea = document.getElementById("text").value;

    Lista.push({
        Tarea: tarea,
        Hecho: false,
        FechaEmpezado: new Date(Date.now()).toDateString(),
        TiempoTarea:Date.now(),
        FechaTerminado: undefined,
        TareaFinalizada:undefined
    });

    mostrarEnPantalla();
}

const marcarHecho = (posicion) => {
    Lista[posicion].Hecho = !Lista[posicion].Hecho;
    if (Lista[posicion].Hecho) { 
        Lista[posicion].FechaTerminado = new Date(Date.now()).toDateString(); 
        Lista[posicion].TareaFinalizada=Date.now()
    } else { 
        Lista[posicion].FechaTerminado = undefined; 
        Lista[posicion].TareaFinalizada = undefined; 
        
    }

    mostrarEnPantalla();
}

const mostrarEnPantalla = () => {
    document.getElementById("listado").innerHTML = "";
    Lista.forEach((l, posicion) => {
    
        document.getElementById("listado").innerHTML += `
            <li style="${l.Hecho ? 'text-decoration: line-through;' : ''}">
                <input type="checkbox" onclick="marcarHecho(${posicion})" ${l.Hecho ? 'checked' : ''}>
                ${l.Tarea} - ${l.FechaEmpezado} - ${l.Hecho ? l.FechaTerminado + ' - Completado' : 'Pendiente'}
            </li>
        `;
     
    });
}

const borrar = () => {
    Lista = []; 
    mostrarEnPantalla(); 
}
const tareaMasRapida = () => {
    const tareasCompletadas = Lista.filter(t => t.Hecho && t.TiempoTarea && t.TareaFinalizada);

    if (tareasCompletadas.length == 0) {
        alert("Todavía no hay tareas completadas.");
        return;
    }

    const tareaRapida = tareasCompletadas.reduce((rapida, actual) => {
        return (actual.TareaFinalizada - actual.TiempoTarea) < (rapida.TareaFinalizada - rapida.TiempoTarea) ? actual : rapida;
    });

    const tiempoEnSegundos = Math.floor((tareaRapida.TareaFinalizada - tareaRapida.TiempoTarea) / 1000);
    alert(`La tarea más rápida fue: "${tareaRapida.Tarea}" y tardó ${tiempoEnSegundos} segundos.`);
};
mostrarEnPantalla();

