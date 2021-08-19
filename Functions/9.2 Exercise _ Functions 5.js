var global = 123;

var result= function myFunc() {
   console.log(global);
   var global = 1;
   console.log(global);
}

//myFunc();
console.log(result);

// 1.	Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
// function switchMinMax(arr){
//     var newArr=[];
//     var min=arr[0], max=arr[0];    
//     var indexOfMin=0, indexOfMax=0;
//     for (var i = 0; i < arr.length; i++){ 
//         if(arr[i] >= max ){          
//            max = arr[i];            
//            indexOfMax = i;            
//        }
//        if(arr[i]<min){
//         min=arr[i];
//         indexOfMin=i;

//     }
//     var temp = newArr[indexOfMin];
//     newArr[indexOfMin] = newArr[indexOfMax];
//     newArr[indexOfMax] = temp;
//     newArr[newArr.length]=arr[i];
//    }  
//     return newArr;
// }console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

function switchMinMax(arr){
    //var newArr=[];      
    var indexOfMin=0, indexOfMax=0, min=arr[0], max=arr[0];
    for (var i = 0; i < arr.length; i++){ 
        if(arr[i]>arr[indexOfMax]){
            indexOfMax=i;
            max=arr[i];
        }
        if(arr[i]<arr[indexOfMin]){
            indexOfMin=i;
            min=arr[i];
        }


   } arr[indexOfMax] =min;
   arr[indexOfMin]=max;
    return arr;
}console.log(switchMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));



// 2.	Use the following array to make a new one by dividing its values by 
// two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function calculator(arr){
    var newArr=[];
    if(arr[i]<0){
        arr[i]=20;
    }
    for (var i = 0; i < arr.length; i++){
        newArr[newArr.length]=(arr[i]/2)+5;
    }return newArr;
}console.log(calculator([ 3, 500, -10, 149, 53, 414, 1, 19 ]));

// 3.	Initialize two arrays. The first one should contain student names, 
// the second one the number of points for each student. Display students' 
// names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], 
// [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. 
// Micahel acquired 50 points and failed to complete the exam.

function studnts(str,p){
    var range;
    for (var i = 0; i < str.length; i++){
        if(p[i]>=51 && p[i]<=60){
            range=6;
        }
        if(p[i]>=61 && p[i]<=70){
            range=7;
        }
        if(p[i]>=71 && p[i]<=80){
            range=8;
        }
        if(p[i]>=81 && p[i]<=90){
            range=9;
        }
        if(p[i]>=91 && p[i]<=100){
            range=10;
        }


    }
    return studnts[i]+'acquired '+p[i]+' points and earned '+range;

}console.log(studnts([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],[ 50, 39, 63, 72, 99, 51, 83, 59 ]));

// 4.	(skip :))Sort a previously defined array. Place its sorted values into a 
// new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

	
// 5.	(skip :))Sort a previously defined array in a descending order and display 
// it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
	
// 6.	Write a program that uses a loop to add all the even numbers from 1 to 
// 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
// The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function evenNums(arr){
    var newArrEven=[] , newArrOdd=[];
    for (var i = 0; i <arr.length; i++){
        if(arr[i]>0 && arr[i]<=1000){
            if(arr[i]%2===0){
                newArrEven[newArrEven.length]+=arr[i];
            }else {
                newArrOdd[newArrOdd.length]+=arr[i];
            }
            
        }
    } return newArrEven-newArrOdd;
}console.log(evenNums([1,2,3,4,5,6]));


// 7.	Define a 10 element array. Take the first two letters from every string 
// (that has at least 2 letters) in the array and create a new string from them. 
// Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

	
// 8.	Write a program that takes a string and prints its characters out in reversed 
//  order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB
function printReversed(str){
    var newStr='';
    for(i=str.length-1;i>=0;i--){
        newStr+=str[i];        
    }return newStr
}console.log(printReversed('Belgrade Institute of Technology'));

// 9.	Write a program that displays all the combinations of two numbers between 1 and 7. 
// Don't display two of the same numbers at the same time. Display the number of possible 
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).


// 10.	Write a program that checks if the entered number is a prime number 
// (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false
	
// 11.	Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | 
// Output: true | false | true
function palindrom(str){
    var newStr='';
    for(i=str.length-1;i>=0;i--){
        newStr+=str[i]; 
        if(newStr===str[i]){
            
            return true;
        }else {
            return false;
        }
    }
}console.log(palindrom('eye'));
console.log(palindrom('Geek'));
console.log(palindrom('a nut for a jar of tuna'));


