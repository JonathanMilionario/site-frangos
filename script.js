function adicionarAoCarrinho(produto, preco) {
  try {
    // Validação dos parâmetros
    if (typeof produto !== "string" || produto.trim() === "") {
      alert("Nome do produto inválido.");
      return;
    }

    if (typeof preco !== "number" || preco <= 0) {
      alert("Preço inválido.");
      return;
    }

    // Recupera carrinho do localStorage ou inicia vazio
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verifica se o produto já existe no carrinho
    const itemExistente = carrinho.find((item) => item.nome === produto);

    if (itemExistente) {
      itemExistente.quantidade = (itemExistente.quantidade || 1) + 1;
    } else {
      carrinho.push({ nome: produto, preco: preco, quantidade: 1 });
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Alerta de sucesso
    alert(`${produto} foi adicionado ao carrinho!`);
  } catch (error) {
    console.error("Erro ao adicionar ao carrinho:", error);
    alert("Ocorreu um erro ao adicionar o produto ao carrinho.");
  }
}

// Função para alternar entre modo claro e escuro

const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Escuro";
});
