const form = document.querySelector('form');
const action = document.querySelector('#search__area');
const btn = document.querySelector('#search__btn');
const undonecol = document.querySelector('#undone');
const processcol = document.querySelector('#process');
const donecol = document.querySelector('#done');

const keys = Object.keys(localStorage);
if (keys.length > 0) {
	for (let i = 0; i < keys.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
		if (keys[i][0] === '1') createNote(undonecol, value, 'to process=>', 'red');
		else if (keys[i][0] === '2') createNote(processcol, value, 'to done=>', 'yellow');
		else if (keys[i][0] === '3') createNote(donecol, value, 'Done!', 'green');
	}
}

form.addEventListener('submit', () => {
	const randomkey = `1 col key ${random(0, 1000)}`;
	const key = localStorage.getItem(randomkey);
	if (!key) {
		if (action.value.trim() === '') alert('Вы не ввели действие!');
		else {
			localStorage.setItem(randomkey, action.value);
			createNote(undonecol, action.value, 'to process=>', 'red');
		}
	}
});

const resetBtns = document.querySelectorAll('#card__reset');
for (const resetBtn of resetBtns) {
	resetBtn.addEventListener('click', (e) => {
		const text = e.target.closest('.card').querySelector('.card__title').textContent;
		for (const key in localStorage) {
			if (text === localStorage[key]) {
				localStorage.removeItem(key);
				break;
			}
		}
		e.target.closest('.card').remove();
		location.reload();
	});
}

const nextBtns = document.querySelectorAll('.card__next');
for (const nextBtn of nextBtns) {
	nextBtn.addEventListener('click', (e) => {
		for (const key in localStorage) {
			const card = e.target.closest('.card')
			const text = card.querySelector('.card__title').textContent;
			const buttonText = card.querySelector('.card__next').textContent;
			if (text === localStorage[key]) {
				if (key[0] === '3' && buttonText === 'Done!') {
					localStorage.removeItem(key)
					card.remove()
					location.reload();
					break;
				}
				else if (key[0] === '2' && buttonText === 'to done=>') {
					localStorage.setItem(`3 col key ${random(0, 1000)}`, localStorage[key]);
					localStorage.removeItem(key);
					done.append(card);
					location.reload();
					break;
				}
				else if (key[0] === '1' && buttonText === 'to process=>') {
					localStorage.setItem(`2 col key ${random(0, 1000)}`, localStorage[key]);
					localStorage.removeItem(key);
					process.append(card);
					location.reload();
					break;
				}
			}
		}
	});
}