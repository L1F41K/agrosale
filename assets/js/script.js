const burger = document.getElementById('burger')
const navWrapper = document.getElementById('nav-wrapper')

burger.addEventListener('click', () => {
	// Переключаем класс active для анимации бургера и открытия меню
	burger.classList.toggle('active')
	navWrapper.classList.toggle('active')

	// Блокируем скролл страницы при открытом меню
	document.body.classList.toggle('no-scroll')
})

const slider = document.querySelector('.partners__slider-line')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', e => {
	isDown = true
	slider.classList.add('active')
	startX = e.pageX - slider.offsetLeft
	scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
	isDown = false
})

slider.addEventListener('mouseup', () => {
	isDown = false
})

slider.addEventListener('mousemove', e => {
	if (!isDown) return
	e.preventDefault()
	const x = e.pageX - slider.offsetLeft
	const walk = (x - startX) * 2 // Множитель скорости скролла
	slider.scrollLeft = scrollLeft - walk
})
