const key = "e3b225b73980fb70802a00b05b5e4f0f"

function dadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosNaTela(dados)
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    if (cidade !== "") {
        buscarCidade(cidade)
    }
}

window.onload = function() {
    buscarCidade("São Paulo");

    const inputCidade = document.querySelector(".input-cidade");

    
    inputCidade.addEventListener("keypress", function(event) {
       
        if (event.key === "Enter") {
            cliqueNoBotao(); 
        }
    });
};
