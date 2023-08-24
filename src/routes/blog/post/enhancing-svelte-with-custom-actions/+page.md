---
slug: enhancing-svelte-with-custom-actions
title: "Enhancing Svelte with Custom Actions: Taming Sibling Styles"
techSlugs: ["svelte", "css", "typescript", "javascript"]
date: "2023-08-24 14:14:14 -0300"
image: /images/posts/siblings.jpg
---

Image by <a href="https://www.freepik.com/free-photo/rural-lifestyle-concept-with-animals_19894533.htm#query=black%20sheep&position=25&from_view=search&track=ais">Freepik</a>

# Enhancing Svelte with Custom Actions: Taming Sibling Styles

## Table of Contents

In the ever-evolving landscape of web development, crafting engaging user experiences requires a deep understanding of both design and technology. One challenge developers often encounter is controlling the styling of sibling elements that precede a specific element in the HTML tree. While CSS is a powerful tool for styling, it has its limitations, especially when it comes to selecting preceding siblings. In this blog post, we'll explore a custom Svelte action I've developed to overcome this limitation and dive into the world of Svelte's use: directive to make our web interactions smoother.

## The Struggle with Sibling Styling

CSS provides a wide array of selectors to target elements based on their relationships within the HTML structure. However, selecting preceding siblings in CSS can be a bit tricky. The lack of a reliable way to select siblings that appear before a certain element often leads developers to explore complex workarounds that might result in convoluted code and reduced maintainability. Moreover, the :has pseudo-class, which has the potential to address this issue, suffers from limited browser support, making it a less-than-ideal solution for production environments.

## Enter Svelte Custom Actions

Here's where Svelte comes to the rescue. Svelte, a revolutionary frontend framework, offers a concept called custom actions that empowers developers to create reusable and encapsulated interactions that go beyond what traditional CSS can achieve. The use: directive allows us to apply these custom actions to DOM elements, enriching their behavior with minimal effort.

Svelte actions are functions that are called when an element is created and destroyed. They can be used to add event listeners, manipulate the DOM, or perform any other imperative tasks. The function will receive the element as an argument, allowing us to access and manipulate it as needed. The use: directive is used to invoke the action, passing in any additional arguments as needed. Like so:

```html
<script>
    import { antiHoverSiblings } from './myAction.js';
</script>

<ul>
    <li use:antiHoverSiblings><a href="/cv">Resume</a></li>
    <li use:antiHoverSiblings><a href="/tech">Tech</a></li>
    <li use:antiHoverSiblings><a href="/projects">Projects</a></li>
    <li use:antiHoverSiblings><a href="/blog">Posts</a></li>
</ul>
```

Consider the custom Svelte action I've developed called antiHoverSiblings. This action elegantly solves the problem of styling preceding siblings when an element is hovered over. Let's take a closer look at how it works:

```ts
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
```

This custom action efficiently adds and removes the anti-hover class to preceding sibling elements when the target element is hovered over. The beauty of Svelte custom actions lies in their simplicity and reusability, allowing us to encapsulate complex behavior like this in a concise manner.

## Styling the Svelte Solution

Of course, what's a finely crafted interaction without a dash of style to match? Let's take a brief moment to explore how we can style the anti-hover class, making our sibling-hiding effect visually appealing. Here's a snippet of CSS that you can use to style the affected elements:

```css
.anti-hover {
    text-fill-color: unset;
    -webkit-text-fill-color: unset;
    opacity: 0.5;
}
```

In this snippet, we're applying a few styling tweaks to the elements with the anti-hover class. The text-fill-color and -webkit-text-fill-color properties are set to unset, effectively resetting any text color adjustments. This ensures that the text remains in its original color, not affected by any text color modifications that might have been applied elsewhere. The opacity property is set to 0.5, providing a subtle transparency effect to the elements, making them visually recede when hovered over.

Remember, the beauty of this solution lies not only in its functionality but also in its customizability. Feel free to experiment with various styling properties to achieve the aesthetic that best fits your project.

With just a touch of CSS magic, we've transformed our functional custom action into a polished user experience. Now your users can interact with your elements in style, all while enjoying the seamless sibling management.

And there you have it! A complete package where functionality meets aesthetics, brought to you by the dynamic duo of Svelte and some well-crafted CSS.

And how does it look? Well, just take a look at the menu right there 👈 and hover over the menu items. See how the other items fade away? That's the magic of Svelte custom actions!

## Svelte: Doing It the Svelte Way

As developers, we're always looking for efficient, maintainable, and elegant solutions to our challenges. While I could have resorted to various workarounds or convoluted CSS tricks to achieve the desired effect, I chose to take the Svelte route for several reasons. Firstly, it aligns with the philosophy of using technology in the most natural way possible. Secondly, it allowed me to deepen my understanding of Svelte's powerful features and practice implementing custom actions. And lastly, who doesn't want to add a touch of Svelte flair to their development toolkit?

## Wrapping Up with a Wink

In conclusion, the world of web development constantly pushes us to innovate, adapt, and find creative solutions to our challenges. With the limitations of CSS when it comes to selecting preceding siblings and the restricted support for :has pseudo-class, Svelte's custom actions step in as a breath of fresh air. My antiHoverSiblings custom action exemplifies how Svelte empowers developers to tackle complex interactions with elegance and simplicity.

So, next time you find yourself wrestling with the quirks of CSS sibling selectors, consider taking a leap into the world of Svelte custom actions. After all, why settle for shenanigans when you can achieve your goals the Svelte way?

Stay curious, stay innovative, and keep Svelting! 😉