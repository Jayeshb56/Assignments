// 1. Comment Your JavaScript Code :
//  Comments are lines of code that JavaScript will intentionally ignore. 
// This is an in-line comment
/* This is a
multi-line comment */

//2.Declare JavaScript Variables :
var ourName;

//3. Storing Values with the Assignment Operator :
var a;
a = 7;
console.log(a);

//4.  Assigning the Value of One Variable to Another :
var a;
a = 7;
var b;
b = a;
console.log(b)
 
//5. Initializing Variables with the Assignment Operator:
var a = 9;
console.log(a);

//6. Understanding Uninitialized Variables:
var a;
var b;
var c;
var a = 5;
var b = 10;
var c ="i am a String";
console.log(a , b , c);

//7.  Understanding Case Sensitivity in Variables:
var someVar = 5;
//console.log(SomeVar); this will show undefine because someVar and SomeVar is different

//8. Add Two Numbers with JavaScript:
myVar = 5+10;
console.log(myVar);

//9.  Subtract One Number from Another with JavaScript:
ourVar = 12-6;
console.log(ourVar);

//10. Multiply Two Numbers with JavaScript:
myVar = 13*13;
console.log(myVar);

//11. Divide One Number by Another with JavaScript:
myVar = 16/2;
console.log(myVar);

//12. Increment a Number with JavaScript:
var i = 3;
i++;
console.log(i);

//13.  Decrement a Number with JavaScript:
var i = 6;
i--;
console.log(i);

//14.  Create Decimal Numbers with JavaScript:
myDecimal = 5.7;
console.log(myDecimal);

//15.  Multiply Two Decimals with JavaScript:
myDec = 2.5 * 2.0;
console.log(myDec);

//16.  Divide One Decimal by Another with JavaScript:
myDiv = 8.8 / 4.0;
console.log(myDiv); 

//17. Finding a Remainder in JavaScript:
myRem = 11 % 3;
console.log(myRem);

//18. Compound Assignment With Augmented Addition:
var a = 5;
var b =10;
var c = "hello";
a += 1;
b += 5;
c += " Jayesh";
console.log(a,b,c);

//19.  Compound Assignment With Augmented Subtraction:
var a = 3;
var b = 10;
a -= 1;
b -= 5;
console.log(a,b);

//20. Compound Assignment With Augmented Multiplication:
var x = 5;
var y = 10;
x *= 3;
y *= 7;
console.log(x,y);

//21. Compound Assignment With Augmented Division:
var myvar = 15;
myvar /= 5;
console.log(myvar);

//22. Declare String Variables:
var myFirstName = "Jayesh";
var myLastName = "Borse";
console.log(myFirstName,myLastName);

//23. Escaping Literal Quotes in Strings:
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

//24. Quoting Strings with Single Quotes:
var goodStr = " \'Jake aska finn,\"lets\'s go!\"\'.";
console.log(goodStr);

//25.  Escape Sequences in Strings:
var a = "FirstLine\n\t\\Second line\nThirdLine";
console.log(a);

//26. Concatenating Strings with Plus Operator:
var myStr = "This is the start." + " This is the end.";
console.log(myStr);

//27. Concatenating Strings with the Plus Equals Operator:
var myStr = "This is the first sentence.";
myStr += " This is the second sentence.";
console.log(myStr);

//28. Constructing Strings with Variables:
var myName = "Jayesh Borse";
var myStr = "My name is " + myName + " and I am well";
console.log(myStr);

//29. Appending Variables to Strings:
var someAdjective = "Simple and easy";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

//30. Use Bracket Notation to Find the First Character in a String:
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(lastName[0])
console.log(firstLetterOfLastName);

//31.  Find the Length of a String:
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastName.length);
console.log(lastNameLength);

//32. Understand String Immutability:
var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

//33. Use Bracket Notation to Find the Nth Character in a String:
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

//34. Use Bracket Notation to Find the Last Character in a String:
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

//35. Use Bracket Notation to Find the Nth-to-Last Character in a String:
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

//36. Word Blanks:
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = "My " + myNoun + " is " + myAdjective + " and he " + myVerb + " " + myAdverb;
console.log(wordBlanks);

//37. Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["BMW",52,"ford","Audi","Volkswagen",89];
console.log(myArray);

//38. Nest one Array within Another Array:
var myArray = [["Developer",50],["Tester",20],["data science",5]];
console.log(myArray);

//39. Access Array Data with Indexes:
var myArray = [50,60,70];
myArray[0];
var myData = myArray[0];
console.log(myData)

//40. Modify Array Data With Indexes:
var myArray = [18,64,99];
myArray[0]= 45;
console.log(myArray);
