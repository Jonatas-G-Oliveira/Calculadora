export class Calculadora{
    
    constructor(valorAnteriorTxt,valorAtualTxt,){
        this.valorAtualTxt =  valorAtualTxt;
        this.valorAnteriorTxt = valorAnteriorTxt;
        this.operacao_atual = "";
    }


    addDigitos(digito){ 
        if(digito === "." && this.valorAtualTxt.innerText.includes(".")){
            return;
        }
        this.operacao_atual = digito;
        this.atualizarTela();
    }

    fazerOperacao(simbolo){ 
        if(this.valorAtualTxt.innerText === "" && simbolo !== "C"){ //O C pode apagar mesmo que não tenha n[umero em baixo]
            if(this.valorAnteriorTxt.innerText !== ""){
                this.trocarOperacao(simbolo);
            }
            return;    //Eu preciso ter algum número na tela para começar as operações
        }
        let resultado;
        const anterior = Number(this.valorAnteriorTxt.innerText.split(" ")[0]);//To retirando o operador
        
        const atual = Number(this.valorAtualTxt.innerText);

        switch(simbolo){
            case "+":
                resultado = anterior + atual;
                this.atualizarTela(resultado,simbolo,atual,anterior);
                break;

            case "-":
                resultado = anterior - atual;
                this.atualizarTela(resultado,simbolo,atual,anterior);
                break;

            case "*":
                resultado = anterior * atual;
                this.atualizarTela(resultado,simbolo,atual,anterior);
                break;

            case "/":
                resultado = anterior / atual;
                this.atualizarTela(resultado,simbolo,atual,anterior);
                break;

            case "CE":
                this.valorAtualTxt.innerText = "";
                break;
            
            case "C":
                this.valorAnteriorTxt.innerText = "";
                this.valorAtualTxt.innerText = "";
                break;

            case "DEL":
                this.valorAtualTxt.innerText = valorAtualTxt.innerText.slice(0,-1);
                break;

            case "=":
                let op = this.valorAnteriorTxt.innerText.split(" ")[1];
                this.fazerOperacao(op);
                break;

            default:
                return;
        };
    };

    trocarOperacao(simbolo){
        let operacoes_matematicas = ['*','/','-','+'];
        if(operacoes_matematicas.includes(simbolo)){
            valorAnteriorTxt.innerText = valorAnteriorTxt.innerText.slice(0,-1) + simbolo;
        }
        return;
    }
    

    atualizarTela(resultado = null, operacao = null,valorAtualTxt = null,valorAnteriorTxt = null){
        console.log(valorAnteriorTxt)
        if(resultado == null){
            this.valorAtualTxt.innerText += this.operacao_atual;
        }else{
            
            if(valorAnteriorTxt === 0 ){//O anterior não tinha nada
                this.valorAnteriorTxt.innerText = `${valorAtualTxt} ${operacao}`;
                this.valorAtualTxt.innerText = "";
            }else{
                this.valorAnteriorTxt.innerText = `${resultado} ${operacao}`;
                this.valorAtualTxt.innerText = "";
            }
        }
    }
}


//module.exports.Calculadora = Calculadora;