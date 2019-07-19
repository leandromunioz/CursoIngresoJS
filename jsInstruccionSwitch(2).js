function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
            {
                alert("Hace calor");
            }
            break;

        case "Julio":
        case "Agosto":
            {
                alert("Hace frio.");
            }
            break;
        default: {
            alert("Ya paso el invierno.");
        }
    }


}//FIN DE LA FUNCIÓN