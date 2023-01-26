"use strict";
//=====================================================================
// Counter
const inputItem = document.querySelector('.search__input');
const inputItemLimit = inputItem.getAttribute('maxlength');
const inputCounter = document.querySelector('.search__counter span');
inputCounter.innerHTML = inputItemLimit;

inputItem.addEventListener("keyup", inputSetCounter);
inputItem.addEventListener("keydown", function (event) {
	if (event.repeat) inputSetCounter();
});

function inputSetCounter() {
	const inputCounterResult = inputItemLimit - inputItem.value.length;
	inputCounter.innerHTML = inputCounterResult;
}
// =========================================================================
const searchItem = document.querySelector('.body__form');

document.addEventListener("click", search);

function search(event) {
	if (event.target.closest('.search__button')) {
		searchItem.classList.toggle('_active');
	}
	if (!event.target.closest('.body__form')) {
		searchItem.classList.remove('_active');
	}
}
//==========================================================================
document.addEventListener('keyup', function (event) {
	if (event.code === 'Escape') {
		searchItem.classList.remove('_active');
	}
});
