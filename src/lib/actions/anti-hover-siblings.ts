export default function antiHoverSiblings(node: HTMLElement) {
	// This action is called when the node is mounted.

	const parent = node.parentElement;
	if (!parent) return;

	const applyAntiHoverToSiblings = () => {
		const children = Array.from(parent.children);
		children.forEach((child) => {
			if (child !== node) {
				child.classList.add('anti-hover');
			}
		});
	};

	const removeAntiHoverFromSiblings = () => {
		const children = Array.from(parent.children);
		children.forEach((child) => {
			if (child !== node) {
				child.classList.remove('anti-hover');
			}
		});
	};

	node.addEventListener('mouseenter', applyAntiHoverToSiblings);
	node.addEventListener('mouseleave', removeAntiHoverFromSiblings);

	return {
		// This action is called when the node is unmounted.
		// Here we can remove our listeners, stop timers, etc.
		destroy() {
			node.removeEventListener('mouseenter', applyAntiHoverToSiblings);
			node.removeEventListener('mouseleave', removeAntiHoverFromSiblings);
		}
	};
}
