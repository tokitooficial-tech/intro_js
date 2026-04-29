// eventos são funcionalidades = função
// que ficam execuntando para ouvir comportamentos 
// na página ou no navegador 
// document para conteundo do html
// window para a janela do navegador

window.addEventListener("resize", olhar_largura)

const botao = document.getElementById("botao-ok")
const paragrafo = document.getElementById("resultado")
console.log(paragrafo)

botao.addEventListener("click", excibir_mensagem)


// palavra chave + nome + () + { conteúdo de excecução }
console.log(botao)
function olhar_largura() {
    if(innerHeight < 200){
        botao.classList.add("inativo")
        console.log(botao)

    }else{
        botao.classList.remove("inativo")
        botao.classList.add("ativo")
        console.log(botao)
    }

}

function excibir_mensagem(){
    paragrafo.textContent = "Olá, mundo!"
    //    background-color    != backgroundColor
    paragrafo.style.backgroundColor = "#eeff00"
    paragrafo.style.fontSize = "2rem"
    console.log(paragrafo)

}
