var KEY = 'feedback';

function getResponses () {
  var responseStr, responses;
  if (window.localStorage) {
    responseStr = window.localStorage && window.localStorage.getItem(KEY);
    try {
      responses = JSON.parse(responseStr);
    } catch (e) {
      console.log('Invalid feedback; discarding.');
    }
    return responses || {};
  }
}

function mergeResponses (id, val) {
  var responses = getResponses();
  responses[id] = val;
  if (window.localStorage) {
    window.localStorage.setItem(KEY, JSON.stringify(responses));
  }
}

function isSubmitted (id) {
  return getResponses().hasOwnProperty(id);
}

module.exports = {
  getResponses: getResponses,
  mergeResponses: mergeResponses,
  isSubmitted: isSubmitted,
};
