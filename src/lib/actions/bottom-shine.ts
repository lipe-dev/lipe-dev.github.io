export default function bottomShine(node: HTMLElement) {
	// create a shine div
	const shine = document.createElement('div');
	shine.classList.add('h-shine');

	// append it to the node
	node.appendChild(shine);

	const moveShine = (event: MouseEvent) => {
		const x = event.pageX - node.offsetLeft;

		// get shine width
		const shineWidth = shine.offsetWidth;

		// calculate the position of the shine
		const left = x - shineWidth / 2;

		shine.style.left = `${left}px`;
	};

	// when the mouse moves over the node
	node.addEventListener('mousemove', moveShine);

	// remove the shine when the mouse leaves the node
	node.addEventListener('mouseleave', () => {
		shine.style.left = '-1000px';
	});

	return {
		destroy() {
			shine.remove();
			node.removeEventListener('mousemove', moveShine);
		}
	};
}
