var imcOutput = window.document.getElementsByClassName("imc")[0];

var ind = window.document.getElementsByClassName("title")[0];

var massInput = window.document.getElementsByClassName("input")[0];

var highInput = window.document.getElementsByClassName("input")[1];

var button = window.document.getElementsByClassName("but")[0];

button.addEventListener("click", calcIMC);

function calcIMC() {
    mass = Number(massInput.value);
    high = Number(highInput.value);

    imc = mass / (high ** 2);
    imc = imc.toFixed(1);

    imcOutput.innerText = imc;

    if (imc < 16) {
        //Baixo Peso Severo
        ind.innerText = "Baixo Peso Severo"
    } else if (imc >= 16 && imc < 17) {
        //Baixo Peso Leve
        ind.innerText = "Baixo Peso"
    } else if (imc >= 17 && imc < 18.5) {
        //Baixo Peso
        ind.innerText = "Baixo Peso Leve"
    } else if (imc >= 18.5 && imc < 25) {
        //ideal
        ind.innerText = "Peso Ideal"
    } else if (imc >= 25 && imc < 30) {
        //sobrepeso
        ind.innerText = "Sobrepeso"
    } else if (imc >= 30 && imc < 35) {
        //obesidade
        ind.innerText = "Obesidade"
    } else if (imc >= 35 && imc < 40) {
        //severa
        ind.innerText = "Obesidade Severa"
    } else if (imc >= 40) {
        //mórbida
        ind.innerText = "Obesidade Mórbida"
    }
}