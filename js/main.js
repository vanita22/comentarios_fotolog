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
		

		var post = document.createElement("h4");
		var posteo = document.createTextNode(kei);
		post.appendChild(posteo);
		contenedor.appendChild(post);	

		var post2 = document.createElement("p");
		var posteo2 = document.createTextNode(valuee);
		post2.appendChild(posteo2);
		contenedor.appendChild(post2);	

		/*contenedor.innerHTML += "<h4>" + "<strong>" + kei + "</strong>" + "</h4>" + "<p>" + valuee + "</p>";/*se usa += para agregar, si se usa == se sobreescribe el valor*/
		/*contenedor.style.backgroundColor = '#DF33B2'; */
	}

}

function borrar(){
	localStorage.clear();
	guardar(); 
}

init();
