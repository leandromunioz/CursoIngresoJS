function mostrar()
{
    var sexo;
    sexo=prompt("Ingrese su sexo");
    while(sexo != "m" && sexo != "f"){

        sexo=prompt("Error, ingrese un sexo valido.");
    }
document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN