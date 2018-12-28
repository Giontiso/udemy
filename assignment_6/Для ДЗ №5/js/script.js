let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    five = document.createElement('li'),
    bgr = document.getElementsByTagName('body'),
    apple = document.getElementById('title'),
    add = document.getElementsByClassName('adv'),
    column = document.getElementsByClassName('column'),
    promt = document.getElementsByClassName('prompt'),
    ask = prompt('Ваше отношение к технике apple?', '');


menu.insertBefore(menuItem[2], menuItem[1]); // упорядочили элементы

five.classList.add('menu-item'); //добавление 5-го в скрип
menu.appendChild(five);  // добавление 5-го в DOM
five.textContent = 'Пятый пункт';


document.body.style.background = 'url(../img/apple_true.jpg)'; // меняем фон

apple.textContent = 'Мы продаем только подлинную технику Apple'; // пеняем текст

column[1].removeChild(add[0]); // удаление рекламы

promt[0].textContent = ask; // вопрос полюзователю через prompt
