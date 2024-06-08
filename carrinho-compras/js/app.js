let totalGeral;
limpar();
function adicionar(){
    //recuperar valores do produto
    let Produto = document.getElementById('produto').value;
    let nomeProduto = Produto.split('-')[0];
    let valorUnitario = Produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // calcular o valor unitario e multiplicar pela quantidade do produto
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    // adicionar ao carrinho
    
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section> `
        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById('quantidade').value = 0;
}


// limpar o carrinho e seu valor total
function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ ';

}