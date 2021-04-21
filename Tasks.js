//.....Task 1...//

var x = 0;
var y = 1;

console.log(x + "\n" + y);

x = x + 3;
y = y + x;

console.log(x + "\n" + y);

//...................task 2.......................

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + 1 * 2;
var a = 1 + (1 * 2) / 2;
var b = (1 + 1 * 2) / 2;
console.log(x + "\n" + y + "\n" + z + "\n" + a + "\n" + b);

//task 3
function check65(a, b) {
  if ((a || b) === 65 || a + b === 65) {
    return true;
  }
  return false;
}

console.log(check65(65, 5));
console.log(check65(3, 45));

//...............................Task 4....................................//

function check3(a, b) {
  var remainder;
  var c = a + b;

  while (c > 0) {
    remainder = c % 10;

    while (remainder == 3) {
      c = c / 10;
      if ((a || b) === 3) return true;
    }

    return false;
  }
}
console.log(check3(3, 3));
console.log(check3(3, 10));

//.....................................Task 5...............................//
function AreaOfTriangle(a, b, c) {
  return (1 / 2) * (a + b + c);
}

console.log("The area of the triangle is " + AreaOfTriangle(5, 88, 7));

//......................................Task 6.................................//
function maxNum(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else if (c > a && c > b) return c;
}

console.log("The highest number is : " + maxNum(855, 89, 84));
//........................................Task 7.....................................//

function convertFahToCel(F) {
  var C = (F - 32) / 1.8;

  return C;
}

console.log(convertFahToCel(100) + " Celcius");

function convertCelToFah(C) {
  var F = C * 1.8 + 32;

  return F;
}

console.log(convertCelToFah(37.8) + " Fahrenheit");

//.......................Task8.........................../

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

//........................task 9.......................//

function realNum() {
  result = 0;

  for (i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      result += i;
      if (result === 233168) console.log(result);
    }
  }
}
realNum();

//......................................Task 10 ......................................................//

function printVowels(string) {
  for (i = 0; i < string.length - 1; i++) {
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
      console.log(string.charAt(i));
  }
}
printVowels("I love leArning");

//.................................Task 11..............................//

function commonLetters(string1, string2) {
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string1.charAt(i) == string2.charAt(j).replace(/\s/g, "")) {
        console.log(string1.charAt(i));
      }
    }
  }
}

commonLetters("let's see", "what's common");
