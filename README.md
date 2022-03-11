# gatsby-plugin-optimizely-js

A Gatsby plugin to add an [Optimizely JS Snippet](https://support.optimizely.com/hc/en-us/articles/4411731640973) to your site.


## Install

`$ npm install --save gatsby-plugin-optimizely-js`

## How to use

### Setup

In your gatsby-config.js file:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-optimizely-js`,
    options: {
      // The optimizely id of the project. 
      // This is the number that appears in the snippet.
      optimizelyId: '123456789',
    }
  }
];
```
