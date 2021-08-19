
// 1.	Write a program to insert a string within a string at a particular position 
// (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertString(str,s,pos){
    var newStr=''; 
    pos=pos ||0;                 //!!!!!!!AKO NIJE DATA VREDNOST STAVI NULU
    for(var i=0;i<str.length;i++){        
        if(i==pos){
            newStr+=s
        }        
        newStr+=str[i];
    }
return newStr;
}
console.log(insertString("My random string",'JS ',0));
console.log(insertString("My random string",'JS ',10));


// 2.	Write a program to join all elements of the array into a string skipping elements 
// that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElemIntoStr(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(isFinite(arr[i]) && arr[i]!==null){
            newArr[newArr.length]=arr[i];
        }
    }return newArr
}console.log(joinElemIntoStr([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//--------------------- iVAN
function joinElemIntoStr(arr){
    var newStr='';
    for(var i=0;i<arr.length;i++){
        if(arr[i] && arr[i]!==Infinity || arr[i]===0){   
            newStr+=arr[i];
        }
    }return newStr;
}console.log(joinElemIntoStr([NaN, 0, 15, false, -22, '', undefined, 47, null]));



// 3.	Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterOutFalsy(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(!(!!arr[i]===false)){
            newArr[newArr.length]=arr[i];
        }
    }return newArr;
}console.log(filterOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
//------------------------IVAN
function filterOutFalsy(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]){
            var lastIndex=newArr.length
            newArr[lastIndex]=arr[i];
        }
    }return newArr;
}console.log(filterOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverseNum(str){
    var newStr='';
    for (var i = str.length - 1; i >= 0; i--){
        newStr+=str[i];
    }
    return newStr;
}
console.log(reverseNum('12345'));
//-----------------------IVAN
function reverseNum(num){
    var reversed=0;
    var isNegative=num<0;
    if(isNegative){
        num=num*-1;
    }
    while(num>0){
        var lastDigit=num%10;
        reversed=reversed*10+lastDigit;
        num=num-lastDigit;
        num=num/10;
    }
 
    return isNegative ? (reversed *-1):reversed;
}
console.log(reverseNum(12345));



// 5.	Write a function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

// function getLastElem(arr,n){
//     var newArr=[];
//     if(n==null){
//         return newArr[newArr.length-1];
//     }
//     for(var i=0;i<arr.length;i++){
//         if(n==i){
//             for(var j=0; j<n;j++){
//                 newArr[newArr.length]=arr[arr.length-j];
//             }            
//         }
//     }
// return newArr;
// }
// console.log(getLastElem([7, 9, 0, -2]));
// console.log(getLastElem([7, 9, 0, -2],2));
// console.log(getLastElem([7, 9, 0, -2],3));

//---------
function getLastNElem(arr,n){
    n=n||1;                   //!!!!!!!!!!!! AKO NIJE DATA VREDNOST ONDA 1
    var newArr=[];
    if(n===undefined){
        return arr[arr.length-1];
    }
    for(var i=arr.length-n;i<=arr.length-1;i++){
        //console.log(i,arr[i],newArr);
        newArr[newArr.length]=arr[i];
    
}
return newArr;
}
console.log(getLastNElem([7, 9, 0, -2]));
console.log(getLastNElem([7, 9, 0, -2],2));
console.log(getLastNElem([7, 9, 0, -2],3));
//--------------------ivan
function getLastNElem(arr,n){
    n=n||1;                   //!!!!!!!!!!!! AKO NIJE DATA VREDNOST ONDA 1
    var newArr=[];
    var lastIndex=arr.length-1;
    var startingPoint=arr.length-n;

    if(n>=arr.length){
        return arr;
    }

    for(var i=startingPoint;i<=lastIndex;i++){
        var firstFreeIndex=newArr.length;
        
        newArr[newArr.length]=arr[i];    
}
return newArr;
}
console.log(getLastNElem([7, 9, 0, -2]));
console.log(getLastNElem([7, 9, 0, -2],2));
console.log(getLastNElem([7, 9, 0, -2],3));

// 6.	Write a function to create a specified number of elements with pre-filled numeric 
// value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function preFilledValue(n,x){
    var newArr=[]; 
    
    if(x==undefined){      //x=x||null;     
        x=null;
    }
    for(var i=0;i<n;i++){          
            newArr[newArr.length]=x;  // ili newArr[i]=x;
        }        
    return newArr;
}
console.log(preFilledValue(6,0));
console.log(preFilledValue(2,'none'));
console.log(preFilledValue(2));


