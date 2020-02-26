let deletedTitleArticle = '';
let deletedTextArticle = '';
function createArticle() {
	let titleArticle = document.getElementById('createTitle').value;
	let textArticle = document.getElementById('createContent').value;
	let articlesList = document.getElementById('articles');
	if (titleArticle !== '' && textArticle !== '') {
		let article = document.createElement('article');
		let h3 = document.createElement('h3');
		h3.textContent = titleArticle;
		let p = document.createElement('p');
		p.textContent = textArticle;
		article.appendChild(h3);
		article.appendChild(p);
		articlesList.appendChild(article);
	}
	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}
function deleteArticle() {
	let titleArticle = document.getElementById('createTitle').value;
	let textArticle = document.getElementById('createContent').value;
	if (titleArticle !== '' && textArticle !== '' && !titleArticle.startsWith('You')) {
		deletedTitleArticle = `You delete Article with Title${titleArticle}`;
		deletedTextArticle = `You delete Artice with Text ${textArticle}`
		document.getElementById('createTitle').value = deletedTitleArticle;
		document.getElementById('createContent').value = deletedTextArticle;
	} else if (deletedTitleArticle.startsWith('You') && deletedTextArticle.startsWith('You')) {
		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';
	}

}
