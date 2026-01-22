---
name: "Enhancing Svelte with Custom Actions: Taming Sibling Styles"
slug: enhancing-svelte-with-custom-actions
tags: [technology, svelte, css, typescript, javascript]
growth: evergreen
date: "2023-08-24 14:14:14 -0300"
image: /images/posts/siblings.jpg
---

Image by <a href="https://www.freepik.com/free-photo/rural-lifestyle-concept-with-animals_19894533.htm#query=black%20sheep&position=25&from_view=search&track=ais">Freepik</a>

# Enhancing Svelte with Custom Actions: Taming Sibling Styles

## Table of Contents

One common challenge in web development is controlling the styling of sibling elements that come before a specific element in the [[HTML]] tree. While [[CSS]] provides many selectors, it has limitations when it comes to selecting preceding siblings. In this post, I'll show you a custom [[Svelte]] action I built to overcome this limitation using [[Svelte]]'s `use:` directive.

## The Problem with Sibling Styling

[[CSS]] provides many selectors to target elements based on their relationships within the [[HTML]] structure. However, selecting preceding siblings is tricky. There's no reliable [[CSS]] selector to target siblings that appear before a certain element, which often forces developers into complex workarounds that reduce code maintainability. The `:has()` pseudo-class could potentially solve this, but browser support is still limited.

## Svelte Custom Actions

[[Svelte]] offers custom actions that let you create reusable interactions beyond what [[CSS]] can achieve. The `use:` directive applies these actions to [[DOM]] elements.

[[Svelte]] actions are functions called when an element is created and destroyed. They can add event listeners, manipulate the [[DOM]], or perform other imperative tasks. The function receives the element as an argument. The `use:` directive invokes the action, passing in any additional arguments. Here's an example:

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

Here's a custom Svelte action called `antiHoverSiblings` that solves the problem of styling siblings when an element is hovered over:

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

This action adds and removes the `anti-hover` class to sibling elements when the target element is hovered over. Custom actions make it easy to encapsulate and reuse this type of behavior.

## Styling the Solution

Now let's add some [[CSS]] to style the `anti-hover` class. Here's a simple example:

```css
.anti-hover {
    text-fill-color: unset;
    -webkit-text-fill-color: unset;
    opacity: 0.5;
}
```

This CSS applies a few styling tweaks to elements with the `anti-hover` class. The `text-fill-color` and `-webkit-text-fill-color` properties are set to `unset` to reset any text color adjustments. The `opacity` property is set to `0.5` to create a transparency effect, making the elements visually recede when siblings are hovered over.

Feel free to experiment with different styling properties to match your project's design.

To see this in action, hover over the menu items in the navigation 👈. Notice how the other items fade away when you hover over one? That's the effect created by this custom action.

## Why Use Svelte for This?

While I could have used various workarounds or [[CSS]] tricks to achieve this effect, I chose to use [[Svelte]] custom actions for a few reasons. First, it's a more maintainable approach that keeps the behavior encapsulated. Second, it gave me a chance to practice implementing custom actions and better understand [[Svelte]]'s features. And third, it's simply a cleaner solution than trying to hack around [[CSS]] limitations.

## Wrapping Up

[[CSS]] has limitations when it comes to selecting preceding siblings, and the `:has()` pseudo-class still has limited browser support. [[Svelte]]'s custom actions provide a practical solution to this problem. The `antiHoverSiblings` action shows how you can handle complex interactions in a clean, reusable way.

Next time you run into issues with [[CSS]] sibling selectors, consider using [[Svelte]] custom actions as an alternative approach.