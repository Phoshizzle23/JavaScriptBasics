⭐️Course Contents⭐️
0:00:00 Introduction

0:01:24 Running JavaScript

add page about:blank > hot shift ctrl L

0:04:23 Comment Your Code

0:05:56 Declare Variables

let num = 5;
const str = "Hello, world!";
var bool = true;

0:06:15 Storing Values with the Assignment Operator

let x;
x = 10;

0:11:31 Initializing Variables with the Assignment Operator
let num = 5;
let str = "Hello";
let bool = false;

0:11:58 Uninitialized Variables
let x;
console.log(x); // Output: undefined

0:12:40 Case Sensitivity in Variables
let firstName = "John";
let FirstName = "Jane";
console.log(firstName); // Output: "John"
console.log(FirstName); // Output: "Jane"

0:14:05 Basic Math
let x = 5;
let y = 3;
let z = x + y;
console.log(z); // Output: 8

0:15:30 Increment and Decrement
let x = 5;
x++; // equivalent to x = x + 1;
console.log(x); // Output: 6

0:16:22 Decimal Numbers
let num = 3.14;
console.log(num); // Output: 3.14

0:16:48 Multiply Two Decimals
let x = 2.5;
let y = 3.2;
let z = x * y;
console.log(z); // Output: 8.0

0:17:18 Divide Decimals
let x = 10.5;
let y = 2;
let z = x / y;
console.log(z); // Output: 5.25

0:17:33 Finding a Remainder
let x = 5;
let y = 2;
let z = x % y;
console.log(z); // Output: 1

0:18:22 Augmented Math Operations
let x = 5;
x += 2; // equivalent to x = x + 2;
console.log(x); // Output: 7

0:21:19 Declare String Variables
let str = "Hello, world!";

0:22:01 Escaping Literal Quotes
let str = "She said, \"Hello!\"";
console.log(str); // Output: She said, "Hello!"

0:23:44 Quoting Strings with Single Quotes
let str = 'Hello, world!';
console.log(str); // Output: Hello, world!

0:25:18 Escape Sequences
let str = "First line\nSecond line";
console.log(str); // Output: 
                  // First line
                  // Second line

0:26:46 Plus Operator
let str1 = "Hello, ";
let str2 = "world!";
let str3 = str1 + str2;
console.log(str3); // Output: Hello, world!

0:27:49 Plus Equals Operator
let str1 = "Hello, ";
let str2 = "world!";
str1 += str2; // equivalent to str1 = str1 + str2;
console.log(str1); // Output: Hello, world!

0:29:01 Constructing Strings with Variables
let name = "John";
let age = 30;
let str = "My name is " + name + " and I am " + age + " years old.";
console.log(str); // Output: My name is John and I am 30 years old.

0:30:14 Appending Variables to Strings
let name = "John";
let str = "Hello, ";
str += name; // equivalent to str = str + name;
console.log(str); // Output: Hello, John

0:31:11 Length of a String
let str = "Hello, world!";
console.log(str.length); // Output: 13

0:32:01 Bracket Notation

let myString = "Hello World!";
console.log(myString[0]); // Output: "H"

0:33:27 Understand String Immutability

let myString = "Hello";
myString[0] = "J"; // This will not change the string to "Jello"
console.log(myString); // Output: "Hello"

0:34:23 Find the Nth Character
let myString = "Hello World!";
let nthCharacter = 4; // Find the 4th character in the string
console.log(myString[nthCharacter]); // Output: "o"

0:36:28 Word Blanks
function wordBlanks(noun, adjective, verb, adverb) {
  let result = "The " + adjective + " " + noun + " " + verb + " " + adverb + ".";
  return result;
}

console.log(wordBlanks("cat", "small", "ran", "quickly")); // Output: "The small cat ran quickly."

0:40:44 Arrays
let myArray = ["apple", "banana", "orange"];
console.log(myArray); // Output: ["apple", "banana", "orange"]

0:41:43 Nest Arrays
let myNestedArray = [["apple", 2], ["banana", 4], ["orange", 6]];
console.log(myNestedArray); // Output: [["apple", 2], ["banana", 4], ["orange", 6]]

0:42:33 Access Array Data
let myArray = ["apple", "banana", "orange"];
console.log(myArray[1]); // Output: "banana"

0:43:34 Modify Array Data
let myArray = ["apple", "banana", "orange"];
myArray[1] = "kiwi";
console.log(myArray); // Output: ["apple", "kiwi", "orange"]

0:44:48 Access Multi-Dimensional Arrays
let myNestedArray = [["apple", 2], ["banana", 4], ["orange", 6]];
console.log(myNestedArray[1][0]); // Output: "banana"

0:46:30 push()
let myArray = ["apple", "banana", "orange"];
myArray.push("kiwi");
console.log(myArray); // Output: ["apple", "banana", "orange", "kiwi"]

0:47:29 pop()
let myArray = ["apple", "banana", "orange"];
let lastElement = myArray.pop();
console.log(myArray); // Output: ["apple", "banana"]
console.log(lastElement); // Output: "orange"

0:48:33 shift()
let myArray = ["apple", "banana", "orange"];
let firstElement = myArray.shift();
console.log(myArray); // Output: ["banana", "orange"]
console.log(firstElement); // Output: "apple"

0:49:23 unshift()
let myArray = ["apple", "banana", "orange"];
myArray.unshift("kiwi");
console.log(myArray); // Output: ["kiwi", "apple", "banana", "orange"]

0:50:36 Shopping List
let shoppingList = [  ["apples", 3],
  ["bananas", 2],
  ["oranges", 4]
];

console.log(shoppingList); // Output: [["apples", 3],

0:51:41 Write Reusable with Functions
Example of a function that returns the sum of two numbers:
function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(5, 7)); // Output: 12


0:53:41 Arguments
Example of a function that takes an array of numbers as an argument and returns the sum:
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

0:55:43 Global Scope
Example of defining a global variable:
let globalVar = "Hello, world!";

function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // Output: Hello, world!

0:59:31 Local Scope

function myLocalScoper() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

console.log(myVar); // does not access myVar = 5 from top 
_________________________________________________________
1:00:46 Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
_________________________________________________________
1:02:40 Return a Value from a Function

1.function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

2.function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

3.function divideFive(num) {
    return num / 5;
}

console.log(divideFive(100));
_________________________________________________________
1:03:55 Undefined Value returned
1.var sum = 0;
function addThree() {
    sume = sum + 3;
}
console.log(addThree());
> undefined

2.function addFive(){
    sum += 5;
}
console.log(addFive());
> undefined
_________________________________________________________
1:04:52 Assignment with a Returned Value

var changed = 0;

function change(num) {
    return (num +5) /3;
}

changed = change(10);
console.log(changed);
console.log(change(5));

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed);
console.log(processArg(5));

VM3822:8 5
VM3822:9 3.3333333333333335
VM3822:19 2
VM3822:20 1.6
_________________________________________________________
1:05:52 Stand in Line - que

function nextInLine(arr, item) {

    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
VM4524:9 Before: [1,2,3,4,5]
VM4524:10 1
VM4524:11 After: [2,3,4,5,6]
_________________________________________________________
1:08:41 Boolean Values

function welcomeToBooleans() {
    return false;
}
_________________________________________________________
1:09:24 If Statements

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "no, its flase";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes";
    }
    return "No";    
}

console.log(trueOrFalse(true));
VM5305:15 Yes
_________________________________________________________
1:11:51 Equality Operators

1.function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}


console.log(testEqual(10));
VM5609:9 Not Equal

2.function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}


console.log(testEqual(12));
VM5633:9 Equal

3. function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
VM6346:8 Equal

4.function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));
VM6716:8 Not Equal

Strict operators: 
1.function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}


