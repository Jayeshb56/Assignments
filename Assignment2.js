//Q1- Build JavaScript Objects
var myDog ={
    Name: "Shero",
    legs: 4,
    Tails: 1,
    Friends: ["Rocky","Roy","Rambo"]
};
console.log(myDog);

//Q2- Accessing Object Properties with Dot Notation
var testObj ={
    hat:"ballcap",
    Shirt:"jersey",
};
var hatvalue = testObj.hat;
var shirtvalue = testObj.Shirt;
console.log(hatvalue,shirtvalue);

//Q3- Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; 
  console.log(entreeValue,drinkValue);

  //Q4- Accessing Object Properties with Bracket Notation
  var testObj = {
    "an entree": "hamburger",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"]; 
  console.log(entreeValue,drinkValue);

  //Q5- Accessing Object Properties with Variables
  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  var playerNumber = 16;  
  var player = testObj[playerNumber];
  console.log(playerNumber,player);

  //Q6- Updating Object Properties
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Rocky","Roy"]
  };
  myDog.name="Happy Coder";
  console.log(myDog);

  //Q7-Add New Properties to a JavaScript Object
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["roy"]
  };
  myDog.bark = "woof";
  console.log(myDog);

  //Q8-Delete Properties from a JavaScript Object
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Roy","Rambo"],
    "bark": "woof"
  };
  delete myDog.tails;
  console.log(myDog);

  //Q9- Using Objects for Lookups
  function phoneticLookup(val) {
    var result = "";
    var lookup = {
      alpha:"Adams",
       
       bravo:"Boston",
        
      charlie:"Chicago",
        
      delta:"Denver",
        
      echo:"Easy",
        
      foxtrot:"Frank"
        
    }
   var result = lookup["alpha"];
    console.log(result);
  }
  phoneticLookup("charlie");
  
  //Q10- Testing Objects for Properties
    function checkObj(obj,prop){
        if(obj.hasOwnProperty(prop)){
            return obj[prop];
        }
        else
        return "Not Found";
    }
    console.log(checkObj({gift: "pony", pet: "kitten",bed: "sleigh"}, "house"));


  //Q11- Manipulating Complex Objects
  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    { artist: "John legend",
      title: "ALL of me",
      release_year: 2013,
      formats: ["CD", "HD", "MP4"]}
  ];
  console.log(myMusic);

  //Q12- Accessing Nested Objects
  var myStorage = {
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
  
  var gloveBoxContents = myStorage.car.inside["glove box"] ;
  console.log(gloveBoxContents);

  //Q13- Accessing Nested Arrays
  var myPlants = [
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
  
  //Q14- Record Collection
  var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if(prop!== "tracks"&& value !== ""){
      records[id][prop]=value;
    }
    else if(prop==="track" && records.hasOwnProperty(prop)===false){
      records.id[prop]=[];
      records.id[prop].push(value);
    }
    else if(prop==="track" && value!==""){
      records.id[prop].push(value);
    }
    else if (value===""){
      delete records.id[prop];
    }
    return records;
  }
  
  var rec = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(rec);

  //Q15- Iterate with JavaScript While Loops
  var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--
}
console.log(myArray)

//Q-16 Iterate with JavaScript For Loops
var myArray = [];
for(var i = 1; i <= 5; i++){
  myArray.push(i);
}
console.log(myArray);

//Q17- Iterate Odd Numbers With a For Loop
var myArray = [];
for(var i = 1;i < 10; i += 2){
myArray.push(i);
}
console.log(myArray);

//Q18- Count Backwards With a For Loop
var myArray = [];
for (var i = 9; i > 0; i -=2){
  myArray.push(i);
}
console.log(myArray);

//Q19-Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++ )
total += myArr[i];
console.log(total);

//Q20- Iterate Through an Array with a For Loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++ )
total += myArr[i];
console.log(total);

//Q21- Nesting For Loops
var arr = [[]];
function multiplyAll(arr) {
    var product = 1;
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
    return product;
  }
  multiplyAll([[1,2],[3,4],[5,6,7]]);

  console.log(multiplyAll(arr));
  
  
  //Q22- Replace Loops using Recursion
  function sum(arr, n) {
  if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }

console.log(sum([2,3,4,5],3));

  //Q23- Profile Lookup
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
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
for (var x =0; x<contacts.length; x++){
    if (contacts[x]["firstName"] === name){
      if (contacts[x].hasOwnProperty(prop)){
        return contacts[x][prop];
      } else {
      return "No such property";
      }
    }
    
  }
return "No such contact";
}
lookUpProfile("Akira", "likes");
console.log(lookUpProfile());

// Q23- Generate Random Fractions with JavaScript
function randomFraction() {
    return Math.random()
  }
  randomFraction(5);
  console.log(5);
  
  // Q24- Generate Random Whole Numbers with JavaScript
 var  randomWholeNum 
    randomWholeNum = Math.floor(Math.random()*10);
  
  console.log(randomWholeNum);
  
  
  
  // Q25-Generate Random Whole Numbers within a Range
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  console.log(randomRange(3,5));
  
  // Q26- Use the parseInt Function
  function convertToInteger(str) {
    return parseInt(str)
  }
  convertToInteger("56");
  console.log("Converted String 56 to integer value" + convertToInteger("56"));
  
  // Q27- Use the Conditional (Ternary) Operator
  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  checkEqual(1, 2);
  console.log(checkEqual(1,2));
  
  // Q28- Use Multiple Conditional (Ternary) Operators
  function checkSign(num) {
    return (num > 0) ? "positive"
      :(num < 0) ? "negative"
      : "zero"
    }
    checkSign(10);
    console.log(checkSign(10));
  
  // Q29- Use Recursion to Create a Countdown
  function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
  }
  console.log(countdown(3));
  
  // Q30- Use Recursion to Create a Countdown
  function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
  }
  console.log(countdown(5));
  
  // Q31- Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
  };
  console.log(rangeOfNumbers(1,6));

  // Q32- Use Recursion to Create a Countdown
  function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
  }
  console.log(countdown(7));
  
  // Q33- Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
  };
  console.log(rangeOfNumbers(2,9));


  


  