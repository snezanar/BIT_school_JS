//1.	Write a function that converts an array of strings into an array of numbers. 
// Filter out all non-numeric values.
//Input: ["1", "21", undefined, "42", "1e+3", Infinity]
//Output: [1, 21, 42, 1000]


function convertStringsToNums(niz){
    var transformedArray=[];

    //1.go through array of strings
    for(i=0;i<niz.length;i++){
        //2.check if value is valid number
        var isValid= isFinite(niz[i]);

        if(isValid){
            //3.if it is convert to number
            var number=parseFloat(niz[i]);
            //4. put it in the tr.Array
            transformedArray[transformedArray.length]=number;
        }
    }
    return transformedArray;
}
console.log(convertStringsToNums(["1", "21", undefined, "42", "1e+3", Infinity]));

//-----------
function arrayOfStringToNums(array){
    var newArray=[];
    for(i=0;i<array.length;i++){
        if(isFinite(array[i])){
            newArray[newArray.length]=parseFloat(array[i]);
        }       
           
        }    
    return newArray;
}
console.log(arrayOfStringToNums(["1", "21", undefined, "42", "1e+3", Infinity]));

// 2.	Write a program to join all elements of the array into a string skipping elements 
// that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function joinElemOfArrayIntoString(arr){
     var newStr='';
     
     for (var i=0;i<arr.length;i++){
         if(isFinite(arr[i])  &&   arr[i]!=undefined){     //Not NULL: arr[i]!=undefined
             newStr+=arr[i];
         }
     }
     return newStr;
    }
    console.log(joinElemOfArrayIntoString([NaN, 0, 15, false, -22, '', undefined, 47, null]))
     


// 3.	Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function filterOutFalsy(arr){
    var newArr=[];
    for (var i=0;i<arr.length;i++){
        if(!isNan(arr[i] && arr[i]!==0 && arr[i]!==null &&  arr[i]!=undefined  && arr[i]!=false && arr[i]!='')){
            continue;           
        }else {
            newArr[newArr.length]=arr[i];   
        } 
    }
    return newArr;
}console.log(filterOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//-----------
function filterOutFalsy(arr){
    var newArr=[];
    for (var i=0;i<arr.length;i++){
        if(!(!!arr[i]===false)){      // !isNan(arr[i] && arr[i]!==0 && arr[i]!==null &&  arr[i]!=undefined  && arr[i]!=false && arr[i]!="")
            newArr[newArr.length]=arr[i];   
        } 
    }
    return newArr;
}console.log(filterOutFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));
// 4.	Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function countInt(arr){    
    var count=0;    
    for(i=0;i<arr.length;i++){          

        if(!(!!arr[i]===false) && arr[i]==parseInt(arr[i])){    

            count++;
        }
    }
    return count;
}
console.log('number of integer: '+countInt([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

// 5.	Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2
function countFloat(arr){    
    var count=0;    
    for(i=0;i<arr.length;i++){          

        if(!(!!arr[i]===false) && arr[i]!==parseInt(arr[i])){    

            count++;
        }
    }
    return count;
}
console.log('number of float: '+countFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));