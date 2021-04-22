//.....Task 0.1...//

var x = 0;
var y = 1;

console.log(x + "\n" + y);

x = x + 3;
y = y + x;

console.log(x + "\n" + y);

//...................task 0.2.......................

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + 1 * 2;
var a = 1 + (1 * 2) / 2;
var b = (1 + 1 * 2) / 2;
console.log(x + "\n" + y + "\n" + z + "\n" + a + "\n" + b);

// Task 0.3
function hello(a) {
  return "Hello " + a + "!";
}

console.log(hello("Zinhle"));

//task 0.4

function evenOrOdd(a) {
  if (a % 2 === 0) console.log("Even");
  else console.log("Odd");
}
evenOrOdd(87);
evenOrOdd(2);

//.....................................Task 0.5...............................//
function AreaOfTriangle(a, b, c) {
  return (1 / 2)*(a + b + c);
}
console.log("The area of the triangle is " + AreaOfTriangle(3, 4, 5));

//......................................Task 0.6.................................//
function maxNum(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else if (c > a && c > b) return c;
}

console.log("The highest number is : " + maxNum(855, 89, 84));
//........................................Task 0.7.....................................//

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

//.......................Task 0.8.........................../

function convertNoToTime(a) {
  min = a % 60;
  hour = Math.floor(a / 60);

  if (hour <= 1 && min <= 1) {
    return hour + " hour, " + min + " minute";
  } else if (hour <= 1) {
    return hour + " hour, " + min + " minutes";
  } else if (min <= 1) {
    return hour + " hours, " + min + " minute";
  } else {
    return hour + " hours, " + min + " minutes";
  }

  return min, hour;
}
console.log(convertNoToTime(42));

//......................................Task 0.9 ......................................................//

function printVowels(string) {
  for (i = 0; i < string.length; i++) {
    if (
      string.charAt(i) == "a" ||
      string.charAt(i) == "e" ||
      string.charAt(i) == "i" ||
      string.charAt(i) == "o" ||
      string.charAt(i) == "u" ||
      string.charAt(i) == "A" ||
      string.charAt(i) == "E" ||
      string.charAt(i) == "I" ||
      string.charAt(i) == "O" ||
      string.charAt(i) == "U"
    )
      console.log("vowels in the string are: " + string.charAt(i));
  }
}
printVowels("I love leArning yoU");

//.................................Task 0.10..............................//

function commonLetters(string1, string2) {
  common = "";
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1.charAt(i) == string2.charAt(j).replace(/\s/g, "")) {
        console.log(string1.charAt(i));
      }
    }
  }
}

commonLetters("computers", "houses");
//it will only repeat a character if it appears on 2 differant words from the same string, uncomment the below code to see
// commonLetters("computer", "house puter")