console.log(testStrict(3));
VM5950:9 Equal

2.function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}


console.log(testStrict("3"));
VM5985:9 Not Equal

3. function testStrictNotEqual(val) {

    if (val !== 17) {


        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));
VM7110:11 Not Equal
_________________________________________________________
1:17:05 Comparisons with the Logical and Operator

1.function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));
VM7531:12 10 or Under

2.function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(10)); // < looks like the letter L - for less than!!!
VM7959:13 10 or Over

3.function testLessThan(val) {
    if (val) {
        return "Under 25";
    }
    if (val) {
        return "Under 55";
    }

    return "55 or Over";
}

console.log(testLessThan(10));
VM8319:12 Under 25

4.function testLessOrEqual(val) {
    if (val) {
        return "Smaller Than ot Equal to 12";
    }
    if (val) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10));
VM8823:11 Smaller Than ot Equal to 12
_________________________________________________________
1:19:17 And / Or Operators - check if 2 things a equal at the same time

function testLogicalAnd(val) {


    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(10));
VM9299:11 No

2. function testLogicalOr(val) {


    if (val < 10 || val > 20) {
        return "Outside";
    }
    
    return "Inside";
}

console.log(testLogicalOr(10));
VM9702:11 Inside

_________________________________________________________
1:21:37 Else Statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
 
    return result;
}

console.log(testElse(100));
VM10237:13 Bigger than 5
_________________________________________________________
1:22:27 Else If Statements - chain else statments

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller Than 5";
    } else {
        return "Bettween 5 and 10";
        }
}

console.log(testElseIf(7));
VM10726:11 Bettween 5 and 10
_________________________________________________________
1:23:30 Logical Order in If Else Statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }   else if (val < 10) {
        return "Less than 10";
    }   else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));
VM11208:11 Less than 5
_________________________________________________________
1:24:45 Chaining If Else Statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }   else if (num < 10) {
        return "Small";
    }   else if (num < 15) {
        return "Medium";
    }   else if (num < 20) {
        return "Large";
    }   else {
        return "Huge";
    }
}

console.log(testSize(100));
VM11893:15 Huge
_________________________________________________________
1:27:45 Golf Code

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }   else if (strokes <= par - 2) {
        return names[1]
    }   else if (strokes == par - 1) {
        return names[2]
    }   else if (strokes == par) {
        return names[3]
    }   else if (strokes == par + 1) {
        return names[4]
    }   else if (strokes == par + 2) {
        return names[5]
    }   else if (strokes >= par + 3) {
        return names[6]
    }
}



console.log(golfScore(5, 8));
VM13136:22 Go Home!
_________________________________________________________
1:32:15 Switch Statements
1.function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
            
    }

    return answer;
}

console.log(caseInSwitch(1));
VM13772:22 alpha

2.function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff("d"));

3.function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        default:
            answer = "WTF!";
            break;
    }

    return answer;
}

console.log(sequentialSizes(9));
VM2149:27 High

4.function chainToSwitch(val) {
    var answer = "";

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
       case 42:
            answer = "The Answer";
            break;
       case 1:         
           answer = "There is no #1";
            break;
       case 99: 
        answer = "Missed me by this much!";
            break;
       case 7: 
        answer = "Ate Nine";
            break;
        default:
            answer = "WTF!";
            break;
    }

    return answer;
}

console.log(chainToSwitch(7));
VM3600:28 Ate Nine
_________________________________________________________
1:41:11 Returning Boolean Values from Functions
function isLess(a, b) {

    return a < b;
}

console.log(isLess(100, 15));
VM4014:6 false
_________________________________________________________
1:42:20 Return Early Pattern for Functions

function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }


 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));   
}

console.log(abTest(2,2));


VM4505:11 8
undefined
function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }


 return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));   
}

console.log(abTest(-8,2));


