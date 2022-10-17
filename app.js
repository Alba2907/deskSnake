const board = document.querySelector('#board') // - то же самое что точка
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#edfee7', '#eefeb5', 'cornflowerblue']
const SQUARES_NUMBER = 900
const button = document.querySelector('.btn')


for (let i = 0; i < SQUARES_NUMBER; i++) {   // - на каждой итерации и будет прибавляться 1
    const square = document.createElement('div') // - на каждой из 450 итераций будет динамически создавать квадратики
    square.classList.add('square')
    square.addEventListener('mouseover', () =>
        setColor(square)) // - работате, когда мышь наводится на квадрат
    square.addEventListener('mouseleave', () =>
        removeColor(square)) // - убиарет заливку, после того, как убрали мышь
    board.append(square)
    button.addEventListener('click', function () {
        square.classList.toggle('two')
    })
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color // - по сути элемент, это наш квадрта, а запись закрашивает квадрат
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` // - обратные кавычки помгают передавать динамическое значение напрямую с помозью доллара и фигурных сокбок. Повторный стиль добавляет свечение
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d' // - убирает заливку после того, как убрали мышь
    element.style.boxShadow = '0 0 0px #1d1d1d'
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length) // - конструкция позволяет выбирать рандомный элемент по индексу массива
    return colors[index] // получаем рандомный цвет
}

