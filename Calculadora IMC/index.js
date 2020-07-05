
function Calcular() {
    const altura = Number(document.querySelector("#altura").value);
    const peso = Number(document.querySelector("#peso").value); 



    let imc = (peso/(altura**2));

    if(imc < 20){
        mensagem.innerHTML= `${nome.value}, você esta abaixo do peso`;
    } else if (imc >= 35){
        mensagem.innerHTML = `${nome.value}, você esta com obesidade mórbida`;
    }
    else if (imc >= 30 && imc <= 34){
        mensagem.innerHTML = `${nome.value}, você esta com obesidade`;
    }
    else if (imc >= 25 && imc <= 29){
        mensagem.innerHTML = `${nome.value}, você esta a cima do peso`;
    } else {
        mensagem.innerHTML = `${nome.value}, você esta com peso normal`;
    }
}