// 7.	Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer 
// that is equal to the sum of its proper positive divisors, that is, the sum of its positive 
// divisors excluding the number itself (also known as its aliquot sum). 
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive
// divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.

function isPerfect(num){
    var sumOfDivs=0;

    for(var i=1;i<num;i++){
        if(num%i===0){
            console.log(i);
            sumOfDivs+=i;
        }
    }
    if(num===sumOfDivs){
        console.log(num+" is a perfect number");
    }else{
        console.log(num+" is NOT a perfect number");
    }
}
isPerfect(28);
// 8.	Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

var finfWord=function(str, wordToFind){
    var count=0;
    var currWord='';
    str=str+' ';

    //extract word from string
    for(var i =0; i<str.length; i++){
        var currChar=str[i];
        //console.log(currChar,i,str.length);
        //fox,==fox
        // URADI SA SWITCHem!!
        if(currChar==' ' || currChar==="," ||currChar==="," ||currChar==="." ||currChar==="?" ||currChar===":"||currChar==="" ){
            if(currWord===wordToFind){
                count++;
            }
            currWord='';
        }else{
            currWord+=currChar;       

        }
    }
    //return smth from function
    return wordToFind+' was found '+ count+' times.';
};
console.log(finfWord('The quick fox, brown fox', 'fox'));  

//1 iteracija: currWord=''; inicijalno prazan string ne znamo sta ce biti rec
//currChar='T';
// pitamo se da li je  currChar jednak nikom od znakova: currChar('T')===' ' ==> false
//==>currWord se uveca za currChar('T')
// 2 iteracija:  i=1; currWord='T'; currChar='h'; currChar('h')===' '(false), currWord+=currChar('Th')
// 3 iteracija:  i=2; currWord='Th'; currChar='e'; currChar('e')===' '(false), currWord+=currChar('Th')
// 4 iteracija:  i=3; currWord='The'; currChar=' '; currChar(' ')===' '(true), currWord+=currChar('The')===wordToFind('fox')(false)=> counter=0, currWord='';

//---------------
function findWordInString(str,word){
    var comparation=0;
    var count=0;
    for(var i=0;i<str.length;i++){
        var currCharString=str[i];
        if(currCharString===word[0]){
            for(var j =i; j<i+word.length;j++){
                if(str[j]===word[j-i]){
                    comparation++;
                }
                if(comparation===word.length) count++;
            }
            comparation=0;
        }
    }
    return "the word was found "+count + " time(s)";
}
console.log(findWordInString('The quick fox, brown fox', 'fox'));

// 9.	Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

// function hideEmail(str){
//     var newStr='';
       
//             for(var j=0;j<3;j++){
//                 newStr+=str[j];            
        

//     }return newStr+'...@bgit.rs';
// }console.log(hideEmail("myemailaddress@bgit.rs"));

//-----------
// function hideMail (email) {
//     var hiddenMail = "";
//     var firstThree = "";
//     var lastcharacters = "";
//     for(var i = 0; i<3; i++) {
//         firstThree += email[i];
//     } 
//     for(var i = 0; i<email.length; i++) {
//         if(email[i] === "@") {
//             var pos = i;
//             for(var i = pos; i<email.length; i++) {
//                 lastcharacters += email[i]; 
//             }
//         }
//     }
//     hiddenMail = firstThree + "..." + lastcharacters;
//     return hiddenMail;
// }
// ​
// console.log(hideMail("nesto@gmail.com"));
//--------------
function hideMail(mail){
    var firstThree='';
    var restOfMail='';
    var indexOfAt;
    for(var i = 0; i<mail.length; i++) {
        if(i<3){
           firstThree+=mail[i];
        }
        if(mail[i]==='@'){
            indexOfAt=i;
        }
        if(indexOfAt){
            restOfMail+=mail[i];
        }      
    }
    return firstThree+'...'+restOfMail
}
console.log(hideMail('myemailaddress@bgit.rs'));
// 10.	Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
function mostFreq(arr){
    var maxCount=0;
    var el;
    for (var i =0; i<arr.length;i++){
        var next=arr[i];
        var nextCount = 1;
        for (var j =i+1; j<arr.length;j++){
            if(arr[j]===next){
                nextCount++;
            }
        }
        if(nextCount>maxCount){
            maxCount=nextCount;
            el=next;
        }
    }
    return el;
}
console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
