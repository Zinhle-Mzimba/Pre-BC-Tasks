 //.........................Task 1........................//

var x = 0 //initialize and declare x
var y = 1 //initialize and declare y

console.log(x + "\n" + y); //print x & y 

x = x + 3; //add 3 to the declared value of x
y = y + x; //add new value of x to exixting value of y

console.log(x + "\n" + y); //print x & y

//...................task 2.......................

//initialize and declare variables

var x = 1 + 1 * 2   //multiplied 1 by 2 and added 1
var y = (1 + 1) * 2 //added 1 + 1 then multiplied the sum by 2 
var z = 1 + ( 1 * 2 )  //added 1 with 1 multiplied by 2 (same as x)
var a =  1 + 1 * 2 / 2 //added 1 + 1 and multiplied by 1 (2/2)
var b =  (1 + 1 * 2 ) / 2 //multiplied 1 by 2 added 1 to the sum = 3 then divided by 2 = 1.5
console.log(x + "\n" + y + "\n" + z + "\n" +a + "\n" +b) //print values

//task 3
function check65(a,b)
{
// return  true if either a or b is strictly = 65 or the sum of a and b is strictly 55
if(((a || b) === 65) || ( (a+b) === 65 )){
    
    return true;
}
return false; //return false if check65 does not fulfil if statement
}

console.log(check65(65,5)); //check true
console.log(check65(3,45)); //check false


//...............................Task 4....................................//

    
    function check3(a,b) {
        
        var remainder;
        var c = a + b ;
        
        while( c > 0 ){
           
            remainder = c % 10
           
           while (remainder == 3  ){
                c = c / 10; 
                 if((a || b) === 3)
                    return true

            }

            return false
        }
    }
    console.log(check3(3,3)) //check false
    console.log(check3(3,10)) //check true

//.....................................Task 5...............................//
function AreaOfTriangle(a,b,c){

    return ((1/2)*(a+b+c));
}

console.log("The area of the triangle is " + AreaOfTriangle(5,88,7));

//......................................Task 6.................................//
function maxNum(a,b,c){

    if(a>b && a>c)
    return a;
    
    else if (b >a && b > c)
    return b;
    
    else if(c>a && c>b)
    return c;
}

console.log("The highest number is : " + maxNum(855,89,84)) //print maxnum

//........................................Task 7.....................................//

    function convertFahToCel(F)
    {
    var C = ((F -32)/1.8)

   return C
}

console.log(convertFahToCel(100) +  " Celcius")

function convertCelToFah(C)
{
var F = ( (C * 1.8 ) + 32)

return F
}

console.log(convertCelToFah(37.8) +  " Fahrenheit")

//.......................Task8.........................../ 

function convertNoToTime(a){

min =  a % 60 ; //use modulo division to get minuues
hour = (a - min) / 120 // from number subtract minutes and divide by 120
 
return min, hour ;
}
console.log(convertNoToTime(71)  + hour + " hour/s " + min + " minute/s ") //print out

//........................task 9.......................//

function realNum(){
result = 0;


for(i =  0 ; i < 1000 ; i++){ 

    if( i % 3 == 0 || i % 5 == 0) //only add numbers that are divisible by 3 or 5
    {
        result +=i; //add result
        if(result === 233168)
        console.log(result)
    }

} 
}
realNum();

//......................................Task 10 ......................................................//


function printVowels(){
var string = "I lOve Learning nEw stUff"

for (i =0; i< string.length ; i++) {
if(string.charAt(i) == 'a' || string.charAt(i) =='e' || string.charAt(i) =='i'|| string.charAt(i) == 'o' || string.charAt(i) == 'u'
 || string.charAt(i) == 'A' || string.charAt(i) == 'E' || string.charAt(i) == 'I' || string.charAt(i) == 'O' || string.charAt(i) == 'U')

 console.log("the vowels in the string are : " + string.charAt(i) )   

}

}
printVowels(); 

//.................................Task 11..............................//

function commonLetters(){

    var string1 = "let us see"
    var string2 = "what is common".replace(/\s/g,''); //remove white space
    
for(var i = 0; i < string1.length; i++){

    for(var j = 0; j < string2.length; j++){
        
        if(string1.charAt(i) == string2.charAt(j)){
        
            console.log("common letters are : " + string1.charAt(i));
        }
        }
    }
}

commonLetters();