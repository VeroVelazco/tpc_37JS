// capturar los siguientes elementos: <main>,<h2>, <a> y <p>,

let main = document.querySelector("main");


let h2 = document.querySelectorAll("h2");


let a = document.querySelector('a');


let p = document.querySelectorAll('p');


// Haciendo uso del prompt, indicar al usuario que: “Ingrese su nombre”.

let nombre = prompt("Ingrese su nombre");

// En caso de que el usuario no coloque su nombre, a la etiqueta <h2>, se le debe agregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que el
// usuario ingresó.

if (nombre) {
    document.querySelector(".subtitulo").innerHTML += nombre;
}else{
    document.querySelector(".subtitulo").innerHTML += "invitado";
} 
// Agregar a la etiqueta <h2> el estilo uppercase.
document.querySelector("h2").style.textTransform = "uppercase";

// A la etiqueta <a>, colocarle el estilo correspondiente para que asuma el siguiente color: #E51B3E.
document.querySelector('a').style.color = "#E51B3E";

// Mediante el confirm, preguntar al usuario “¿Desea colocar un fondo de pantalla?”. Si la respuesta es afirmativa por parte del usuario, agregar al <body> la clase “fondo”.
const change = confirm("¿Desea colocar un fondo de pantalla?")
if (change) {
    document.body.classList.add("fondo")
};
// A todos los párrafos que fueron capturados, asignar a los pares la clase: “descatadoPar”.

let parrafos =  document.querySelectorAll('p');
parrafos.forEach((parrafo, index) => {
    if ((index + 1) % 2 === 0) {
        parrafo.classList.add("destacadoPar")
    }else{
        parrafo.classList.add("destacadoImpar")
    }
})



