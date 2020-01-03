# candy-math-land-alexa-hackathon
"Candy Math Land" project for Amazon Alexa Hackathon

A small game for kids who are starting to learn Maths!

# Installation

```bash
	npm install
```

# Sample Conversations
>
/*
Examples:

 Example 1:
 User: Alexa open chocolate math land
 Alexa: Welcome to chocolate Math Land. [sound of game start] ... How many math questions would you like to have?
 User: Five
 Alexa: Five questions that is. Question 1: Tommy has 5 ninja figures, Peter has 2 ninja figures. How many ninja figures do Tommy and Peter have together?
 User: Seven
 Alexa: You answered Seven. [sound of Cheers] ... You now have 10 candies. Question 2 ...
 ...
 ...
 Alexa: Good job. [sound of Game over] You have completed the chocolate Math game.  You have earned 50 candies. It was a pleasure playing with you. Come to visit Candy Math Land soon. Goodbye!


 Example 2:
 User: Alexa open chocolate math land
 Alexa: Welcome to chocolate Math Land. [sound of Game start] ... How many math questions would you like to have?
 User: Ten
 Alexa: Ten questions that is. Question 1: Tommy has 5 ninja figures, Peter has 2 ninja figures. How many ninja figures do Tommy and Peter have together?
 User: Seven
 Alexa: You answered Seven. [sound of beep] ... Then answer is wrong. You now have 0 candies. Question 2 ...
 ...
 ...
 Alexa: Good job. [sound of Game over] You have completed the candy math land game.  You have earned 50 candies. It was a pleasure playing with you. Come to visit Candy Math Land soon. Goodbye!
*/

# Notes

- The app is built using alexa-app nide module using npm
- Server side code / food look up using google place api in node js
- Use SSML to include audio

### Intents
```
{
  "intents": [
    {
      "intent": "questionsTotalIntent",
      "slots": [
        {
          "name": "questionSlot",
          "type": "NUMBER"
        }
      ]
    },
    {
      "intent": "answerIntent",
      "slots": [
        {
          "name": "answerSlot",
          "type": "NUMBER"
        }
      ]
    },
    {
      "intent": "answerOnlyIntent",
      "slots": [
        {
          "name": "answerSlot",
          "type": "NUMBER"
        }
      ]
    },
    {
      "intent": "AMAZON.StartOverIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.HelpIntent",
      "slots": []
    },
    {
      "intent": "doNotKnowIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.StopIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.CancelIntent",
      "slots": []
    },
    {
      "intent": "AMAZON.RepeatIntent",
      "slots": []
    }
  ]
}
```

### Utterances

```
questionsTotalIntent	{questionSlot} questions
answerIntent	The answer is {answerSlot}
answerOnlyIntent	{answerSlot}
doNotKnowIntent	Don't Know
doNotKnowIntent	Not Sure
doNotKnowIntent	I do not know
doNotKnowIntent	I don't know
```

## Skill on Amazon Skill Store

This is a free to use skill which has been published on the Amazon skill store here(https://www.amazon.in/dp/B083FFCMCK/ref=sr_1_1?keywords=chocolate+math+land&qid=1578035848&s=digital-skills&sr=1-1)
