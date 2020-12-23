const width = document.querySelector(".width").value
const height = documet.querySelector(".height").value
const color = document.querySelector(".cvsColor").value

let cvsAttr = {
	width,
	height,
	color: startingColor
}

export function setCanvasAttributes(event, canvas, ctx) {
	event.preventDefault()
	canvas.style.backgroundColor = cvsAttr.color
}
