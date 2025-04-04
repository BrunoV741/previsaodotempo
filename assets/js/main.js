// minha chave da api
const key = "e0283766cee7e7e70be7e75409ae8042";

// função para pegar o valor do input cidade
function pegaCidade() {
    // pega o valor do input no html e joga na variavel cidade
    let cidade = document.querySelector(".input-cidade").value
    //
    console.log(cidade)
    dadosApi(cidade)
}


//função para pegar dados da api
async function dadosApi(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json());
    console.log(dados)
    dadosTela(dados)
    
}

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".previsao").innerHTML = dados.weather[0].description.toUpperCase()
    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
}