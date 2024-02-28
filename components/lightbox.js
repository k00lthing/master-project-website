export function createLightbox(element) {
	const lightbox = document.createElement('div')
	lightbox.id = 'lightbox'
    element.appendChild(lightbox)

	const figures = document.querySelectorAll('figure')
	figures.forEach(figure => {
		figure.addEventListener('click', e => {
			lightbox.classList.add('active')
			const figureChildren = figure.querySelectorAll('*')
			

			const lightboxFigure = document.createElement('figure')
			const lightboxImg = document.createElement('img')
			const lightboxCaption = document.createElement('figcaption')
			lightboxFigure.appendChild(lightboxImg)
			lightboxFigure.appendChild(lightboxCaption)
			
			figureChildren.forEach(child => {
				if(child.tagName == 'IMG'){
					lightboxImg.src = child.src
				} else if (child.tagName == 'FIGCAPTION'){
					lightboxCaption.innerHTML = child.innerHTML
				}
			})
			while (lightbox.firstChild){
				lightbox.removeChild(lightbox.firstChild)
			}
			lightbox.appendChild(lightboxFigure)
		})
	})

	lightbox.addEventListener('click', e => {
		if(e.target !== e.currentTarget ) return
		lightbox.classList.remove('active')
	})
}
