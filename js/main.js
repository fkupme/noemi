const openPopup = document.getElementById('open-popup')
const closePopup = document.getElementById('close-popup')
const popup = document.getElementById('popup')
const popupContainer = document.getElementById('popup-container')

openPopup.addEventListener('click', () => {
	popup.classList.add('open')
	popupContainer.classList.add('open')
	openPopup.classList.add('hidden')
})
closePopup.addEventListener('click', () => {
	popup.classList.remove('open')
	popupContainer.classList.remove('open')
	openPopup.classList.remove('hidden')
})
const openMenu = document.getElementById('burger-button')
const closeMenu = document.getElementById('close-menu')
const menu = document.getElementById('menu')

openMenu.addEventListener('click', () =>{
	menu.classList.add('open_menu')
	openMenu.classList.add('hidden')
})

closeMenu.addEventListener('click', () =>{
	menu.classList.remove('open_menu')
	openMenu.classList.remove('hidden')
})
