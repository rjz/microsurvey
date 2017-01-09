Microsurvey
===============================================================================

Lightweight audience selection for survey applications. The researcher and
statistician on top of [`microask`](https://github.com/rjz/microask)'s survey
builder.

Usage
-------------------------------------------------------------------------------

Set up a survey:

```js
var microsurvey = require('microsurvey');
var survey = microsurvey({
  id: 'my-survey-id',
  multipleResponsesAllowed: false, // can a session respond multiple times?
  promptLimit: 5,                  // how many responses are allowed?
  promptPercentage: 0.8,           // odds that a session will see the survey
});
```

Now, check whether the survey is available:

```
if (survey.isAvailable) {
  // ... show survey
}
```

...and update it when responses are received:

```
function onSurveyResponse () {
  survey.track();
}
```

License
-------------------------------------------------------------------------------

MIT
