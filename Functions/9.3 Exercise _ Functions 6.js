// 1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, 
// and u as well as A, E, I, O, and U. 

function countVowels(str){
    var count=0;
    for(var i=0; i<str.length;i++){
        if(str[i]=='a'||str[i]=='A'||str[i]=='o'||str[i]=='O'||str[i]=='e'||str[i]=='E'||str[i]=='i'||str[i]=='I'||str[i]=='u'||str[i]=='U'){
            count++;
        }
    }return 'vowels in a provided strin '+count;
}console.log(countVowels('Snezana Rajcic BIT STUDENT'));

// 2.Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [a,1,a,2,a,3,b,1,b,2,b,3,c,1,c,2,c,3]

function combTwoArr(arr1,arr2){
    var newArr=[];
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            newArr[newArr.length]=arr1[i];
            newArr[newArr.length]=arr2[j];
        }
    }return 'combines two arrays '+newArr
}console.log(combTwoArr(['a','b','c'], [1,2,3]));

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combTwoArr(arr1,arr2){
    var newArr=[];
    for(var i=0;i<arr1.length;i++){        
            newArr[newArr.length]=arr1[i];
            newArr[newArr.length]=arr2[i];        
    }return 'combines two arrays '+newArr;
}console.log(combTwoArr(['a','b','c'], [1,2,3]));  

// 3.Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateList(arr,k){    
    var arrK=[];
    var arrRest=[];
   
        for(var j=0;j<k;j++){
            arrK[arrK.length]=arr[j];         
            console.log(arrK);
        }
        for(var i=k;i<arr.length;i++){
            arrRest[arrRest.length]=arr[i];  
            console.log(arrRest);        
    }
    
    if(k<arr.length){
        return 'rotates a list: '+arrRest+','+arrK;
    }else if(k=arr.length){
        return 'rotates a list: '+arrRest+arrK;
    }else if(k==undefined){
        return 'rotates a list: '+arr;
    }else if(k>arr.length){
        return 'k should be less than arr lenhgth';
    }   
    
}console.log(rotateList([1,2,3,4,5,6]));

//4.	Write a function that takes a number and returns array of its digits.

function arrOfDigit(num){
    var arr=[];
    var newArr=[];
    while(num>0){
        arr[arr.length]=num%10;
        num=parseInt(num/10);
        console.log(num);
    }
    for(i=arr.length-1;i>=0;i--){
        newArr[newArr.length]=arr[i];
    }
        //return 'array of its digits '+arr;  // obrnuti niz: 5,4,3,2,1
        return 'array of its digits '+newArr;
    
}console.log(arrOfDigit(12345));

//5.	Write a program that prints a multiplication table for numbers up to 12.

// 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.

function cIntoF(tempC){
    var tempF='';
    if(tempC!==undefined){
        tempF=tempC*1.8+32; 
    }return 'temperature in F: '+tempF;
}console.log(cIntoF(20));


// 7.	Write a function to find the maximum element in array of numbers. 
// Filter out all non-number elements.

function maxEl(arr){
    var max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]===null||arr[i]===undefined||arr[i]===NaN||arr[i]===true||arr[i]===false){
            continue;
        }
        //console.log(typeof arr[i]);
        if(max<arr[i]){
            max=arr[i];
            console.log(max);
        }
    }return 'max element: '+max;
}console.log(maxEl([1,2,3,4,5,true,false,NaN,6,null,undefined]));

//8.	Write a function to find the maximum and minimum elements. 
// Function returns an array.
function findMinMax(arr){
    var newArr=[];
    var min=arr[0],max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];       
            console.log(max);
        }
        if(min>arr[i]){
            min=arr[i];       
            console.log(min);
        }
    }
    newArr[newArr.length]=min;
    newArr[newArr.length]=max;
    return 'min,max: '+newArr
}console.log(findMinMax([1,-2,3,0,4,5]));

//9.	Write a function to find the median element of array.
// Input  : a[] = {1, 3, 4, 2, 6, 5, 8, 7}
// Output : Mean = 4.5
//          Median = 4.5
// Sum of the elements is 1 + 3 + 4 + 2 + 6 + 5 + 8 + 7 = 36;  Mean: 36/8 = 4.5
//median is average of 4th and 5th largest elements. Median:  (4 + 5)/2 = 4.5

function findAvg(arr){
    var avg, count=0,sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
        count++;
    }
    avg=sum/count;
    return 'avg: '+avg;
}console.log(findAvg([1, 3, 4, 2, 6, 5, 8, 7]));
//---------------
function findMedian(arr){
    var median,medianFirst,medianSecond,meadianMed, count=0;
    for(var i=0;i<arr.length;i++){
        count++;
    }if(count%2===0){
        medianFirst=arr[arr.length/2-1]; // last element of First half
        medianSecond=arr[arr.length/2];  // first element of Second half       
        // console.log(medianFirst);
        // console.log(medianSecond);
        median=(medianFirst+medianSecond)/2;
    }else{
        median=arr[arr.length/2];   //za neparni br elemenata niza vraca srenji el.
    }
    
    return 'median: '+median;
}
console.log(findMedian([1, 3, 4, 2, 6, 5, 8, 7]));

// 10.	Write a function to find the element that occurs most frequently.

function mostFreq(str,e){
    var e;
    for (var i=0; i<str.length;i++){

    }return e;
}console.log(mostFreq('Snezana Rajcic Bit student'));
