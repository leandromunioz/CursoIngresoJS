function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 9 inclusive.");

	while (!(numero >0 && numero < 10)) {
		numero=prompt("Error , ing numero valido.");
	}
	document.getElementById("Numero").value= numero ;

}//FIN DE LA FUNCIÓN