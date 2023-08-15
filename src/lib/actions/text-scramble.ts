const textScramble = (el: HTMLElement, wordPool: string[]) => {
	let currentWord = 0;

	const chars = 'qwertyuiopasdfghjklzxcvbnm';
	const updateText = (el: HTMLElement, morphTextTo: string, correctCharacters: number) => {
		let newText = '';
		for (let i = 0; i < morphTextTo.length; i++) {
			if (i < correctCharacters) {
				newText += morphTextTo[i];
				continue;
			}
			newText += chars[Math.floor(Math.random() * chars.length)];
		}
		el.innerText = newText;
	};

	el.onmouseenter = () => {
		let updates = 0;
		currentWord = Math.floor(Math.random() * wordPool.length);
		const interval = setInterval(() => {
			updateText(el, wordPool[currentWord], updates);
			updates++;

			if (updates > wordPool[currentWord].length) {
				clearInterval(interval);
			}
		}, 50);
	};

	return {
		destroy() {
			el.onmouseenter = null;
		},

		update(newWordPool: string[]) {
			wordPool = newWordPool;
		}
	};
};

export default textScramble;
