class Produto{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProduto(){
        return `
            <div class="produto">
                <h2>${this.nome}</h2>
                <p>${this.descricao}</p>
                <p>${this.preco}</p>
            </div>
                `
    }
    
}
class destaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco)
        this.imagem = imagem
    }
    mostrarDestaque(){
        return `
                <div class="pDestaque">
                <img class="imgDestaque"src="${this.imagem}"></img>
                <h2>${this.nome}</h2>
                <p>${this.descricao}</p>
                </div>
               `
    }

}

const produto1 = new Produto("Tapete de Vaquinha", "25/12/2022", "Nosso tapete de vaquinha é o destaque perfeito para qualquer cômodo que ofereça mais do que apenas um aperto sob os pés", 38)
const id = document.getElementById("produtos")
id.insertAdjacentHTML('afterbegin',produto1.mostrarProduto())

const produto2 = new Produto("Luminária de sapinho", "02/12/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 22)
id.insertAdjacentHTML('afterbegin',produto2.mostrarProduto())

const produto3 = new Produto("Vaso de planta de vaquinha", "05/11/2022", "Caro Ebbo, você ilumina nosso dia (e noite) com sua personalidade brilhante.", 18)
id.insertAdjacentHTML('afterbegin',produto3.mostrarProduto())

const imgDestaque = new destaque("Faça sua casa um lugar Feliz com nossos produtos", "20/12/2022", "De pelúcias a luzes noturnas e tudo mais, você encontrará uma linda decoração em forma de amigo projetada para fazer você sorrir.", 20, "https://cdn.shopify.com/s/files/1/0527/2659/5743/files/new_website_banner_web_3-04_2.jpg?v=1682709391");
id.insertAdjacentHTML('afterbegin',imgDestaque.mostrarDestaque())