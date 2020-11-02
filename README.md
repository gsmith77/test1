
## Available Scripts

In the project directory, you can run: `yarn start`
# Front End Technical Assessment

## Overview

Create a [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) using LitElement and Typescript that can render Markdown. The component should be able to render the Markdown client side, or send the Markdown to an API endpoint to be rendered.

## Requirements

The Web Component should meet the following requirements:

- [x] Accept Markdown input from developer user of the component as a string
- [x] Be able to render Markdown client side without making http request to Markdown server
- [ ] Be able to make http call to Markdown server to render Markdown instead of rendering it on the client GETTING CORS
- [x] Be able to make all links in the rendered Markdown open in a new tab when clicked, but it should not be the default behavior
- [x] Document web component API / usage (props, methods, etc.)

Use 3rd party libraries as needed.

## Markdown API Endpoint

We've created a simple Markdown conversion API using the "marked" javascript library that converts a Markdown string to an html string.

The API is deployed at https://md-api-vert.vercel.app/api/markdown

The API is very simple, a POST request with Markdown text body to `/markdown` will return html text

There is an example http GET request to the health endpoint in `index.html` for you to reference.

## Considerations

* The web component does not need to support IE11, just latest versions of modern browsers

## References

* [Markdown](https://www.markdownguide.org/getting-started/)
* [open-wc](https://open-wc.org/)
* [lit-element](https://lit-element.polymer-project.org/)
* [Relevant blog post](https://levelup.gitconnected.com/creating-a-web-component-with-open-wc-fe1922128080)

## Your Output

Fork this stackblitz ("fork" button in the top app bar) and code your solution in that fork. Email us a link to your fork when you are done.
