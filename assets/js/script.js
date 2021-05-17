const Qcaracteres = document.querySelector('#Qcaracteres');
Qcaracteres.innerHTML = 0;

function captura() {
    
    var condicao = document.querySelector('#efeito').value;
    var original = document.querySelector('#original').value;

    if(condicao == "uppercase"){
        document.querySelector('#modificado').innerHTML = original.toUpperCase();
    }
    else if(condicao == "lowercase"){
        document.querySelector('#modificado').innerHTML = original.toLowerCase();
    }
    Qcaracteres.innerHTML = original.length;
}

