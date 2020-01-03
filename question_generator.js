'use strict';

function QuestionGenerator() {
  var groupAddition = [
    {
      part1: 'At Hogwards magic school, students were practicing magic. Harry Potter turned one flower into ${number1} white doves, ',
      part2: 'Harmoine turned one leave into ${number2} white doves ',
      part3: 'Ron turned one stone into ${number3} white doves ',
      question: 'How many white doves did Harry Potter and Harmoine and Ron changed into?'
    },
    {
      part1: 'A hungry caterpillar ate ${number1} ${object} on the first day, ',
      part2: 'it ate ${number2} ${object} on the second day, ',
      part3: 'it ate ${number3} ${object} on the third day. ',
      question: 'How many gummy bears did the hungry caterpillar ate the first three days?',
      object: ['gummy bear']
    },
    {
      part1: ' ${name1} kept ${number1} ${object} in a small bag  ',
      part2: 'and ${number2} ${object} in a medium bag, ',
      part3: 'and ${number3} ${object} in a big bag. ',
      question: 'How many chocolates did ${name1} keep altogether?',
      object: ['chocolate']
    },
    {
      part1: '${name1} went to visit the fairy land. ${name1} met ${number1} tickle fairies, ',
      part2: 'and ${number2} giggle fairies,  ',
      part3: 'and ${number3} laughing fairies. ',
      question: 'How many fairies did ${name1} meet?'
    },
    {
      part1: '${name1} dreamed last night he was helping Harry Potter looking for the sorcerer\'s stone. ${name1} flew ${number1} miles in the beginning , ',
      part2: '${name1} crawled through a tunnel of ${number2} miles  ',
      question: 'How many miles did ${name1} travelled?'
    },
    {
      part1: '${name1} was trying to buy a magic wand. One magic wand of regular brand costs ${number1} dollars, ',
      part2: 'another magic wand of a better brand costs ${number2} more dollars than the regular brand, ',
      part3: 'the best wand costs ${number3}  more dollars than the  medium brand. ',
      question: 'How much does the best want cost?'
    },
    {
      part1: 'There were ${number1} ${object} in the basket. ',
      part2: ' ${number2} more ${object} were added to the basket. ',
      question: 'How many apples were in the basket?',
      object: ['apple']
    },
    {
      part1: '${name1} and ${name2} went trick treat, ${name1} got ${number1} ${object}, ',
      part2: '${name2} has ${number2} more ${object}. ',
      question: 'How many chocolates did ${name2} get?',
      object: ['chocolate']
    },
    {
      part1: '${name1} received ${number1} magic jelly ${object}, ',
      part2: 'later ${name1} received ${number2} magic jelly ${object}, ',
      part3: 'much later ${name1} received ${number3} magic jelly ${object}. ',
      question: 'How many magic jelly beans did ${name1} receive all together?',
      object: ['bean']
    },
    {
      part1: 'There are ${number1} ${object} in the tree,  ',
      part2: 'there are another ${number2} ${object} in Mr. Newt Scamander\'s pocket, ',
      part3: 'and there are ${number3}  ${object} in his suitcase. ',
      question: 'How many bow truckles there are all combined?',
      object: ['bow truckle']
    },
    {
      part1: ' The niffler stole ${number1} gold ${object} from new york, ',
      part2: 'he stole ${number2} gold ${object} from chicago,  ',
      part3: 'he stole ${number3} gold  ${object} from Gold Digger\'s museum ',
      question: 'How many gold coins did he steal?',
      object: ['coin']
    },
    {
      part1: 'There are ${number1} ${object} in Mr. Sweets\' left pocket, ',
      part2: 'There are ${number2} ${object} in his right pocket,  ',
      part3: 'there are ${number3} ${object} in his middle pocket. ',
      question: 'How many candy bars does Mr. Sweet have?',
      object: ['candy bar']
    }

  ];

  var multiplications = [
    {
      part1: '${name1} works as a babysitter. ${name1} makes ${number1} an hour.  ${name1} worked ${number2} hours, ',
      question: 'How many dollars did ${name1} make for that day?'
    },
    {
      part1: '${name1} loves chocolate. ${name1} had a chocolate binge for the last ${number2} hours, every hour she ate ${number1} chocolates, ',
      question: 'How many chocolates did ${name1} ate in the last three hours?'
    },
    {
      part1: '${name1} was saving money to buy something very special. ${name1} was saving ${number1} dollars every day for last ${number2} days ',
      question: 'How many dollars did ${name1} have saved?'
    },
    {
      part1: 'Tinker Bell is collecting pixel dust. She has collected ${number1} jars, each jar has ${number2} ounces.  ',
      question: 'How many ounces has Tinker Bell collected all together?'
    },
    {
      part1: 'Winter is coming. Tinker Bell was making tiny fairy beds for fairies. Tinker Bell makes ${number1} beds every day. They have worked ${number2} days. ',
      question: 'How many warm little fairy beds did Tinker Bell make?'
    },
    {
      part1: 'The ministry of Magic is confiscating illegal muggle objects. Each day they confiscated on average ${number1} objects. ${number2} days have passed. ',
      question: 'How many muggle objects they have confiscated?'
    },
    {
      part1: 'Snow White is cleaning the dwarf\'s shed. Oh, my, it is so dirty. There are ${number1} dwarfs. Each dwarf has about ${number2} things need to be scrubbed or thrown out. ',
      question: 'How many dirty things do Snow White have to scrub or throw out?'
    },
    {
      part1: 'Snow White is very sad and she could not eat. The seven dwarfs left tasty little things on the table for her every day, hoping she would eat it. Each one of them left on average ${number1} treats for her. On the ${number2} day, Snow White finally agreed to eat. ',
      question: 'How many tasty treats did the dwarfs left out for her?'
    },
    {
      part1: 'The magic school students were create potions. They were making on average ${number1} bottles of potion per day. After ${number2} days, ',
      question: 'How many bottles did the students make? '
    },
    {
      part1: '${name1} was terribly bored in the last ${number1} days. Each day ${name1} spent ${number2} hours feeling bored.  ',
      question: 'How many hours did ${name1} spent feeling bored?'
    }
  ];

  var divisions = [
    {
      part1: 'Annya has ${number1} chocolates. She wants to give ${number2} of her friends equally. ',
      question: 'How many chocolate does each of her friend get?'
    },
    {
      part1: 'Once there was a fantastic forest that was full of fantastic beasts. One day, a meteroite struck and killed most of the fantastic beasts.  Fortunately ${number1} of them escaped in ${number2} groups ',
      question: 'How many fantastic beast groups escaped?'
    },
    {
      part1: '${name1} loves chocolate. ${name1} had a chocolate binge for the last ${number2} hours. She ate a total of ${number1} chocolates, ',
      question: 'How many chocolates did ${name1} ate each hour?'
    },
    {
      part1: '${name1} was saving money to buy something very special. ${name1} have saved a total of ${number1} dollars for the last ${number2} days. ',
      question: 'How many dollars did ${name1} saved each day?'
    },
    {
      part1: 'Tinker Bell is collecting pixie dust. She has collected ${number1} ounces of pixie dust. The pixie dust is stored in ${number2} jars,  ',
      question: 'How many ounces of pixie dust does each jar has?'
    },
    {
      part1: 'Winter is coming. Tinker Bell and Terrance are making tiny fairy beds for fairies. They have made ${number1} beds. Tinker Bell makes ${number2} beds every day.  ',
      question: 'How many days did Tinker Bell work to make the beds?'
    },
    {
      part1: 'The ministry of Magic was confiscating illegal muggle objects. For the past ${number2} days, they have confiscated ${number1} objects  ',
      question: 'How many muggle objects did they confiscate each day?'
    },
    {
      part1: 'In the enchanted house, there are ${number2} rooms and  ${number1} enchanted beings.  ',
      question: 'How many enchanted beings each room has?'
    },
    {
      part1: 'Sleeping beauty\'s father went past a rose garden full of roses and magic bees. There are ${number1} bees perched on ${number2} roses. ',
      question: 'How many bees there are on each of the roses?'
    },
    {
      part1: 'The magic school students were practicing dark magic. With each successfully wave of wand, ${number2} lightning appeared in the sky. All day long, there were lightning and thunder. Litter tommy counted there had ${number1} in total. ',
      question: 'How many times the magic students waved their wands successfully? '
    },
    {
      part1: '${name1} was terribly bored in the last ${number2} days. In total he has spent ${number1} hours feeling bored and grouchy.  ',
      question: 'How many hours did ${name1} spent feeling bored and grouchy each day?'
    }
  ];

  var groupSubtractions = [
    {
      part1: 'Camp Half-Blood has ${number1} campers',
      part2: 'During the quest for the Golden Fleece, Camp Half-Blood lost ${number2} campers',
      part3: 'During the Titan war, Camp Half-Blood lost ${number3} campers',
      question: 'How many campers does Camp Half Blood have left?'
    },
    {
      part1: 'Mr. Sweet had ${number1} ${object} in his pockets, ',
      part2: 'he ate ${number2} ${object} in the morning,  ',
      part3: 'he ate ${number3} ${object} in the afternoon. ',
      question: 'How many candy bars does Mr. Sweet have left?',
      object: ['candy bar']
    },
    {
      part1: 'There are ${number1} dragons in the Viking village. ',
      part2: ' Hiccup has tamed (or made friends with) ${number2} dragons, ',
      part3: 'Astrid has learned to work with ${number3} dragons  ',
      question: 'How many dragons are still to be trained and tamed?  '
    },
    {
      part1: 'In the ocean, there are ${number1} sea pigs. They are working towards the cliff. ',
      part2: '${number2} fell off ',
      part3: '${number3} more fell off. ',
      question: 'How many sea pigs are left?'
    },
    {
      part1: 'Harry Potter has collected ${number1} wizard ${object}, ',
      part2: ' he gave ${number2} ${object} to Ron, ',
      part3: '  he gave ${number3} ${object} to Hermione. ',
      question: 'How many wizard cards does Harry Potter have now?',
      object: ['card']
    },
    {
      part1: 'There were ${number1} in the smurf village. ',
      part2: '${number2} ${object} went off to the city, ',
      part3: '${number3} ${object} went off to the mountain, ',
      question: 'How many smurfs were still in the smurf village?',
      object: ['smurf']
    },
    {
      part1: 'There are ${number1} storm troopers, ',
      part2: 'when the empire lost, it lost ${number2} storm troopers. ',
      question: 'How many storm troopers does the empire have left?'
    },
    {
      part1: '${name1}  went trick treat, ${name1} got ${number1} ${object},',
      part2: 'the next day, ${name1} found out that mom and dad had eaten ${number2} ${object}, ',
      part3: 'brother had eaten ${number3} ${object}. ',
      question: 'How many chocolate did ${name1} left?',
      object: ['chocolate']
    },
    {
      part1: '${name1} made ${number1} paper ${object}, ',
      part2: '${name2} made ${number2} paper ${object} less than ${name1}, ',
      question: 'How many paper airplanes did ${name2} make?',
      object: ['airplane']
    },
    {
      part1: '${name1} has ${number1} ${object} before going to bed, ',
      part2: '${name1} spent ${number2} ${object} on reading, ',
      part3: 'and ${number3} ${object} on singing and dancing and jumping around.  ',
      question: 'How many minutes does ${name1} have left before going to bed?',
      object: ['minute']
    },
    {
      part1: '${name1} is helping mom to shop Halloween candies. He needs to buy ${number1} ${object} in total,  ',
      part2: '${name1} so far has bought ${number2} ${object}, ',
      question: 'How many more flavors does ${name1} need to buy?',
      object: ['flavor']
    },
    {
      part1: 'There are ${number1} fantastic ${object} in the magic forest.  ',
      part2: 'One day, disaster struck.  ${number2} of them left the forest. ',
      question: 'How many fantastic beasts are still left?',
      object: ['beast']
    },
    {
      part1: 'The family went on a vacation. They had a budget of ${number1} dollars,',
      part2: 'after 1st day, they have spent ${number2} dollars, ',
      part3: 'after 2st day, they have spent ${number3}. ',
      question: 'How many dollars did the family have left after 2 days?'
    }
  ];

  var commonNames = ['James',  'Mary',
    'John',  'Patricia',
    'Robert',  'Jennifer',
    'Michael',  'Elizabeth',
    'William',  'Linda',
    'David',  'Barbara',
    'Richard',  'Susan',
    'Joseph',  'Jessica',
    'Thomas',  'Margaret',
    'Charles',  'Sarah',
    'Christopher',  'Karen',
    'Daniel',  'Nancy',
    'Matthew',  'Betty',
    'Anthony',  'Dorothy',
    'Donald',  'Lisa',
    'Mark',  'Sandra',
    'Paul',  'Ashley',
    'Steven',  'Kimberly',
    'George',  'Donna',
    'Kenneth',  'Carol',
    'Andrew',  'Michelle',
    'Joshua',  'Emily',
    'Edward',  'Helen',
    'Brian',  'Amanda',
    'Kevin',  'Melissa',
    'Ronald',  'Deborah',
    'Timothy',  'Stephanie',
    'Jason',  'Laura',
    'Jeffrey',  'Rebecca',
    'Ryan',  'Sharon',
    'Gary',  'Cynthia',
    'Jacob',  'Kathleen',
    'Nicholas',  'Shirley',
    'Eric',  'Amy',
    'Stephen',  'Anna',
    'Jonathan',  'Angela',
    'Larry',  'Ruth',
    'Scott',  'Brenda',
    'Frank',  'Pamela',
    'Justin',  'Virginia',
    'Brandon',  'Katherine',
    'Raymond',  'Nicole',
    'Gregory',  'Catherine',
    'Samuel',  'Christine',
    'Benjamin',  'Samantha',
    'Patrick',  'Debra',
    'Jack',  'Janet',
    'Alexander',  'Carolyn',
    'Dennis',  'Rachel',
    'Jerry',  'Heather',
    'Tyler',  'Maria',
    'Aaron',  'Diane',
    'Henry',  'Emma',
    'Douglas',  'Julie',
    'Peter',  'Joyce',
    'Jose',  'Frances',
    'Adam',  'Evelyn',
    'Zachary',  'Joan',
    'Walter',  'Christina',
    'Nathan',  'Kelly',
    'Harold',  'Martha',
    'Kyle',  'Lauren',
    'Carl',  'Victoria',
    'Arthur',  'Judith',
    'Gerald',  'Cheryl',
    'Roger',  'Megan',
    'Keith',  'Alice',
    'Jeremy',  'Ann',
    'Lawrence',  'Jean',
    'Terry',  'Doris',
    'Sean',  'Andrea',
    'Albert',  'Marie',
    'Joe',  'Kathryn',
    'Christian',  'Jacqueline',
    'Austin',  'Gloria',
    'Willie',  'Teresa',
    'Jesse',  'Hannah',
    'Ethan',  'Sara',
    'Billy',  'Janice',
    'Bruce',  'Julia',
    'Bryan',  'Olivia',
    'Ralph',  'Grace',
    'Roy',  'Rose',
    'Jordan',  'Theresa',
    'Eugene',  'Judy',
    'Wayne',  'Beverly',
    'Louis',  'Denise',
    'Dylan',  'Marilyn',
    'Alan',  'Amber',
    'Juan',  'Danielle',
    'Noah',  'Brittany',
    'Russell',  'Madison',
    'Harry',  'Diana',
    'Randy',  'Jane',
    'Philip',  'Lori',
    'Vincent',  'Mildred',
    'Gabriel',  'Tiffany',
    'Bobby',  'Natalie',
    'Johnny',  'Abigail',
    'Howard',  'Kathy'];

  return {
    additionQuestions: groupAddition,
    subtractionQuestions: groupSubtractions,
    divisionQuestions: divisions,
    multiplicationQuestions: multiplications,
    commonNames: commonNames
  }
}

module.exports = QuestionGenerator;