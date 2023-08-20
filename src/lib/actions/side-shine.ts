export default function sideShine(node: HTMLElement) {
	// create a shine div
	const shine = document.createElement('div');
	shine.classList.add('shine');

	// append it to the node
	node.appendChild(shine);

	const moveShine = (event: MouseEvent) => {
		// place the shine where the mouse is
		const y =
			event.clientY - node.getBoundingClientRect().top - shine.getBoundingClientRect().height / 2;

		if (y + shine.getBoundingClientRect().height > node.getBoundingClientRect().height) {
			shine.style.top = `${
				node.getBoundingClientRect().height - shine.getBoundingClientRect().height
			}px`;
			return;
		}

		shine.style.top = `${y}px`;
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
