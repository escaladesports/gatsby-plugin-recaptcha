# gatsby-plugin-recaptcha

Appends the [reCAPTCHA](https://www.google.com/recaptcha/) .js snippet to your Gatsby site. Works great with [react-recaptcha](https://www.npmjs.com/package/react-recaptcha).

## Installation

With npm:

```bash
npm install --save gatsby-plugin-recaptcha
```

Or with Yarn:

```bash
yarn add gatsby-plugin-recaptcha
```

## Implementation

```javascript
// In your gatsby-config.js
plugins: [`gatsby-plugin-recaptcha`]
```

## Options

- `async`: Add an async attribute to the script tag (default: `true`)
- `defer`: Add a defer attribute to the script tag (default: `false`)
- `args`: Append a string to the end of the script URL (default: `""`)

```javascript
plugins: [
   {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: false,
         defer: false,
         args: `?onload=onloadCallback&render=explicit`,
      },
   },
]
```