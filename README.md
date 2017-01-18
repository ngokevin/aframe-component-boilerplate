## aframe-component-boilerplate

The component boilerplate has been **deprecated.** Use the A-Frame
[angle](https://npmjs.com/package/angle) CLI instead to set up a component
template:

```bash
npm install -g angle
angle initcomponent
```

## Usage (Old)

This is not at all means required for writing an A-Frame component. It is
intended for publishing and sharing a component for the community to reuse.

1. `npm install && npm run unboil` to rename and trim stuff.
2. [Write your component](https://aframe.io/docs/0.4.0/guides/writing-a-component.html).
3. Build examples (`npm run dev` to watch for changes to build example bundles).
4. `npm publish` and commit the `dist/` files.
5. `npm run ghpages` to share with people.
6. Share on [Slack](https://aframevr-slack.herokuapp.com/), [awesome-aframe](https://github.com/aframevr/awesome-aframe),
and the [Registry](https://aframe.io/registry/)!

--trim--
## aframe-example-component

A example component for [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/ngokevin/aframe-component-boilerplate/master/dist/aframe-example-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity example="exampleProp: exampleVal"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-example-component
```

Then register and use.

```js
require('aframe');
require('aframe-example-component');
```
