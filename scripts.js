document.addEventListener('DOMContentLoaded', () => {
    fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(data => {
            const productList = document.getElementById('lista-produtos');
            const maxProducts = 5;
            const productsToShow = data.products.slice(0, maxProducts); 
            
            productsToShow.forEach(product => {
                const li = document.createElement('li');
                li.textContent = product.title; 
                
                // Cria um contêiner para os detalhes do produto
                const productDetails = document.createElement('div');
                productDetails.classList.add('detalhes-produto');
                productDetails.style.display = 'none'; 
                
               
                productDetails.innerHTML = `
                    <h2>${product.title}</h2>
                    <p><strong>Marca:</strong> ${product.brand}</p>
                    <p><strong>Categoria:</strong> ${product.category}</p>
                    <p><strong>Descrição:</strong> ${product.description}</p>
                    <p><strong>Preço:</strong> $${product.price}</p>
                    <img src="${product.thumbnail}" alt="${product.title}">
                `;
                
                
                li.addEventListener('click', () => {
                    productDetails.style.display = productDetails.style.display === 'none' ? 'block' : 'none';
                });
                
                productList.appendChild(li);
                productList.appendChild(productDetails); 
            });
        })
        .catch(error => console.error('Erro ao buscar os produtos:', error));
});
