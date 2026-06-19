let produtos = [];

let carrinho = [];


fetch("produtos.json")
.then(res => res.json())
.then(dados => {

    produtos = dados;

    mostrarProdutos();

});


function mostrarProdutos(){

    let div = document.getElementById("produtos");

    div.innerHTML = "";


    produtos.forEach(produto => {


        div.innerHTML += `

        <div class="produto">

        <img src="${produto.imagem}">

        <h3>${produto.nome}</h3>

        <p>R$ ${produto.preco}</p>


        <button onclick="adicionar(${produto.id})">
        Comprar
        </button>


        </div>

        `;


    });

}



function adicionar(id){


let produto = produtos.find(p => p.id == id);


carrinho.push(produto);


mostrarCarrinho();


}


function mostrarCarrinho(){


let div = document.getElementById("carrinho");


div.innerHTML="";


carrinho.forEach(item=>{


div.innerHTML += `

<p>
${item.nome} - R$ ${item.preco}
</p>

`;


});


localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);


}