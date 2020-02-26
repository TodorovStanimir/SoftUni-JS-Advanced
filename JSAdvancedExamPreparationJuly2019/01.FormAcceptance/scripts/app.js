function acceptance() {
	const addBtn = document.getElementById('acceptance');

	addBtn.addEventListener('click', function (event) {
		const [companyEl, productEl, quantityEl, scrapeEl] = document.querySelectorAll('input[type=text]');
		const wareHouseEl = document.getElementById('warehouse');
		const [companyName, productName, productQuantity, scrape] = [String(companyEl.value), String(productEl.value), Number(quantityEl.value), Number(scrapeEl.value)];
		if (companyName !== '' && productName !== '' && productQuantity > 0 && scrape >= 0 && productQuantity > scrape) {
			const text = `[${companyName}] ${productName} - ${productQuantity - scrape} pieces`;
			wareHouseEl.appendChild(makeDivEl(text));
			clearEl([companyEl, productEl, quantityEl, scrapeEl]);
		} else {
			clearEl([companyEl, productEl, quantityEl, scrapeEl]);
		}

		function makeDivEl(text) {
			const divEl = document.createElement('div');
			const pEl = document.createElement('p');
			const outBtn = document.createElement('button');

			pEl.textContent = text;
			outBtn.textContent = 'Out of stock';
			outBtn.addEventListener('click', outOfStock)

			divEl.appendChild(pEl);
			divEl.appendChild(outBtn);
			return divEl;
		}

		function outOfStock(event) {
			event.target.parentElement.parentElement.removeChild(event.target.parentElement)
		}

		function clearEl(arr) {
			arr.map(el => el.value = '');
		}
	});
}