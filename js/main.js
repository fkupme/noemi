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