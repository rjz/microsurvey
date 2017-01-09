var assign = require('lodash.assign');

var storage = require('./lib/storage');

module.exports = function (userOpts) {
  var defaults = {
    promptLimit: 5,
    promptPercentage: 0.8,
    multipleResponsesAllowed: false
  };

  var opts = assign(defaults, userOpts);
  if (!opts.id) {
    console.error('id is required');
    return {};
  }

  var promptResponseCount = Object.keys(storage.getResponses()).length;
  var isUnderMaxReplies = promptResponseCount < opts.promptLimit;
  var isLucky = Math.random() < opts.promptPercentage;
  var isAvailable = opts.multipleResponsesAllowed || !storage.isSubmitted(opts.id);

  return {
    // Is the survey available to the current session?
    isAvailable: isUnderMaxReplies && isLucky && isAvailable,

    // Note that a survey response occurred
    track: function () {
      storage.mergeResponses(opts.id, true);
    },
  };
};