VM4545:11 undefined
_________________________________________________________
1:43:38 Counting Cards

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "bet"
    }
    
    return count + " " + holdbet;
}


cc(2); cc(3); cc(7); cc("k"); cc("A");
console.log(cc(4));
VM5433:31 2 bet

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "bet"
    }
    
    return count + " " + holdbet;
}


cc(2); cc("k"); cc(10); cc("k"); cc("A");
console.log(cc(4))
VM5478:31 0 Hold
_________________________________________________________
1:49:11 Build Objects

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "firends": []   
};

console.log(ourDog.name);

VM6060:15 Camper
_________________________________________________________
1:50:46 Dot Notation

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);
VM6549:10 ballcap
VM6549:11 jersey
undefined
var shoesValue = testObj.shoes;
console.log(shoesValue);
VM6690:2 cleats
_________________________________________________________
1:51:33 Bracket Notation

var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj2["an entree"];
var sideValue = testObj2["my side"];
var drinkValue = testObj2["the drink"];

console.log(entreeValue);
console.log(sideValue);
console.log(drinkValue);

VM7462:11 hamburger
VM7462:12 veggies
VM7462:13 water
_________________________________________________________
1:52:47 Variables

var testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
};


var playerNumber = 16;
var player = testObj3[playerNumber];
console.log(player);

VM7830:10 Montana
_________________________________________________________
1:53:34 Updating Object Properties

var ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog2.name = "Happy Camper";


var myDog2 = {
    "name": "Coder",
    "Legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog2.name = "Happy Coder";

console.log(ourDog2.name);
console.log(myDog2.name);
VM899:20 Happy Camper
VM899:21 Happy Coder
_________________________________________________________
1:54:30 Add New Properties to Object

var ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog2.bark = "bow-wow";


var myDog2 = {
    "name": "Coder",
    "Legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog2.bark = "Meow";


'Meow'
console.log(ourDog2);
VM1140:1 {name: 'Camper', legs: 4, tails: 1, friends: Array(1), bark: 'bow-wow'}
undefined
console.log(myDog2);
VM1174:1 {name: 'Coder', Legs: 4, tails: 1, friends: Array(1), bark: 'Meow'}
_________________________________________________________
1:55:19 Delete Properties from Object

1. var ourDog2 = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

console.log(ourDog2);
VM1350:9 {name: 'Camper', legs: 4, tails: 1, friends: Array(1), bark: 'bow-wow'}
undefined
delete ourDog2.bark
true
console.log(ourDog2);
VM1468:1 {name: 'Camper', legs: 4, tails: 1, friends: Array(1)}

2. var myDog2 = {
    "name": "Coder",
    "Legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
undefined
console.log(myDog2);

VM1576:1 {name: 'Coder', Legs: 4, tails: 1, friends: Array(1)}
undefined

delete myDog2.name;
true

console.log(myDog2);
VM1661:1 {Legs: 4, tails: 1, friends: Array(1)}
_________________________________________________________
1:55:54 Objects for Lookups

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];

    return result;
    
}

console.log(phoneticLookup("alpha"))

VM3031:18 Adams
_________________________________________________________
1:57:43 Testing Objects for Properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleight"
        
};

function checkObj(checkProp) {
    
    if (myObj.hasOwnProperty(checkProp)) {
        return myDog2[checkProp];
    }   else {
        return "Not Found"
    }

    return "Change Me";
}

console.log(checkObj("hello"));

VM3652:19 Not Found

_________________________________________________________
1:59:15 Manipulating Complex Objects

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "LP",
            "8T"
        ],
        "gold": true
    }, 
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "CD",
            "YT Vid"
        ],
        "gold": false
    }
    
];
_________________________________________________________
2:01:00 Nested Objects
_________________________________________________________
2:01:53 Nested Arrays
1.var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
            },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
VM4989:15 maps

2.var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];


var secondTree = myPlants[1].list[1];

console.log(secondTree);
VM5560:23 pine
_________________________________________________________
2:03:06 Record Collection

