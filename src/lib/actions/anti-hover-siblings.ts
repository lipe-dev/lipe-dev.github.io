export default function antiHoverSiblings(node: HTMLElement) {
	const parent = node.parentElement;
	if (!parent) return;

	node.onmouseenter = (e: MouseEvent) => {
		const children = Array.from(parent.children);
		children.forEach((child) => {
			if (child !== node) {
				child.classList.add('anti-hover');
			}
		});
	};
	node.onmouseleave = () => {
		const children = Array.from(parent.children);
		children.forEach((child) => {
			if (child !== node) {
				child.classList.remove('anti-hover');
			}
		});
	};
}
