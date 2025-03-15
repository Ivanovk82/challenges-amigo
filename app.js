// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigo = [];

function agregarAmigo(){
      
    let input = document.getElementById("amigo");
    let nuevo = input.value;
    
    
    if(nuevo ==""){
        alert("debes ingresar un nombre valido ");
        return;
    }
    arrayAmigo.push(nuevo);
    input.value= "";
    console.log (arrayAmigo);
    crearLista();
    
}
function crearLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i=0 ; i<arrayAmigo.length ; i++){
        let muestra = document.createElement("li");
        muestra.textContent = arrayAmigo[i];
        document.getElementById("listaAmigos").appendChild(muestra);
    }
}

    function sortearAmigo(){
    if(arrayAmigo.length < 1){
        alert("Requiere al menos un amigo para sortear");
        return;
    }
        let sorteado = arrayAmigo[Math.floor(Math.random() * arrayAmigo.length)];
        let ganador = document.getElementById("resultado");
        ganador.innerHTML= `El amigo secreto es ${sorteado}`;
        
    }
    function borrarLista(){
        let limpiarlista = document.getElementById("listaAmigos");
        let ganador = document.getElementById("resultado");
        limpiarlista.innerHTML = "";
        ganador.innerHTML="";
    }





