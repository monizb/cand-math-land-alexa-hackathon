'use strict';
var questionGenerator = require('./question_generator');
var _ = require('lodash');

function MathHelper() {

  MathHelper.prototype.getAdditionQuestions = getAdditionQuestions;
  MathHelper.prototype.getMultiplicationQuestions = getMultiplicationQuestions;
  MathHelper.prototype.getSubtractionQuestions = getSubtractionQuestions;
  MathHelper.prototype.getDivisionQuestions = getDivisionQuestions;
  MathHelper.prototype.getQuestionSet = getQuestionSet;

  var questionHelper = new questionGenerator(),
    additionQuestions = questionHelper.additionQuestions,
    subtractionQuestions = questionHelper.subtractionQuestions,
    divisionQuestions = questionHelper.divisionQuestions,
    multiplicationQuestions = questionHelper.multiplicationQuestions,
    commonNames = questionHelper.commonNames,
    questionTypeTotal = 4;

  function getQuestionSet(len) {
    var lenForType = Math.floor(len / questionTypeTotal),
      multiplicationLen = lenForType  + (len % questionTypeTotal),
      additionQuestions = getAdditionQuestions(lenForType),
      subtractionQuestions = getSubtractionQuestions(lenForType),
      divisionQuestions = getDivisionQuestions(lenForType),
      multiplicationQuestions = getMultiplicationQuestions(multiplicationLen);

    var randomized = randomizeQuestions(_.concat(additionQuestions, subtractionQuestions, divisionQuestions, multiplicationQuestions), len);

    return randomized;
  }

  function getSubtractionQuestions(len) {
    var questions = subtractionQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);

    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForSubtraction(),
        answer = numbers[0] - numbers[1] - (question.part3 ? numbers[2] : 0),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getDivisionQuestions(len) {
    var questions = divisionQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);

    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForDivision(),
        answer = ( numbers[0] / numbers[1]),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getMultiplicationQuestions(len) {
    var questions = multiplicationQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);

    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForMultiplications(),
        answer = ( numbers[0] * numbers[1]),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getRandomNumbersForDivision() {
    var number1 = Math.ceil(Math.random() * 50)+ 2,
        number2 = Math.ceil(Math.random() * 20)+ 2;

    return [number1 * number2, number1];
  }

  function getRandomNumbersForMultiplications() {
    var number1 = Math.ceil(Math.random() * 50) + 2,
      number2 = Math.ceil(Math.random() * 20) + 2;

    return [number1, number2];
  }

  function getAdditionQuestions(len) {
    var questions = additionQuestions.slice(),
      newQuestions;
    questions = randomizeQuestions(questions, len);
    newQuestions = _.map(questions, function (question, index) {
      var numbers = getRandomNumbersForAddition(),
        answer = numbers[0] + numbers[1] + (question.part3 ? numbers[2] : 0),
        text = getQuestionText(question, numbers, index);

      return getQuestion(index, text, answer);
    });

    return newQuestions;
  }

  function getQuestion(index, text, answer) {
    return {
      text: text,
      answer: answer
    };
  }

  function getQuestionText(question, numbers, index) {
    var names = getRandomNames(commonNames, index || 0),
      part3Text = '';

    var part1Text = getTemplatedTextWithAllNumbers(question, 'part1', numbers, names);
    var part2Text = getTemplatedTextWithAllNumbers(question, 'part2', numbers, names);

    if (question.part3) {
      part3Text = getTemplatedTextWithAllNumbers(question, 'part3', numbers, names);
    }

    var questionText = getTemplatedQuestionText(question, names);
    return part1Text + part2Text + part3Text + questionText;
  }

  function getTemplatedTextWithAllNumbers(question, key, numbers, names) {
    var template = _.template(question[key]),
      obj = question.object && question.object.length? question.object[0] : '',
      config = {
        name1: names[0],
        name2: names[1],
        name3: names[2],
        object: obj + 's'
      };

    if (numbers.length> 0) {
        config.number1 = numbers[0];
    }
    if (numbers.length>1) {
      config.number2 = numbers[1];
    }

    if (numbers.length>2) {
        config.number3 = numbers[2];
    }

    var partText = template(config);

    return partText;

  }
  function getTemplatedQuestionText(question,  names) {
    var template = _.template(question.question),
      config = {
        name1: names[0],
        name2: names[1],
        name3: names[2]
      };

    var partText = template(config);

    return partText;
  }

  function getRandomNumbersForAddition() {
    var number1 = Math.ceil(Math.random() * 100 + 1),
      number2 = Math.ceil(Math.random() * 100),
      number3 = Math.ceil(Math.random() * 50);

    return [number1, number2, number3];
  }

  function getRandomNumbersForSubtraction() {
    var number1 = Math.ceil(Math.random() * 500 + 5),
      number2 = Math.ceil(Math.random() * (number1 - 2)),
      number3 = Math.ceil(Math.random() * (number1 - number2 - 2));

    return [number1, number2, number3];
  }

  function getRandomNames(names, index) {
    var nameIdx = Math.floor(Math.random() * names.length) + index,
      name1 , name2 , name3;

    if (nameIdx > names.length + 4) {
      nameIdx = names.length - 4;
    }

    if (nameIdx < 0) {
      nameIdx = 0;
    }

    name1 = names[nameIdx] || 'Annya';
    name2 = names[nameIdx+1] || 'Emma';
    name3 = names[nameIdx+2] || 'Young';
    return [name1, name2, name3];
  }


  function randomizeQuestions(questions, len) {
    var index = questions.length,
      questionSet = [],
      len = Math.min(len, questions.length);
    for (var j = 0; j < questions.length; j++) {
      var rand = Math.floor(Math.random() * index);
      index -= 1;
      var temp = questions[index];
      questions[index] = questions[rand];
      questions[rand] = temp;
      questionSet.push(questions[index]);
    }

    return questionSet.slice(0, len);
  }


}

module.exports = MathHelper;