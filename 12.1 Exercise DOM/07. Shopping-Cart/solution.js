function solve() {
   const addButtons = Array.from(document.getElementsByClassName('add-product'));
   const checkoutButton = document.querySelector('.checkout');

   const products = {
      totalPrice: 0,
      boughtProd: []
   }

   const getProductInfo = (product) => {
      const nameProduct = product.querySelector('.product-title').textContent;
      const priceProduct = Number(product.querySelector('.product-line-price').textContent);
      return [nameProduct, priceProduct];
   }

   const addProductToShoppingCart = ([nameProduct, priceProduct]) => {
      products.totalPrice += priceProduct;
      products.boughtProd.push(nameProduct);
      addInfoToTextArea(`Added ${nameProduct} for ${priceProduct.toFixed(2)} to the cart.\n`);
   }

   const addInfoToTextArea = (info) => { document.querySelector('textarea').value += info };

   const disableAllButtons = () => { [...addButtons, checkoutButton].map(el => el.disabled = true) }

   const addProduct = (ev) => { addProductToShoppingCart((getProductInfo(ev.target.parentNode.parentNode))) };

   const finishBuyingProcess = () => {
      addInfoToTextArea(`You bought ${[...new Set(products.boughtProd)].join(', ')} for ${products.totalPrice.toFixed(2)}.`);
      disableAllButtons();
   }

   addButtons.map(el => el.addEventListener('click', addProduct));
   checkoutButton.addEventListener('click', finishBuyingProcess);
}