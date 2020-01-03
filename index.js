var alexa = require('alexa-app');
var IntentHandler = require('./intent_handler');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var app = new alexa.app('chocolate-math');
var IntentHandler = new IntentHandler();
var QuestionTotalIntent = IntentHandler.questionTotalIntent,
  HelpIntent = IntentHandler.helpIntent,
  AnswerIntent = IntentHandler.answerIntent,
  AnswerOnlyIntent = IntentHandler.answerOnlyIntent,
  RepeatIntent = IntentHandler.repeatIntent,
  StopIntent = IntentHandler.stopIntent,
  CancelIntent = IntentHandler.cancelIntent,
  StartOverIntent = IntentHandler.startOverIntent,
  DonotKnowIntent = IntentHandler.donotKnowIntent;

app.launch(function (req, res) {
  IntentHandler.handleLaunchRequest(req, res);
});

app.intent(QuestionTotalIntent.name, QuestionTotalIntent.utterances, function (req, res) {
  QuestionTotalIntent.callFunc(req, res);
});

app.intent(AnswerIntent.name, AnswerIntent.utterances, function (req, res) {
  AnswerIntent.callFunc(req, res);
});

app.intent(AnswerOnlyIntent.name, AnswerOnlyIntent.utterances, function (req, res) {
  AnswerOnlyIntent.callFunc(req, res);
});


app.intent(StartOverIntent.name, StartOverIntent.utterances, function (req, res) {
  StartOverIntent.callFunc(req, res);
});

app.intent(HelpIntent.name, HelpIntent.utterances, function (req, res) {
  HelpIntent.callFunc(req, res);
});

app.intent(DonotKnowIntent.name, DonotKnowIntent.utterances, function (req, res) {
  DonotKnowIntent.callFunc(req, res);
});

app.intent(StopIntent.name, StopIntent.utterances, function (req, res) {
  StopIntent.callFunc(req, res);
});

app.intent(CancelIntent.name, CancelIntent.utterances, function (req, res) {
  CancelIntent.callFunc(req, res);
});


app.intent(RepeatIntent.name, RepeatIntent.utterances, function (req, res) {
  RepeatIntent.callFunc(req, res);
});


module.exports = app;
