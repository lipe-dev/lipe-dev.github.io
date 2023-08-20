const sheen = (element: HTMLDivElement) => {
	const setSheenToMousePosition = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		const { left, top, width, height } = element.getBoundingClientRect();

		// find angle between center of element and mouse position
		const angle = Math.atan2(clientY - (top + height / 2), clientX - (left + width / 2));

		const horizontal = 16 * Math.cos(angle);
		const vertical = 16 * Math.sin(angle);

		const spread = -10;
		const spreadRadius = 10;

		// set a box shadow
		element.style.boxShadow = `${horizontal}px ${vertical}px ${spreadRadius}px ${spread}px rgba(119, 29, 29, 1)`;
	};

	// set sheen horizontal position to mouse position
	document.addEventListener('mousemove', setSheenToMousePosition);

	return {
		destroy() {
			document.removeEventListener('mousemove', setSheenToMousePosition);
		}
	};
};

export default sheen;
