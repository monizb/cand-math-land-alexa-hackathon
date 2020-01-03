/*
 Examples:

 Example 1:
 User: Alexa ask chocolate math
 Alexa: Welcome to chocolate Math Land. [sound of game start] ... How many math questions would you like to have?
 User: Five
 Alexa: Five questions that is. Question 1: Tommy has 5 ninja figures, Peter has 2 ninja figures. How many ninja figures do Tommy and Peter have together?
 User: Seven
 Alexa: You answered Seven. [sound of Cheers] ... You now have 10 chocolates. Question 2 ...
 ...
 ...
 Alexa: Good job. [sound of Game over] You have completed the chocolate Math game.  You have earned 50 chocolates. It was a pleasure playing with you. Come to visit Jolly Rancher Math Land soon. Goodbye!


 Example 2:
 User: Alexa open chocolate math
 Alexa: Welcome to chocolate Math Land. [sound of Game start] ... How many math questions would you like to have?
 User: Ten
 Alexa: Ten questions that is. Question 1: Tommy has 5 ninja figures, Peter has 2 ninja figures. How many ninja figures do Tommy and Peter have together?
 User: Seven
 Alexa: You answered Seven. [sound of beep] ... Then answer is wrong. You now have 0 chocolates. Question 2 ...
 ...
 ...
 Alexa: Good job. [sound of Game over] You have completed the chocolate Math game.  You have earned 50 chocolates. It was a pleasure playing with you. Come to visit Jolly Rancher Math Land soon. Goodbye!
 */

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
