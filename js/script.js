
var btn = document.getElementById('btn-parrafo');

btn.addEventListener('click', function(){

	var parrafo = document.getElementById('parrafo-escondido');


	if(parrafo.style.display == "" || parrafo.style.display == "none"){
		parrafo.style.display = 'block';
		btn.innerHTML = 'Mostrar menos...';
	} else{
		parrafo.style.display = 'none';
		btn.innerHTML = 'Leer más...';
	}

});


//-----------------------------------------------------------------------//

var btnContacto = document.getElementById('btn-contacto');

btnContacto.addEventListener('click', guardarContacto); 

function guardarContacto(){

	var nombre = document.getElementById('name').value;
	var mail = document.getElementById('email').value;
	var telefono = document.getElementById('tel').value;

	localStorage.setItem("Nombre", nombre);
	localStorage.setItem("E-mail", mail);
	localStorage.setItem("Teléfono", telefono);

	if (nombre && mail && telefono != undefined) {

		var seccionOculta = document.getElementById('section-4');

		var formOculto = document.getElementById('form-oculto');

		var graciasContacto = document.getElementById('contacto');

		seccionOculta.style.display = 'none';

		formOculto.style.display = 'none';

		graciasContacto.style.display = 'block';
		
		graciasContacto.innerHTML = "Muchas gracias por conctactarte con nosotros " + nombre + ", a la brevedad nos comunicaremos contigo."

	}

}

