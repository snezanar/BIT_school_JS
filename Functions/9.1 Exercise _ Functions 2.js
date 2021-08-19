// 1.	Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function isString(input){
    if(typeof input=='string'){
        return true;
    }return false;
}console.log(isString("My random string"));

// 2.	Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlank(input){
    if(input==' '){
        return true;
    }return false;
}console.log(isBlank("My random string"));

// 3.	Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concat(input,count){
    if(typeof(count) == "undefined") {
        count =1;
      }
      var newInput='';
      for(i=0;i<count;i++){
        newInput+=input;
      }
    return newInput
}console.log(concat("Ha",3));

// 4.	Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2
function numOfLetter(str, letter){
    var count=0;
    for(i=0;i<str.length;i++){
        if(str[i]==letter){
            count++;
        }
    }return count;
}console.log(numOfLetter("My random string",'n'));

// 5.	Write a function to find the position of the first occurrence of a character 
// in a string. The result should be the position of character. If there are no 
// occurrences of the character, the function should return -1.
function firstOccurance(str, char){
    var pos=-1;
    for(i=0;i<str.length;i++){        
        if(str[i]===char){
            pos=i+1;
            break;
        }
    }return 'first occurance: '+pos;
}console.log(firstOccurance("My random string",'n'));

// 6.	Write a function to find the position of the last occurrence of a character
// in a string. The result should be in human numeration form. If there are no 
// occurrences of the character, function should return -1.
function lastOccurance(str, char){
    var pos=-1;
    for(i=str.length-1;i>=0;i--){        
        if(str[i]===char){
            pos=i+1;
            break;
        }
    }return 'last occurance: '+pos;
}console.log(lastOccurance("My random string",'n'));

// 7.	Write a function to convert string into an array. Space in a string should 
// be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]
function stringIntoArray(str){
    var arr=[];
    for(var i=0; i<str.length;i++){
        if(str[i]==' '){
            arr[arr.length]=null;
        }else{
            arr[arr.length]=str[i];        // !!!!!!!!!!!  BEZ +=   !!!!!!!!!!!
        }           

    }return arr;
}console.log(stringIntoArray("My random string"));


// 8.	Write a function that accepts a number as a parameter and checks if the number 
// is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no 
// positive divisors other than 1 and itself.
function isPrime(num){
    for(i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }return true;
}console.log(isPrime(11));

// 9.	 Write a function that replaces spaces in a string with provided separator. 
// If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function separator(str, sep){
    var newStr='';
    if(sep===undefined){
        sep='-';
    }
    for(i=0;i<str.length;i++){
        if(str[i]===' '){         // NEEEE ''  NEGO sa RAZMAKOM ' ' !!!!!!!!!!!!!!!!!!
            newStr+=sep;          // +=
        }else{
            newStr+=str[i];
        }

    }return newStr;
}console.log(separator("My random string",'_'));
console.log(separator("My random string",'+'));
console.log(separator("My random string"));
 
// 10.	 Write a function to get the first n characters and add “...” at the end of 
// newly created string.

function firstNChar(str,n){
    var newStr='';
    if(n>=str.length){
        return str;           // !!!!! edge case !!!!!!!
    }
    for(i=0;i<n;i++){
        newStr+=str[i];
    }return newStr+'...';
}console.log(firstNChar("My random string",4));

// 11.	 Write a function that converts an array of strings into an array of numbers. 
// Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
function stringIntoNums(arr){
    var newArr=[];

    for(i=0;i<arr.length;i++){
        if(arr[i]===null){
            continue;
        }
        if(arr[i]!==Infinity && arr[i]!==undefined){
            newArr[newArr.length]=arr[i]*1;   // pretvara (1e+3) u 1000  !!!!!!!!! 
        }
    }return newArr;
}console.log(stringIntoNums(["1", "21", undefined, "42", "1e+3", Infinity] ));
  
// 12.	 Write a function to calculate how many years there are left until retirement 
// based on the year of birth. Retirement for men is at age of 65 and for women at 
// age of 60. If someone is already retired, a proper message should be displayed.
function retirementCalculator(yeatOfBirth, gender){
    var currYear=2021;
    var yearsLeft;
    var yearsOld=currYear-yeatOfBirth;
    var message='already retired';
    if(gender==='male'&& yearsOld<65){
        yearsLeft=65-yearsOld;
        message= 'Years to ret.'+ yearsLeft;
    }else{
        if(yearsOld<60){
            yearsLeft=60-yearsOld;
            message= 'Years to ret.'+ yearsLeft;
        }
    }return message;
}console.log(retirementCalculator(1948,'male'));


// 13.	Write a function to humanize a number (formats a number to a human-readable 
// string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th
function humanizeNum(num){
    var str='';
    if(num%100>=11 && num%100<=13){
        str=num+'th';
    }else{
        switch (num%10){
            case 1:
                str=num+'st';
                break;
            case 2:
                str=num+'nd';
                break;   
            case 3:
                str=num+'rd';
                break;
            default:
                str=num+'th';
                break;  
                
        }
    }return str;
}console.log(humanizeNum(14));
