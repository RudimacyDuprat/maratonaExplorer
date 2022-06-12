
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "TEM CERTEZA!",
    "NÃO TENHO TANTA CERTEZA",
    "É DECIDIDAMENTE ASSIM",
    "NÃO CONTE COM ISSO",
    "SEM DÚVIDAS.",
    "PERGUNTE NOVAMENTE MAIS TARDE",
    "SIM,DEFINITIVAMENTE",
    "MINHA RESPOSTA É NÃO",
    "VOCÊ PODE CONTAR COM ISSO!",
    "MELHO NÃO TE DIZER AGORA",
    "A MEU, VER SIM!",
    "MINHAS FONTES DIZEM NÃO",
    "PROVAVELMENTE",
    "NÃO É POSSIVEL PREVER AGORA",
    "PERSPECTIVA BOA",
    "AS PERSPECTIVAS NÃO SÃO TÃO BOAS ASSIM",
    "SIM",
    "COMCENTR-SE E PERGUNTE NOVAMENTE",
    "SINAIS APONTAM QUE SIM"
]





function fazerPergunta() {
    
    if(inputPergunta.value == ""){
        alert("Digite sua Pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)
    const pergunta = "<div>" + inputPergunta.value + "</div>"


const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random()* totalRespostas)



elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
}
elementoResposta.style.opacity = 1;



