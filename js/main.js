/*aquí va tu código*/

function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);	
	guardar();	 /*si se guarda aqui el llamado el valor no se borra al actualizar la página y funciona sólo con el localStore*/
}

function guardar(){
	var clave = document.getElementById("key").value;
	var valor = document.getElementById("value").value;

	localStorage.setItem(clave, valor); /*para guardar los datos temporalmente*/


   var contenedor = document.getElementById("contenedor");
   contenedor.innerHTML = ' ';
	for(var i = 0; i < localStorage.length; i++){
		var kei = localStorage.key(i);
		var valuee = localStorage.getItem(kei);

		contenedor.innerHTML += "<p>" + kei + "<br>" + valuee + "</p>";/*se usa += para agregar, si se usa == se sobreescribe el valor*/
	}
}

function borrar(){
	localStorage.clear();
	guardar(); 
}


init();
