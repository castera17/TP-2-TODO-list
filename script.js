let Lista = [];

const agregar = () => {
    let tarea = document.getElementById("text").value;

    Lista.push({
        Tarea: tarea,
        Hecho: false,
        FechaEmpezado: new Date(Date.now()).toDateString(),
        FechaTerminado: undefined
    });

    mostrarEnPantalla();
}

const marcarHecho = (posicion) => {
    Lista[posicion].Hecho = !Lista[posicion].Hecho;
    if (Lista[posicion].Hecho) { 
        Lista[posicion].FechaTerminado = new Date(Date.now()).toDateString(); 
    } else { 
        Lista[posicion].FechaTerminado = undefined; 
    }

    mostrarEnPantalla();
}

const mostrarEnPantalla = () => {
    document.getElementById("listado").innerHTML = "";
    Lista.forEach((l, posicion) => {
        document.getElementById("listado").innerHTML += `
            <li>
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

mostrarEnPantalla();