var collection = {
    "2548": {
        "ablum": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Band Name"
        ]
    },
    "2468": {
        "ablum": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
    "ablum": "",
        "artist": "Robert Palmer",
        "tracks": []
            
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }   else if (prop === "track") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }   else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
VM7584:43 
{1245: {…}, 2468: {…}, 2548: {…}, 5439: {…}}
1245
: 
{ablum: '', artist: 'Robert Palmer', tracks: Array(0)}
2468
: 
{ablum: '1999', artist: 'Prince', tracks: Array(2)}
2548
: 
{ablum: 'Slippery When Wet', artist: 'Bon Jovi', tracks: Array(2)}
5439
: 
{album: 'ABBA Gold', artist: 'ABBA'}
[[Prototype]]
: 
Object

2. updateRecords(2468,"tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));
VM7733:2 
{1245: {…}, 2468: {…}, 2548: {…}, 5439: {…}}
1245
: 
{ablum: '', artist: 'Robert Palmer', tracks: Array(0)}
2468
: 
{ablum: '1999', artist: 'Prince', tracks: 'test'}
2548
: 
{ablum: 'Slippery When Wet', artist: 'Bon Jovi', tracks: Array(2)}
5439
: 
{album: 'ABBA Gold', artist: 'ABBA'}
[[Prototype]]
: 
Object
_________________________________________________________
2:10:15 While Loops

let myArray2 = [];

var i = 0;
while(i < 10) {
    myArray2.push(i);
    i++;
}

console.log(myArray2);
VM8339:9 (10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
_________________________________________________________
2:11:35 For Loops

var ourArray3 = [];
for (var i = 0; i < 5; i++) {
    ourArray3.push(i);
}

console.log(ourArray3);


VM8642:6 (5) [0, 1, 2, 3, 4]
_________________________________________________________
2:13:56 Even/Odd Numbers With a For Loop

Even - 

var ourArray4 = [];

for (var i = 0; i < 10; i +=2) {
    ourArray4.push(i);
}

console.log(ourArray4);
VM9356:7 (5) [0, 2, 4, 6, 8]

Odd - 

myArray4 = [];
for (var i = 1; i < 10; i += 2) {
    myArray4.push(i);
}
console.log(myArray4);
VM9980:5 (5) [1, 3, 5, 7, 9]
_________________________________________________________
2:15:28 Count Backwards With a For Loop

var ourArray100 = [];
for (let i = 10; i > 0; i -= 2) {
    ourArray100.push(i);
}

console.log(ourArray100);

VM10940:6 (5) [10, 8, 6, 4, 2]

var myArray100 = [];
for (let i = 9; i > 0; i -= 2) {
    myArray100.push(i);
}

console.log(myArray100);
VM13:6 (5) [9, 7, 5, 3, 1]
_________________________________________________________
2:17:08 Iterate Through an Array with a For Loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i ++) {
    ourTotal += ourArr[i];
}

console.log(ourTotal);

2. var myArr = [2,3,4,5,6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i ++) {
    myTotal += myArr[i];
}

console.log(myTotal);
VM794:8 20
_________________________________________________________
2:19:43 Nesting For Loops

function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i ++) {
        for (var j = 0; j <arr[i].length; j ++) {
            product *= arr[i][j];
        }
    }

    return product;
} 

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);
VM1420:15 5040
_________________________________________________________
2:22:45 Do...While Loops

var myArray33 = [];
var i = 10;

 do {
    myArray33.push(i);
    i++;
}   while (i < 5)

console.log(i, myArray33);
_________________________________________________________
2:24:12 Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
            {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
            {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487346543",
        "likes": ["Intriguing Cases", "Voilin"]
    },
            {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JabaScript", "Gaming", "Foxes"]
    },
];


