const valorAtualTxt = window.document.getElementById('valor-atual');
const valorAnteriorTxt = window.document.getElementById('valor-anterior');
const botoes = window.document.querySelectorAll('button')

import { Calculadora } from './Calculadora.js';


//Instanciando a classe
const calculadora = new Calculadora(valorAnteriorTxt,valorAtualTxt);


botoes.forEach(botao => {
    //Event Listener retorna um pointer Event onde eu posso 
    //Acessar o alvo que foi clicado
    botao.addEventListener('click',(b) => {
        let valor = b.target.innerText;

        if(Number(valor) >= 0 || valor === "."){
            calculadora.addDigitos(valor);
        }else{
            calculadora.fazerOperacao(valor);
        }
    })
});



