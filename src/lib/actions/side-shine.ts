export default function sideShine(node: HTMLElement) {
	// create a shine div
	const shine = document.createElement('div');
	shine.classList.add('shine');

	// append it to the node
	node.appendChild(shine);

	const moveShine = (event: MouseEvent) => {
		const y = event.pageY - node.getBoundingClientRect().top;

		// add vertical scroll of any scrollable ancestor
		const top = y + node.scrollTop - shine.getBoundingClientRect().height / 2;

		shine.style.top = `${top}px`;
	};

	// when the mouse moves over the node
	node.addEventListener('mousemove', moveShine);

	// remove the shine when the mouse leaves the node
	node.addEventListener('mouseleave', () => {
		shine.style.top = '-1000px';
	});

	return {
		destroy() {
			shine.remove();
			node.removeEventListener('mousemove', moveShine);
		}
	};
}
