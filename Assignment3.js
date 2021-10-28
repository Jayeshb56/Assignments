//Q1- Practice comparing different values
function compareEquality(a, b) {
    if (10 === '10') {
      return "Equal";
    }
    return "Not Equal";
  }
  
  var numw = compareEquality(10, "10");
  console.log(numw)

  //Q2- Comparison with the Inequality Operator
  function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  var Opt2 = testNotEqual('99');
  var Opt1 = testNotEqual(99);
  var Opt = testNotEqual("bob");
  console.log(Opt)
  console.log(Opt2)
  console.log(Opt1)

  //Q3- Comparison with the Strict Inequality Operator
  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  var test1 = testStrictNotEqual(10);
  console.log(test1);

  //Q4- Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) {  
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  var test2 = testGreaterThan(10);
  console.log(test2)

  //Q5- Comparison with the Greater Than Or Equal To Operator
  function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  var test5 = testGreaterOrEqual(10);
  console.log(test5)

  //Q6-Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if(val <= 12) {
    return "Smaller Than or Equal to 12";
    }
    if(val <= 24) {
    return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
    }
    console.log(testLessOrEqual(24));
    

  //Q7- Comparisons with the Logical And Operator
    function testLogicalAnd(val) {
    if(val >=25 && val <= 50) {
    return "Yes";
    }
    return "No";
    }
    console.log(testLogicalAnd(30));
 

  //Q8-Comparisons with the Logical Or Operator
  function testLogicalOr(val) {
    if(val <= 20 || val >= 10) {
    return "Inside";
    }
    return "Outside";
    }
    console.log(testLogicalOr(2));
    
  
  //Q9-Introducing Else Statements
  function testElse(val) {
    if(val <= 5) {
    return "5 or Smaller";
    }
    else {
    return "Bigger than 5"
    }
    }
    console.log(testElse(8));
    

  //Q10- Introducing Else If Statements
  function testElseIf(val) {
    if(val > 10) {
    return "Greater than 10";
    }
    else if(val < 5) {
    return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
    }
    console.log(testElseIf(7));

  //Q11-Introducing Else If Statements
  function testElseIf(val) {
    if(val > 10) {
    return "Greater than 10";
    }
    else if(val < 5) {
    return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
    }
    console.log(testElseIf(7));
    

  //Q12- Logical Order in If Else Statements
  function orderMyLogic(val) {
    if(val < 5) {
    return "Less than 5";
    }
    else if(val < 10) {
    return "Less than 10";
    }
    else {
    return "Greater than or equal to 10";
    }
    }
    console.log(orderMyLogic(12));
    

  //Q13-Chaining If Else Statements
  function testSize(num) {
    if(num < 5) {
    return "Tiny";
    }
    else if(num < 10) {
    return "Small";
    }
    else if(num < 15) {
    return "Medium";
    }
    else if(num < 20) {
    return "Large";
    }
    else {
    return "Huge";
    }
    }
    console.log(testSize(7));

  //Q14- Golf Code
  function golfScore(par, strokes) {
    if (strokes == 1) {
    return "Hole-in-one!";
    }
    else if (strokes <= par - 2) {
    return "Eagle";
    }
    else if (strokes == par - 1) {
    return "Birdie";
    }
    else if (strokes == par) {
    return "Par";
    }
    else if (strokes == par + 1) {
    return "Bogey";
    }
    else if (strokes == par + 2) {
    return "Double Bogey";
    }
    else if (strokes >= par + 3) {
    return "Go Home!";
    }
    }
    console.log(golfScore(4, 5));

  //Q15-Selecting from Many Options with Switch Statements
  function caseInSwitch(val){
    switch(val) {
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
    }
    }
    console.log(caseInSwitch(2));

  //Q16-Adding a Default Option in Switch Statements
  function switchOfStuff(val) {
    switch(val) {
    case 'a':
    return "apple";
    break;
    case 'b':
    return "bird";
    break;
    case 'c':
    return "cat";
    break;
    default:
    return "stuff";
    }
    }
    console.log(switchOfStuff('c'));

  //Q17- Multiple Identical Options in Switch Statements
  function sequentialSizes(val) {
    switch(val) {
    case 1:
    case 2:
    case 3:
    return "Low";
    break;
    case 4:
    case 5:
    case 6:
    return "Mid";
    break;
    case 7:
    case 8:
    case 9:
    return "High";
    break;
    }
    }
    console.log(sequentialSizes(1));

  //Q18- Replacing If Else Chains with Switch
  function chainToSwitch(val) {
    switch(val) {
    case "bob":
    return "Marley";
    break;
    case 42:
    return "The Answer";
    break;
    case 1:
    return "There is no #1";
    break;
    case 99:
    return "Missed me by this much!";
    break;
    case 7:
    return "string Ate Nine";
    break;
    case "John":
    return "";
    break;
    case 156:
    return "";
    break;
    }
    }
    console.log(chainToSwitch(1));
    

  //Q19- Returning Boolean Values from Functions
  function isLess(a,b) {
    return a < b;
    }
    console.log(isLess(15,10));
    

  //Q20-Return Early Pattern for Functions
  function abTest(a, b) {
    if(a < 0 || b < 0){
    return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    console.log(abTest(3,3));