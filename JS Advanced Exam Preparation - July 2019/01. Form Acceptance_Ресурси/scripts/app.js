function acceptance() {
	document.getElementById('acceptance').addEventListener('click', addProduct)

	function addProduct() {
		let [companyEl, productEl, quantityEl, scrapeEl] = document.querySelectorAll('input[type=text]');

		if (valueElementisNotEmptyString(companyEl) && valueElementisNotEmptyString(productEl)
			&& valueElementsIsNumber(quantityEl) && valueElementsIsNumber(scrapeEl)
			&& quantityIsBiggerThenScrap(quantityEl, scrapeEl)) {
			const companyName = companyEl.value;
			const productName = productEl.value;
			const productQuantity = Number(quantityEl.value);
			const scrapeQuantity = Number(scrapeEl.value);

			let warehouseEl = document.getElementById('warehouse');
			let newDivEl = document.createElement('div');
			let newPEl = document.createElement('p');
			newPEl.textContent = `[${companyName}] ${productName} - ${productQuantity - scrapeQuantity} pieces`;
			let butOutOfStock = document.createElement('button');
			butOutOfStock.textContent = 'Out of stock';
			butOutOfStock.setAttribute('type', 'button')
			butOutOfStock.addEventListener('click', removeProduct);
			newDivEl.appendChild(newPEl);
			newDivEl.appendChild(butOutOfStock);
			warehouseEl.appendChild(newDivEl);
		}
		//test 9
		cleanValue(companyEl, productEl, quantityEl, scrapeEl)
	}


	function removeProduct(e) {
		//test 4, 8 and 10
		e.target.parentElement.remove()
	}

	function cleanValue(companyEl, productEl, quantityEl, scrapeEl) {
		companyEl.value = '';
		productEl.value = '';
		quantityEl.value = '';
		scrapeEl.value = '';
	}

	function valueElementisNotEmptyString(element) {
		return element.value !== '' ? true : false;
	}

	function valueElementsIsNumber(element) {
		return element.value.match(/^[\d]+[.]*[\d]*$/gi) ? true : false;
	}

	function quantityIsBiggerThenScrap(quantityEl, scrapeEl) {
		return Number(quantityEl.value) > Number(scrapeEl.value) ? true : false;
	}
}