// Inicializar arreglo de estudiantes o cargarlo desde localStorage
let estudiantes = localStorage.getItem('estudiantes') ? localStorage.getItem('estudiantes').split(',') : [];
//---------------------------------------------------------------------------------------------------------
// Función para guardar los estudiantes en localStorage
function guardarEstudiantes() {
    localStorage.setItem('estudiantes', estudiantes.join(','));

}
//----------------------------------------------------------------------------------------------------------
// Agregar estudiante

document.getElementById('miform')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let grupo = document.getElementById('grupo').value;
    estudiantes.push(${nombre}:${grupo}:${edad});  // Guardar como "nombre:grupo"
    guardarEstudiantes();
    alert('Estudiante agregado');
    this.reset();
});



//----------------------------------------------------------------------------------------------------------
// Buscar estudiante

buscar.getElementById('formBuscarEstudiante')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombreBuscar = document.getElementById('nombreBuscar').value;
    let resultadoBusqueda = document.getElementById('resultadoBusqueda');
    let estudiante = estudiantes.find(est => est.split(':')[0] === nombreBuscar);  // Busca por nombre
    if (estudiante) {
        let grupo = estudiante.split(':')[1];
        resultadoBusqueda.textContent = Estudiante: ${nombreBuscar}, Grupo: ${grupo};
    } else {
        resultadoBusqueda.textContent = 'Estudiante no encontrado';
    }
});

// Cambiar grupo de un estudiante
document.getElementById('formCambiarGrupo')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombreCambiar = document.getElementById('nombreCambiar').value;
    let nuevoGrupo = document.getElementById('nuevoGrupo').value;
    let index = estudiantes.findIndex(est => est.split(':')[0] === nombreCambiar);
    if (index !== -1) {
        estudiantes[index] = ${nombreCambiar}:${nuevoGrupo};  // Actualiza el grupo
        guardarEstudiantes();
        alert('Grupo cambiado');
    } else {
        alert('Estudiante no encontrado');
    }
    this.reset();
});

//Agregar nota a un estudiante