const sheen = (element: HTMLDivElement) => {
	// create or get sheen element
	let sheen = element.querySelector('.sheen') as HTMLDivElement;
	if (!sheen) {
		sheen = document.createElement('div');
		sheen.classList.add('sheen');
	}

	const setSheenToMousePosition = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		const { left, top, width, height } = element.getBoundingClientRect();

		// find angle between center of element and mouse position
		const angle = Math.atan2(clientY - (top + height / 2), clientX - (left + width / 2));

		// rotate sheen to that angle
		sheen.style.transform = `rotate(${angle}rad)`;

		// move sheen to edge of circle contained within element taking into account the sheen size inset by 5px
		const radius = width / 2;
		const sheenWidth = 8;
		const sheenHeight = 200;
		// if angle is on the right side
		const x = 0 + radius + radius * Math.cos(angle) - sheenWidth / 2;
		const y = 0 + radius + radius * Math.sin(angle) - sheenHeight / 2;
		sheen.style.left = `${x}px`;
		sheen.style.top = `${y}px`;
	};

	// set sheen horizontal position to mouse position
	document.addEventListener('mousemove', setSheenToMousePosition);

	element.appendChild(sheen);

	return {
		destroy() {
			document.removeEventListener('mousemove', setSheenToMousePosition);
		}
	};
};

export default sheen;
