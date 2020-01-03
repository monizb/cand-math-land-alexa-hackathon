'use strict';

var MathHelper = require("./math_helper");

function IntentHandler() {
  var mathHelper = new MathHelper();
  var getStartedText = 'Now let\'s start. How many math questions would you like to have? ',
    questionChoiceText = 'Please pick a number between 10 and 30. ',
    welcomeText = 'Welcome to Chocolate Math Land. ' +
      getSound('start.mp3') +
      'In Chocolate Math Land, you earn chocolates by playing math games with me. ' +
      'The more math problems you solve, the more chocolates you will earn.  You may need pencil and paper for some of the problems. ' +
      getStartedText + questionChoiceText;

  var questionsTotalIntent = {
    "utterances": {
      "slots": {"answerSlot": "NUMBER"}
      , "utterances": ["{-|answerSlot} questions"]
    },
    name: 'questionsTotalIntent',
    callFunc: handleQuestionTotalIntent
  };
  var answerOnlyIntent = {
    "utterances": {
      "slots": {"answerSlot": "NUMBER"}
      , "utterances": ["{-|answerSlot}"]
    },
    name: 'answerOnlyIntent',
    callFunc: handleAnswerOnlyIntent
  };

  var answerIntent = {
    "utterances": {
      "slots": {"answerSlot": "NUMBER"}
      , "utterances": ["{The answer is }{-|answerSlot}"]
    },
    name: 'answerIntent',
    callFunc: handleAnswerIntent
  };

  var startOverIntent = {
    name: "AMAZON.StartOverIntent",
    utterances: {},
    callFunc: handleStartOverIntent
  };

  var helpIntent = {
      name: 'AMAZON.HelpIntent',
      utterances: {},
      callFunc: handleHelpIntent
    },
    cancelIntent = {
      name: 'AMAZON.CancelIntent',
      utterances: {},
      callFunc: goodBye
    },
    repeatIntent = {
      name: 'AMAZON.RepeatIntent',
      utterances: {},
      callFunc: handleRepeatIntent
    },
    stopIntent = {
      name: 'AMAZON.StopIntent',
      utterances: {},
      callFunc: goodBye
    },
    donotKnowIntent = {
      "utterances": {
        "utterances": ["{Don't Know| Not Sure | I do not know | I don\'t know}"]
      },
      name: 'doNotKnowIntent',
      callFunc: handleDontKnowIntent
    };

  function handleNumberAnswer(req, res) {
    var questions = req.session('questions');
    var answer = req.slot('answerSlot');
    if (!questions || !questions.length) {
      handleTotal(req, res, answer);
    } else {
      handleAnswer(req, res, answer);
    }
  }

  function handleAnswerOnlyIntent(req, res) {
    handleNumberAnswer(req, res);
  }

  function handleQuestionTotalIntent(req, res) {
    handleNumberAnswer(req, res);
  }

  function handleTotal(req, res, total) {
    var total = parseInt(total);
    if (!total || isNaN(total) || total < 10 || total > 30) {
      pickNumberOfQuestions(req, res, total);
      return true;
    }

    return startQuestionSession(req, res, total);
  }

  function pickNumberOfQuestions(req, res, total) {
    res.say("You answered " + total + ". Is that correct? Sorry, " + questionChoiceText);
    res.reprompt(questionChoiceText);
    res.shouldEndSession(false);
  }

  function handleAnswerIntent(req, res) {
    handleNumberAnswer(req, res);
  }

  function handleAnswer(req, res, answer) {
    var currentQuestion = req.session('currentQuestion');
    var repeatAnswer = 'You said ' + answer;
    if (!answer || isNaN(parseInt(answer))) {
      res.say(repeatAnswer + "Sorry, that did not seem like a number. " + currentQuestion.questionText);
      res.reprompt(currentQuestion.questionText);
      res.shouldEndSession(false);
    } else {
      handleResultGoToNext(req, res, answer);
    }
  }

  function handleHelpIntent(req, res) {
    handleRepeatIntent(req, res);
  }

  function handleStartOverIntent(req, res) {
    res.session('currentQuestion', null);

    handleLaunchRequest(req, res);
  }

  function handleRepeatIntent(req, res) {
    var currentQuestion = req.session('currentQuestion');
    var questions = req.session('questions');

    if (!currentQuestion) {
      handleLaunchRequest(req, res);
    } else {
      res.say(currentQuestion.questionText).reprompt(currentQuestion.questionText).shouldEndSession(false);
    }
  }

  function handleDontKnowIntent(req, res) {
    handleResultGoToNext(req, res, 'donotknow');
  }

  function handleLaunchRequest(req, res) {
    res.say(welcomeText).reprompt(getStartedText).shouldEndSession(false);
  }

  function goodBye(req, res) {
    var goodBye = ' It was a pleasure playing with you. Come to visit Chocolate Math Land soon. Goodbye!';
    res.say(goodBye).shouldEndSession(true);
  }

  function startQuestionSession(req, res, total) {
    var totalQuestions = parseInt(total);
    var questions = mathHelper.getQuestionSet(totalQuestions);
    var currentQuestion;

    res.session('questions', questions);
    currentQuestion = getQuestion(0, questions, 0);
    res.session('currentQuestion', currentQuestion);
    res.session('total', totalQuestions);
    res.say('Ok,  ' + total + ' questions that is. ' + currentQuestion.questionText).reprompt(currentQuestion.questionText).shouldEndSession(false);
    return true;
  }

  function getSound(name) {
    return '<audio src="https://math-sweet.herokuapp.com/chocolate/' + name + '" />';
  }

  function getQuestion(index, questions, score) {
    var questionIndex = index,
      question = questionIndex > (questions.length - 1) ? questions[0] : questions[questionIndex];

    return {
      questionText: 'Question ' + (index + 1) + ': ' + question.text,
      score: score,
      questionIndex: index,
      answer: question.answer
    };
  }

  function handleResultGoToNext(req, res, answer) {
    var currentQuestion = req.session('currentQuestion');
    var questions = req.session('questions');
    var totalLen = parseInt(req.session('total'));
    var isCorrect = parseInt(answer) === parseInt(currentQuestion.answer);
    var scoreTotal = currentQuestion.score;
    var questionIndex = parseInt(currentQuestion.questionIndex);
    var correctAnswer = isCorrect ? '' : 'The correct answer is ' + currentQuestion.answer.toString() + '. ';

    scoreTotal = parseInt(scoreTotal) + (isCorrect ? 10 : 0);
    var resultText = getResultText(isCorrect, answer, scoreTotal);

    if (questionIndex < (totalLen - 1)) {
      var nextQuestion = getSectionNextQuestion(questionIndex, questions, scoreTotal);
      res.session('currentQuestion', nextQuestion);
      res.say(resultText + correctAnswer + nextQuestion.questionText);
      res.reprompt(nextQuestion.questionText);
      res.shouldEndSession(false);
    } else {
      var summery = getSectionCompleteOutput(scoreTotal);
      res.say(resultText + correctAnswer + summery);
      res.shouldEndSession(true);
    }
  }

  function getResultText(isCorrect, answer, scoreTotal) {
    var output = 'You answered ' + answer + '. ';
    var sound = getSound(isCorrect ? 'cheer1.mp3' : 'wrong1.mp3');
    var result = sound + 'The answer is ' + (isCorrect ? 'correct' : 'wrong') + '. ';

    if (answer === 'donotknow') {
      return 'It is ok. You now have ' + (scoreTotal).toString() + ' chocolates. ';
    }

    if (isCorrect) {
      result += 'You earned 10 chocolates. ';
    }

    result += 'You now have ' + (scoreTotal).toString() + ' chocolates. ';

    return output + result;

  }

  function getSectionCompleteOutput(scoreTotal) {

    var totalText = scoreTotal > 0 ? 'Your have earned ' + scoreTotal + ' chocolates. ' :
      'Sorry, you did not earn any chocolates. Don\'t worry, you will do better next time. ';
    var gameOverSound = getSound('completed.mp3');

    return gameOverSound + 'Good job. You have completed the chocolate Math game. '
      + totalText
      + ' It was a pleasure playing with you. Come to visit chocolate Math Land soon. Goodbye!';
  }

  function getSectionNextQuestion(questionIndex, questions, scoreTotal) {
    var nextQuestion = getQuestion(questionIndex + 1, questions, scoreTotal);

    return nextQuestion;
  }

  return {
    questionTotalIntent: questionsTotalIntent,
    answerIntent: answerIntent,
    answerOnlyIntent: answerOnlyIntent,
    startOverIntent: startOverIntent,
    helpIntent: helpIntent,
    cancelIntent: cancelIntent,
    repeatIntent: repeatIntent,
    stopIntent: stopIntent,
    donotKnowIntent: donotKnowIntent,
    handleLaunchRequest: handleLaunchRequest
  };
}

module.exports = IntentHandler;