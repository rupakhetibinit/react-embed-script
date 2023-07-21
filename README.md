# React Based Embeddable Widget

This widget is based on react for embedding via script tag. This has some disadvantages such as having a big bundle size. While vanilla js would work just fine react is easier to work with.

There are two options to embed a widget namely script and iframe. Based on some research I did, iframe is great if you want a general post to be shared. For example Twitter post, facebook post etc, but they're not good for seo. Whereas script tag are better for seo.

I used the script tag method and dynamically created a div to inject the react component. I also used a vite plugin to inject the generated css bundle via js file instead of a separate css file. This has an advantage of just being able to give someone the script tag and it'll just work in any application. A way to reduce the currently huge(140kb+) bundle size would be to build it without including the react and react dom which will break the widget on any non react sites.

An example usage would be like this

```html
<script type="module" src="my-lib.js" defer>
```

Some references that I used were

- Stackoverflow post showing usage of cssInjectedByJsPlugin (this plugin is used to ) https://stackoverflow.com/questions/72440923/bundle-react-js-project-into-single-js-file-that-can-be-embedded-in-ghost-blog-p
- Vite Library Mode Docs - https://vitejs.dev/guide/build.html#library-mode

# For running and testing the widget

## Requirements
- have npm and nodejs installed (v18+ preffered)
- have serve installed (install it with `npm i -g serve`)


## Build and Serve the test file

- `npm run build`

- `cp test.html ./dist/index.html` to copy the test file to `dist` folder

- `npm i -g serve` for installing the serve library

- `serve ./dist`

- Check http://locahost:3000
