# sandbox-insights
This is the public node package repository for the Insights project

## Installation

Install the package with:

    npm install sandbox-insights --save

## Usage

The package needs to be initialized with your app's App Key which you can find on your SandBox Insights App Management page. Require it with the key's value:

``` js
var SBInsights = require('sandbox-insights')('...your app key...');
```

On ES6, this would look like:

``` js
import sbInsightsPackage from 'sandbox-insights';
const SBInsights = sbInsightsPackage('...your app key...');
```

### Recording Events

To track events, use the module like this:

``` js
SBInsights.recordEvent('eventCategory', 'actionName');
```

### Recording Page Views

To track page views, use the module like this:

``` js
SBInsights.recordPageView('pageName');
```

### More functionality coming soon
