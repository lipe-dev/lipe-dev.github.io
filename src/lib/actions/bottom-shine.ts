export default function bottomShine(node: HTMLElement) {
	// create a shine div
	const shine = document.createElement('div');
	shine.classList.add('h-shine');

	// append it to the node
	node.appendChild(shine);

	const moveShine = (event: MouseEvent) => {
		// how far is the mouse from the left edge of the node
		const x =
			event.clientX - node.getBoundingClientRect().left - shine.getBoundingClientRect().width / 2;

		shine.style.left = `${x}px`;
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
