const createNote = (parent, text, btntext, color) => {
	const div = document.createElement('div');
	div.classList.add('card');
	div.style.background = color;
	const paragraph = document.createElement('p');
	paragraph.classList.add('card__title');
	paragraph.innerText = text
	const btns = document.createElement('div');
	btns.classList.add('card__btns');
	const resetBtn = document.createElement('button');
	resetBtn.setAttribute('id', 'card__reset');
	resetBtn.innerText = 'X';
	const nextBtn = document.createElement('button');
	nextBtn.classList.add('card__next');
	nextBtn.innerText = btntext;
	btns.append(resetBtn, nextBtn);
	div.append(paragraph, btns);
	parent.append(div);
}

const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}