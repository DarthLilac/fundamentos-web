//Escopo global

function hello(){
    //escopo local
    alert("Hello World")
}

let nome = document.getElementById("nome");

function enviar(){
    let novoNome = nome.value
    alert("Olá " + nome.value +"!");
}