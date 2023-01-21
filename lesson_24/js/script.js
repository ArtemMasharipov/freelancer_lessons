"use strict";
// ======================================================================
// ======================================================================
// Відео 2. Массивы в JAVASCRIPT. Методы массивов. Редактирование, поиск, сортировка. Уроки JavaScript с нуля.
// ======================================================================
// ======================================================================
// Задача №2.
// Создайте массив users с элементами "Ваня" и "Иштван".
// Добавьте "Оля" в конец.
let users = ["Ваня", "Иштван",];
users.push('Оля');
console.log(users);
// Замените значение в "Иштван" на "Петя".
// Ваш код для поиска значения должен
// работать для массивов с любой длиной.
users.splice(1, 1, 'Петя');
console.log(users);
// Удалите первый элемент массива и покажите его.
let removedElement = users.splice(0, 1);
console.log(removedElement);
// Вставьте "Маша" и "Паша" в начало массива.
users.splice(0, 0, 'Маша', 'Паша',);
console.log(users);
// ======================================================================
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
let arr = ['Ваня', 'Иштван', 'Оля',];
let removed = arr.splice(1, 1);
console.log(removed);
// ======================================================================
// Задача №4.
//Сделать из строки массив
let str = 'Ваня,Иштван,Оля';
let array = str.split(',');
console.log(array);
// ======================================================================
// ======================================================================
// Відео 3. JavaScript Document object model (DOM) за час. Изменение HTML CSS. Атрибуты и свойства. Окружение.
// ======================================================================
// ======================================================================
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
/* <div data-say-hi="yes">Привет!</div> */
let getElems = document.querySelector('[data-say-hi]');
console.log(getElems.getAttribute('data-say-hi'));
// ======================================================================
// Задача №2.
// Получить в переменную элемент с текстом Йончи
let text = 'Йончи';
let lowerText = text.toLowerCase();

let textElement = [...document.querySelectorAll('*')].find(tag => tag.textContent.toLowerCase() == lowerText);
console.log(textElement.outerHTML);
// ======================================================================
// Задача №3.
// Получить в переменную коллекцию элементов с классом like
/* <div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div> */
let getCollection = document.getElementsByClassName('like');
console.log(getCollection);
for (let getCollectionItem of getCollection) {
	console.log(getCollectionItem.outerHTML); // покажет все узлы из коллекции
}
// ======================================================================
// Задача №4.
// const list = document.querySelectorAll('ul');
// list.insertAdjacentHTML('beforeend','<li>Текст</li>');
// ======================================================================
// ======================================================================
// Відео 4. JavaScript размеры прокрутка и координаты элементов на странице и окна браузера.
// ======================================================================
// ======================================================================
// Задача №1.
// Узнать ширину полосы прокрутки
let windowWidth = window.innerWidth;
let bodyWidth = document.body.clientWidth;
let scrollWidth = window.innerWidth - document.body.clientWidth;

console.log(windowWidth);
console.log(bodyWidth);
console.log("Ширина полоси прокрутки:", scrollWidth);
// ======================================================================
// Задача №2.
// Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы
function setScroll() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth",
	});
};
setTimeout(setScroll, 1000);
// ======================================================================
// Задача №3.
// Получите координаты любых трех элементов на странице
let item = document.querySelector('a');
let getItemCoord = item.getBoundingClientRect();
let getItemTopCoord = item.getBoundingClientRect().top;
let getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;
console.log("Координати відносно вікна браузера:", getItemCoord);
console.log("Координати відносно позиції (top) документу:", getItemTopDocumentCoord);
