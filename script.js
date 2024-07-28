// Lista de produtos
let products = [
    { id: 1, name: 'Camiseta Branca', price: 29.99, image: 'img/camisa branca.jpeg' },
    { id: 2, name: 'Calça Jeans', price: 79.99, image: 'img/calça jeans png' },
    { id: 3, name: 'Tênis Esportivo', price: 99.99, image: 'img/tenis.jpeg' },
    { id: 4, name: 'Mochila Preta', price: 49.99, image: 'img/mochila.jpg' },
    { id: 5, name: 'Bermuda', price: 89.99, image: 'img/bermuda.webp' },
    { id: 6, name: 'Camisa social', price: 39.99, image: 'img/camisa social.webp' }
  ];
  
  // Função para exibir os produtos na página inicial
  function displayProducts() {
    const productList = document.getElementById('product-list');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">R$ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Função para adicionar produto ao carrinho
  function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
  
    // Recupera o carrinho do localStorage ou inicializa um array vazio se não existir
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(selectedProduct);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    alert(`Produto ${selectedProduct.name} adicionado ao carrinho!`);
  }
  
  // Função para remover produto do carrinho
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Encontra o índice do produto no carrinho
    const index = cart.findIndex(item => item.id === productId);
  
    if (index !== -1) {
      // Remove o produto do carrinho
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Produto removido do carrinho!');
      // Atualiza a exibição dos itens no carrinho
      displayCartItems();
    } else {
      alert('Este produto não está no carrinho!');
    }
  }
  
  // Função para calcular o total do carrinho
  function calculateTotal() {
    let total = 0;
    // Recupera os produtos do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(item => {
      total += item.price;
    });
  
    return total.toFixed(2);
  }
  
  // Função para exibir os itens do carrinho
  function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpa os itens anteriores
  
    // Recupera os produtos do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('product');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p class="price">R$ ${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${item.id})">Remover do Carrinho</button>
      `;
      cartItems.appendChild(itemElement);
    });
  
    // Exibe o total do carrinho
    const totalElement = document.getElementById('totalAmount');
    totalElement.textContent = `R$ ${calculateTotal()}`;
  }
  
  // Função para finalizar a compra
  function finalizePurchase() {
    // Redireciona para a página de confirmação
    window.location.href = './confirmacao.html';
  }
  
  // Função para exibir os itens do pedido na página de confirmação
  function displayOrderedItems() {
    const orderedItems = document.getElementById('ordered-items');
    const orderedTotal = document.getElementById('orderedTotal');
  
    // Recupera os produtos do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('product');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="product-image">
        <div class="product-details">
          <h2 class="product-name">${item.name}</h2>
          <p class="product-price">R$ ${item.price.toFixed(2)}</p>
        </div>
      `;
      orderedItems.appendChild(itemElement);
    });
  
    // Exibe o total do pedido
    orderedTotal.textContent = `R$ ${calculateTotal()}`;
  }
  
  // Chama a função para exibir os produtos ao carregar a página inicial
  window.onload = displayProducts;
  