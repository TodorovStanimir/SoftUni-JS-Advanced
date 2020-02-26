function createArticle() {
	let titleElement = document.getElementById('createTitle');
	let contentElement = document.getElementById('createContent');

	if (titleElement.value && contentElement.value) {
		let newArticleElement = document.createElement('article');
		newArticleElement.innerHTML = `<h3>${titleElement.value}</h3><p>${contentElement.value}<p>`
		document.getElementById('articles').appendChild(newArticleElement);
		titleElement.value = '';
		contentElement.value = '';
	}
}