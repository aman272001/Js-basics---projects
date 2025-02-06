const container = document.querySelector('.container');

const click = (color) => document.body.style.backgroundColor = `${color}`;

const square_1 = container.firstElementChild

const square_2 = square_1.nextElementSibling

const square_3 = container.lastElementChild



square_1.onclick = () => click("red")
square_2.onclick = () => click("blue")
square_3.onclick = () => click("#DE3163")