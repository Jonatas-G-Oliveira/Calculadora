/*Selecionando os elementos através do dom */
const operacaoAnteriorTxt = window.document.querySelector("#operacao-anterior")
const operacaoAtualTxt = window.document.querySelector("#operacao-atual")
const botoes = window.document.querySelectorAll("#container-botoes button")

/*Criando Classe */
class Calculadora{
    /*Instancioando as primeiras Operações*/ 
    constructor(operacaoAnteriorTxt, operacaoAtualTxt){
        this.operacaoAnteriorTxt = operacaoAnteriorTxt /*Impressos na tela*/ 
        this.operacaoAtualTxt = operacaoAtualTxt /*IMpressos na tela*/
        this.operacaoAtual = "" /*Usúario esta digitando*/
    }

    //Adicionando digitos ao visor da tela
    addNumero(numero){
        //Checando se a operação atual já tem um ponto
        if(numero === "." && this.operacaoAtualTxt.innerText.includes(".")){
            return; //Não adiciona um novo ponto
        }
        this.operacaoAtual = numero
        this.atualizarTela()
    }

    // Operaçõe da calculadora
    gerenciadorDeOperacoes(operacao){
        //Pegando valor atual e anterior
        let resultado;
        const anterior = +this.operacaoAnteriorTxt.innerText.split(" ")[0]; /**/
        const atual = +this.operacaoAtualTxt.innerText; /*Const não muda os valores*/

        switch(operacao){
            case "+":
                resultado = anterior + atual
                console.log(atual)
                this.atualizarTela(atual,operacao,atual,anterior)
                break

            case "-":
                break

            case "*":
                break

            case "/":
                break

            case "del":
                break

            case "c":
                break

            default:
                return;
        }
    }



    //Trocando os valores da calculadora
    atualizarTela(resultado = null,operacao = null,atual = null,anterior = null){
        console.log(resultado,operacao,atual,anterior)
        if(resultado === null){
            this.operacaoAtualTxt.innerText += this.operacaoAtual /*Lembrar que é um objeto e eu preciso de innerTxt */
        }else{
            //Checar se o valor é zero
            if(anterior === 0){
                resultado = atual
            }
            //Adcionando o valor de baixo para cima
            this.operacaoAnteriorTxt.innerText = `${resultado}  ${operacao}`
            this.operacaoAtualTxt.innerText = "";
        }
    }
}















/*Main ------------ */

const objeto_calculadora = new Calculadora(operacaoAnteriorTxt,operacaoAtualTxt)

botoes.forEach((elementos) =>{
    elementos.addEventListener("click",(item_clicado) => {
        const valor = item_clicado.target.innerText;
        /*O "+" converter o valor para número */
        if(+valor >= 0 || valor === "."){
            objeto_calculadora.addNumero(valor)
        }else{
            objeto_calculadora.gerenciadorDeOperacoes(valor)
        }
    })
})







/*Pegando cada um dos botões*/ 
/*botoes.forEach((elementos_btn) =>{
    elementos_btn.addEventListener("click",(evento) =>{
        const value = evento.target.innerText;
        console.log(value);
    })
})*/


/*COMENTARIOS */
/*ARROW FUNCTIONS*/
/*Funções anonimas normalmente utilizadas em callBack
document.addEventListener('click',() => console.log('clicked'))

Quando tem mais de uma instrução e preciso utilizar as chaves;
document.addEventListener('click',() => {
     console.log('clicked')
     doStuff()
})

Arrow Function redefinem com o this é tratado dentro da função
*/

/*CallBack 
botao.addEventListener('click',function executaNoclick(){
    console.log('Alo alo w brazil')
})
O javaScript só executa um evento por vez
Tem haver com  ajax
Por exemplo a gente tem uma funcao pega dads,porem a gente só executa quando os dados
cegarem

*/ 