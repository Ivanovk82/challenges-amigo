// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let lista_de_amigos = [];

function agregarAmigo(){
      
    let input = document.getElementById("amigo");
    let nuevo = input.value;
    
    
    if(nuevo ==""){
        alert("debes ingresar un nombre valido ");
        return;
    }
    lista_de_amigos.push(nuevo);
    input.value= "";
    console.log (lista_de_amigos);
    crearLista();
    
}
function crearLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i=0 ; i<lista_de_amigos.length ; i++){
        let muestra = document.createElement("li");
        muestra.textContent = lista_de_amigos[i];
        document.getElementById("listaAmigos").appendChild(muestra);
    }
}

    function sortearAmigo(){
    if(lista_de_amigos.length < 1){
        alert("Requiere al menos un amigo para sortear");
        return;
    }
        let sorteado = lista_de_amigos[Math.floor(Math.random() * lista_de_amigos.length)];
        let ganador = document.getElementById("resultado");
        ganador.innerHTML= `El amigo secreto es ${sorteado}`;
        
    }
    function borrarLista(){
        let limpiarlista = document.getElementById("listaAmigos");
        let ganador = document.getElementById("resultado");
        limpiarlista.innerHTML = "";
        ganador.innerHTML="";
    }

