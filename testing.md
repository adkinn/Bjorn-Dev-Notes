# Testing Docs.Microsoft.com with Jamsine and Karma

Of course, you can find your many scripts in the `package.json` file, but in general there are two main tasks to run.

`npm run develop-test` will run your tests constantly and reload them upon file changes. 

`npm run test` will run the test suite once.

## Optimizing tests for development

### Speed up tests

In this file `C:\repos\apex\Template.Docs\global\test\karma\base.js`, comment out the following line:

```javascript
    preprocessors: {
        // 'global/output/ts/**/*.js': ['coverage']
    },

```

Also, you can disallow the suite from running in all your browsers by going to `C:\repos\apex\Template.Docs\global\test\karma\develop.js` and removing whichever browswers you don't want to run.

```javascript
var config = require('./base.js');

module.exports = function (karmaConfig) {
  config.browsers = [
    'Chrome',
    'IE',
    'Edge',
    'Firefox',
  ];

  karmaConfig.set(config);
}

```
