---
slug: 'loadsmart-data-visualization'
name: '@loadsmart/data-visualization'
order: 1
description: 'A library of React components for data visualization.'
techSlugs: [
    "react",
    "storybook",
    "recharts",
    "javascript",
    "typescript",
    "styled-components",
    "github-actions",
]
images: ['/images/projects/@loadsmart-data-visualization/img2.png', '/images/projects/@loadsmart-data-visualization/img1.png', /images/projects/@loadsmart-data-visualization/img3.png]
---

# About the project

During my time at [LoadSmart](https://loadsmart.com) I was tasked with creating a library of React components for data visualization, that would be used across the company's products, specially in the new solution for small enterprises.

The life of this library was short lived, as the company decided to pivot and focus on other things, but it was a great experience nonetheless.

The library was built with React, Storybook, and Recharts, and it was published to a public NPM registry at [https://www.npmjs.com/package/@loadsmart/data-visualization](https://www.npmjs.com/package/@loadsmart/data-visualization). It still has a few downloads to this day!

# Challenges

The library needed to follow a design specification that was provided by the design team, and it needed to be flexible enough to be used in multiple products, with different color schemes and data structures.

With that in mind, I decided to use Recharts as the base for the library, as it is a very flexible library that allows for a lot of customization.

In the end, we got a cool wrapper around Recharts that allowed us to create charts with a single line of code, and that could be easily customized with a theme object, and also allowed for custom components to be passed in, so we could add custom tooltips and other things.

# Learnings

This was a great opportunity to get more familiar with Recharts, and also to learn how to create a library of React components that can be easily consumed by other developers.

The biggest takeaway for me was learning how to create a library of React components that can be highly customizable, while offering a decent base styling.

This was also the first time I made heavy use of Storybook with Typescript, and it was a great experience.

Finally, I also coded the entire CI/CD pipeline for the library, which published it automatically to NPM.

# Final Thoughts

I am not sure what the future holds for this library, but I am very proud of what we accomplished in such a short time.

It is still open source, but it is not maintained anymore. You can check it out at [https://github.com/loadsmart/data-visualization-components](github.com/loadsmart/data-visualization-components). The storybook is also available at [https://loadsmart-data-insights-ui.netlify.app/] for now.