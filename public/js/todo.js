function ingresarTarea() {
	var inputTareas = document.getElementById('inputTareas');
	return inputTareas.value;
}
function guardarTarea() {
	var tarea = ingresarTarea();
	if (tarea !== ''){
		mostrarTarea(tarea);
		inputTareas.value = '';
		inputTareas.focus();
	}
}
function mostrarTarea(mostrar) {
	var listaTareas = document.getElementById('listaTareas');
	var li = document.createElement('li');
	li.className = 'nuevaTarea';
	listaTareas.appendChild(li);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	check.className = 'input-check';
	check.onchange = function() {
		if (check.checked == true){
			spanTarea.innerHTML = mostrar.strike();
		} else {
			spanTarea.innerHTML = mostrar;
		}
	};
	li.appendChild(check);

	var spanTarea = document.createElement('span');
	spanTarea.className = 'sTarea';
	spanTarea.innerHTML = mostrar;
	li.appendChild(spanTarea);

	var trash = document.createElement('span');
	trash.className = 'fa fa-trash';
	trash.onclick = function () {
		listaTareas.removeChild(li);
	}
	li.appendChild(trash);
}
