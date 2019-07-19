function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch (mesDelAño) {
        case "Enero": alert("Que comiences bien el año.");
            break;
        case "Marzo": alert("A clases.");
            break;
        case "Julio": alert("Vacaciones.");
            break;
        case "Diciembre":
            alert("Felices fiestas.");
        default: alert("Mes sin importancia.");
    }



}//FIN DE LA FUNCIÓN