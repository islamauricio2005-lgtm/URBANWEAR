function adicionarCarrinho(nome, preco) {
  const produto = {
    nome: nome,
    preco: preco,
    quantidade: 1
  };

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const produtoExistente = carrinho.find(item => item.nome === nome);

  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push(produto);
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  window.location.href = "carrinho.html";
}