function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i ++) {
        if(contacts[i].firstName == name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact found!";
}


var data = lookUpProfile("Akira", "likes");

console.log(data);
VM1867:41 (3) ['Pizza', 'Coding', 'Brownie Points']
_________________________________________________________
2:28:18 Random Fractions and Whole Numbers

1. function randomFraction() {
 
    
    return Math.random();           
}

console.log(randomFraction());




VM2191:7 0.4586788497379488

2.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomeWholeNum() {

    return Math.floor(Math.random() * 10);
    
}

console.log(randomeWholeNum());

3.
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var ourRandom = ourRandomRange(1, 9);

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(ourRandom);
console.log(myRandom);
VM3770:15 7
VM3770:16 8
_________________________________________________________
2:31:46 parseInt Function
1. function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("56"));

2. from binary to dec

function convertToInteger(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"));
VM4876:5 19
_________________________________________________________
2:33:29 Ternary Operator

1.
// condition ? statement-if-ture : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;

    
}

console.log(checkEqual(1, 2));

VM5451:9 false

2. 

_________________________________________________________
2:34:57 Multiple Ternary Operators

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));
VM5793:5 positive
VM5793:6 negative
VM5793:7 zero
_________________________________________________________
2:36:57 var vs let

"use strict" // up top of JS page to catch errors 

var catName = "Matt" // can be redeclared 
undefined
let catName = "Bill" // can NOT be redeclared 
VM5902:1 Uncaught SyntaxError: Identifier 'catName' has already been declared

Scope: 
Var - 
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

VM6566:6 Block scope i is:  block scope
VM6566:8 Function scope i is:  block scope
'block scope'

let - 
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

VM6592:6 Block scope i is:  block scope
VM6592:8 Function scope i is:  function scope
'function scope'

note: a "Block" is anything inside "{}" 
_________________________________________________________
2:41:32 const Keyword

1. function printManyTimes(str) {
    "use strict"

    var sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    } 
        
}

printManyTimes("freeCodeCamp");

6VM7407:9 freeCodeCamp is amazing!

2. 
function printManyTimes(str) {
    "use strict"

    const sentence = str + " is cool!";

    sentence = str + " is amazing!";

    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    } 
        
}

printManyTimes("freeCodeCamp");

VM7428:6 Uncaught TypeError: Assignment to constant variable.
    at printManyTimes (<anonymous>:6:14)
    at <anonymous>:14:1
printManyTimes @ VM7428:6
(anonymous) @ VM7428:14

3. 
function printManyTimes(str) {
    "use strict"

    const SENTENCE = str + " is cool!";

    
    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    } 
        
}

printManyTimes("freeCodeCamp");

6VM7497:8 freeCodeCamp is cool!
_________________________________________________________
2:43:40 Mutate an Array Declared with const

const s = [5, 7, 2];

function enditInPlace() {
    "use strict";

    //s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    
}

enditInPlace();

console.log(s);

VM7870:15 (3) [2, 5, 7]
_________________________________________________________
2:44:52 Prevent Object Mutation

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);
    
    try {
        MATH_CONSTANTS.PI = 99;
    }   catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);
VM8423:12 TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    at freezeObj (<anonymous>:10:27)
    at <anonymous>:17:12
VM8423:19 3.14
_________________________________________________________
2:47:17 Arrow Functions

1. const MAGIC = () => new Date;
console.log(MAGIC());

VM8934:2 Wed Apr 26 2023 13:10:20 GMT+1000 (Australian Eastern Standard Time)

2. 
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));

VM9283:5 (5) [1, 2, 3, 4, 5]

changed to with arrow func:

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));
VM9646:3 (5) [1, 2, 3, 4, 5]

3. Higher order func with arrows

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredInt = arr;
    return squaredInt;
};

const squaredInt = squareList(realNumberArray);
console.log(squaredInt);
VM10100:9 (8) [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
----------------------------------------------------------------
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredInt;
};

const squaredInt = squareList(realNumberArray);
console.log(squaredInt);
VM10327:9 (3) [16, 1764, 36]

