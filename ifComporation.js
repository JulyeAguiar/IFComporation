class Produto{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProduto(){
        return `
                <h2>${this.nome}</h2
                
               `
    }
}
class destaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco)
        this.imagem = imagem
    }
}
const produtos = new Produto("Luminária de sapinho", "20/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 20, "https://cdn.shopify.com/s/files/1/0527/2659/5743/products/IMG_5617_1800x1800.jpg?v=1612041072");
const id = document.getElementById("produtos")
id.insertAdjacentHTML('afterbegin',produtos.mostrarProduto())

