class Errocometido extends Error {
    constructor(mensage){
        super(mensage);
        this.name = "Erro: está faltando adicionar os atributos";
    }
}

class Produto{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrarProduto() {
        try{
          return this.atributos()
        } catch(erro){
          console;console.log(erro.message)
        }
      }

      atributos() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
          return `
          <div class="produto">
              <h2>${this.nome}</h2>
              <p>${this.descricao}</p>
              <div class="preco">R$${this.preco},00</div>
              <div class="cadastro">Cadastrado em: ${this.dataCadastro}</div>
          </div>
              `
           } else {
            throw new Errocometido("Está faltando inserir alguma das informações necessárias para elaborar o produto :(")
          }
      }
    
    
}
class destaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco)
        this.imagem = imagem
    }

    mostrarDestaque() {
        try{
          return this.atributos()
        } catch(erro){
          console;console.log(erro.message)
        }
      }

      atributos() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "" && this.imagem != "") {
          return `
          <div class="pDestaque">
            <img class="imgDestaque" src="${this.imagem}"></img>
            <h2>${this.nome}</h2>
            <p>${this.descricao}</p>
            <div class="precoDestaque">R$${this.preco},00</div>
            <div class="cadastroDestaque">Cadastrado em: ${this.dataCadastro}</div>
          </div>
              `
           } else {
            throw new Errocometido("Está faltando inserir alguma das informações necessárias para elaborar o produto :(")
          }
      }

}

const produto1 = new Produto("TApete de Vaquinha", "25/12/2022", "Nosso tapete de vaquinha é o destaque perfeito para qualquer cômodo que ofereça mais do que apenas um aperto sob os pés", 38)
const id1 = document.getElementById("produto1")
id1.insertAdjacentHTML('afterbegin',produto1.mostrarProduto())

const produto2 = new Produto("Luminária de sapinho", "02/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 22)
const id2 = document.getElementById("produto2")
id2.insertAdjacentHTML('afterbegin',produto2.mostrarProduto())

const produto3 = new Produto("Vaso de planta de vaquinha", "05/11/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 18)
const id3 = document.getElementById("produto3")
id3.insertAdjacentHTML('afterbegin',produto3.mostrarProduto())

const imgDestaque = new destaque("Luminária de Vaquinha", "20/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 20, "https://cdn.shopify.com/s/files/1/0527/2659/5743/products/ShopzokiCowLightOff_1800x1800.jpg?v=1669311428");
const id4 = document.getElementById("produtoDestaque")
id4.insertAdjacentHTML('afterbegin',imgDestaque.mostrarDestaque())