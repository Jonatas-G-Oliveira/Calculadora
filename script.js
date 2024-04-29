

const numeroAnteriorTxt = window.document.getElementById("operacao-anterior")
const numeroAtualTxt = window.document.getElementById("operacao-atual")
const botoes = window.document.querySelectorAll("#container-botoes button")


//Dar uma revisada nas classes de javascript
class Calculadora{
    constructor(numeroAtualTxt,numeroAnteriorTxt){
        this.numeroAtualTxt = numeroAtualTxt
        this.numeroAnteriorTxt = numeroAnteriorTxt
        this.operacao = ""
    }

    atualizarTela(elemento){
        this.numeroAtualTxt.innerText += numero
    }

}



const objeto = new Calculadora(numeroAtualTxt,numeroAnteriorTxt)

//Pegar os botoes e seus valores quando clicados
botoes.forEach((elemento) => {
    elemento.addEventListener("click",(item_clicado) => {
        const valor = item_clicado.target.innerText
        if(+valor >= 0 || valor === "."){
            console.log("valor");
            objeto.atualizarTela(valor)
        }else{
            objeto.atualizarTela(valor)
        }
    })
})






/*Meus estudos 
Pegar algo com o querySelector vai retornar um array
Pegar algo com outro métod será necessário converter para um array

1 - Printando cada elemento do vetor
botoes2.forEach((elemento) => console.log(elemento))

2 - Quando eu clico com o EventListener no elemento botão,o que é retornado é um pointerEvent
Com esse pointer a gente pode pegar diversos atributos do elemento que sofreu o evento.
Antes disso eu preciso acessar o metodo target do pointerEvent
*/
