// 1.	Write IIFE that replaces the first and the last element of the given array and 
// prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

var input=[4, 5, 11, 9];
(function(arr){
    var temp;
    temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;// zadnji dobija vrednost tempoarry gde smo sacuvali vrednost prvog elementa!!!
    
    console.log(arr); 
})(input);

// function sortArr(arr){
    
//     var temp=0;
//     for(var i=0;i<arr.length;i++){
//         for(var j=i;j<arr.length;j++){
//             if(arr[j]<arr[i]){//[1,2,3,4]
//                 temp = arr[j];
//                 arr[i]=arr[j]; // temp=1
//                 arr[i]=temp;//[4,2,3,4]
//                 arr[0]=arr[3];//4,2,3,1]
//             }
//         }arr[i]=arr[i]*2;
//     }returna arr;
// }console.log(sortArr(3,2,4,1));


// 2.	Write IIFE that calculates the surface area of the given rectangle with sides a 
// and b. 
// Input: 4  5
// Output: 20 
var result= (function(a,b){
       return a*b;
})(4,5);

 
// 3.	Write IIFE that replaces all appearances of the letters m or M with * and returns 
// the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

function replaceLetters(str,sign){
    var newStr='';
    var count=0;
    for(i=0;i<str.length;i++){
        if(str[i]=='m' || str[i]=='M'){
            count++;
            newStr+=sign;
        }else newStr+=str[i];
    } return newStr+', '+count;
}console.log(replaceLetters('prograMming','*'));


// 4.	Write a function with parameters name and surname that returns a function that 
// suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com
function email(str){
    var newStr='';
    for(var i=0;i<str.length;i++){
        if(str[i]==' '){
            newStr+='.';
        }else{
            newStr+=str[i];
        }
    }return newStr+'@gmail.com'
}console.log(email('pera peric'));





// 5.	Write a function that returns a function that calculates a decimal value of the
// given octal number. 
// Input: 034
// Output: 28
var n=034;
(function(){
    console.log(parseInt(n,10));
}) ();



// 6.	Write a function that checks if a given string is valid password. The password
// is valid if it is at least 6 characters long and contains at least one digit. 
// The function should receive two callbacks named successCallback and errorCallback
// that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool!

function validPass(string){

}

// 7.	Write a function that filters elements of the given array so that they satisfy a 
// condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 

function returnOdd(arr){
    var newArr=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            newArr[newArr.length]=arr[i];
        }
    }return newArr;
}console.log(returnOdd([2, 8, 11, 4, 9, 3]));