let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){   
let campo = document.querySelector(tag);
campo.innerHTML = texto;

}
function exibirMensagemInicial(){
   exibirTextoNaTela('h1', 'Jogo do numero Secreto');
exibirTextoNaTela('p', ' Escolha um número entre 1 e 10'); 
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
            exibirTextoNaTela('h1', 'acertou'); 
            let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas =`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNaTela('p', mensagemTentativas);  
            document.getElementById('reiniciar').removeAttribute('disabled'); 
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto é menor');
        
        }else{
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
   
  
}

function GerarNumeroAleatorio(){ 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

