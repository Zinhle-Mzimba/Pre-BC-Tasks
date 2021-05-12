//Task 0.1

var x = 0;
var y = 1;

console.log(x + "\n" + y);

x = x + 3;
y = y + x;

console.log(x + "\n" + y);

//task 0.2

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + 1 * 2;
var a = 1 + (1 * 2) / 2;
var b = (1 + 1 * 2) / 2;
console.log(x + "\n" + y + "\n" + z + "\n" + a + "\n" + b);

// Task 0.3
function hello(name) {
  return "Hello " + name + "!";
}

console.log(hello("Zinhle"));

//task 0.4

function evenOrOdd(number) {
  if (number % 2 === 0) console.log("Even");
  else console.log("Odd");
}
evenOrOdd(87);
evenOrOdd(2);

//Task 0.5
function AreaOfTriangle(sideA, sideB, sideC) {
  semiPerimeter = (1 / 2) * (sideA + sideB + sideC);
  area = Math.sqrt(
    semiPerimeter *
      ((semiPerimeter - sideA) *
        (semiPerimeter - sideB) *
        (semiPerimeter - sideC))
  );
  return area;
}
console.log(
  "The area of the triangle is " + AreaOfTriangle(3, 4, 5) + "sq/units"
);

//Task 0.6
function maxNum(numA, numB, numC) {
  if (numA > numB && numB > numC) return numA;
  else if (numB > numA && numB > numC) return numB;
  else if (numC > numA && numC > numB) return numC;
}

console.log("The highest number is : " + maxNum(855, 89, 84));
//Task 0.7

function convertFahToCel(F) {
  var C = Math.floor((F - 32) / 1.8);

  return C;
}

console.log(convertFahToCel(100) + " Celcius");

function convertCelToFah(C) {
  var F = Math.floor(C * 1.8 + 32);

  return F;
}

console.log(convertCelToFah(37.8) + " Fahrenheit");

//Task 0.8

function convertNoToTime(number) {
  min = number % 60;
  hour = Math.floor(number / 60);

  if (hour <= 1 && min <= 1) {
    return hour + " hour, " + min + " minute";
  } else if (hour <= 1) {
    return hour + " hour, " + min + " minutes";
  } else if (min <= 1) {
    return hour + " hours, " + min + " minute";
  } else {
    return hour + " hours, " + min + " minutes";
  }
}
console.log(convertNoToTime(42));

//Task 0.9

function printVowels(string) {
  string = string.toLowerCase();
  var regexOfVowels = /[aeiou]/gi;

  var stringArray = string.match(regexOfVowels);

  console.log("the vowels in the string are : " + stringArray);
}
printVowels("I love leArning yoU");

//Task 0.10

function commonLetters(string1, string2) {
  common = [];
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (var i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) >= 0) {
      common.push(string1[i]);
    }
  }
  console.log("Common letters are : " + common);
}

commonLetters("cOmpAuters", "Houases");