_________________________________________________________
2:53:04 Default Parameters

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));
VM10765:7 7
VM10765:8 6
_________________________________________________________
2:54:00 Rest Operator

const sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2, 3));
-------------------------
With rest operator:

const sum = (function() {
    return function sum(...args) {
        //const args = [ x, y, z ]; this is not needed now bitch!!!
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2, 3, 4));
VM11417:7 10
_________________________________________________________
2:55:31 Spread Operator

1.1 const arr1 = ["JAN","FEB","MAR","APR","MAY"];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = "potato"
})();

console.log(arr2);
VM11787:8 (5) ['potato', 'FEB', 'MAR', 'APR', 'MAY']

1.2 const arr1 = ["JAN","FEB","MAR","APR","MAY"];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "potato"
})();

console.log(arr2);
VM11809:8 (5) ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
_________________________________________________________
2:57:18 Destructuring Assignment

var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : a, y : b, z :c } = voxel;

const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemp) {
    "use strict";

    const { tomorrow : tempOfTomorrow } = avgTemp;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMP));
VM12657:22 79
_________________________________________________________
3:00:20 Destrucuring Assignment with Nested Objects

1. const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min:73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";


const { tomorrow : { max : maxOfTomorrow }} = forecast;

return maxOfTomorrow;

}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
VM642:16 84.6

2.Use Destructuring Assignment to assign Varibale from arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);


let a = 8, b = 6;
(() => {
    "use strict";
   [a, b] = [b, a] 
})();

console.log(a);
console.log(b);
VM1130:2 1 2 4
VM1130:11 6
VM1130:12 8

3. 
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {


    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
VM1610:10 (8) [3, 4, 5, 6, 7, 8, 9, 10]
VM1610:11 (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

4. 
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));
VM2352:16 {max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, …}
VM2352:17 28.015
_________________________________________________________
3:06:39 Template Literals

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"], // changed "=" to "-"
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="test-warning">${arr[i]}</li>`); // corrected syntax
  }

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);

VM3995:10 Hello, my name is Zodiac Hasbro!
I am 56 years old.
VM3995:29 (3) ['<li class="test-warning">no-var</li>', '<li class="test-warning">var-on-top</li>', '<li class="test-warning">linebreak</li>']

_________________________________________________________
3:10:43 Simple Fields

1.
const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender,
    };
    
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

VM6009:10 {name: 'Zodiac Hasbro', age: 56, gender: 'male'}

2.
const createPerson = (name, age, gender) => ( { name, age, gender } );
console.log(createPerson("Zodiac Hasbro", 56, "male"));

VM6093:2 {name: 'Zodiac Hasbro', age: 56, gender: 'male'}
_________________________________________________________
3:12:24 Declarative Functions

1.
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
VM6475:10 3

2. Shorter syntax

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
VM6494:10 3
_________________________________________________________
3:12:56 class Syntax

1.
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet)

VM6892:7 Jupiter

2.
class SpaceShuttle { 
constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}
    

var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet)

3.
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
_________________________________________________________
3:15:11 getters and setters

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer(){
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32)
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
VM8783:35 26
_________________________________________________________
3:20:25 import and export
----------
index.html
----------


----------
index.js
----------
import { capitalizeString } from "./string_function"

const cap = capitalizeString("hello!");

console.log(cap);


----------
string_fuction.js
----------

export const capitalizeString = str => str.toUpperCase()
_________________________________________________________

----------
index.html
----------

----------
index.js
----------
const capitalizeString = str => {
	return string.charAt(0).toUpperCase + string.slice(1); 
}

export {c capitalizeString };

export const foo = "bar";
export const bar = "foo";
_________________________________________________________

import * as capitalizeStrings from "capitalize_strings";
_________________________________________________________
export default method

export default function subtract(x,y) {return x - y;}
_________________________________________________________
import a default export

import subtact from "math_functions"

suntract(7,4);
