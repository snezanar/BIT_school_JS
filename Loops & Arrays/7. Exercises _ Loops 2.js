// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes


var niz = [5, -4.2,3, 7];
var e = 1;
for(var i=0;i < niz.length;i++){
    if(niz[i] === e){
    var result="yes"
    break;
    }    else result="no"
}console.log(result);


// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var niz=[-3,11,5,3.4,-8];
for(var i=0;i < niz.length;i++){ 
    if (niz[i]>0){
       niz[i]=niz[i]*2;
    }
} console.log(niz);

// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
    
    var n=[-4, 2, 2, -1, 6];
    var min=n[0];
    var index = 0;
        for(var i =0; i<n.length; i++)     
        {
            if(n[i]<min){
                index=i; 
                min=n[i];
            }
        }console.log('min: '+min+' index: '+index);

// 4.	Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2               

// var n=[-4, 2, 2, -1, 6];
// var min=n[0];
// var index = 0;
// for(var i =0; i<n.length; i++)     
// {
//     if(n[i]<min){
//         var index=i; 
//         var j=index-1;
//     }
// }console.log('first element larger than minimu: '+n[j]);
// drugo resenje

var niz=[-4, 2, 2, -1, 6];
var min=niz[0];
var secondMin=Infinity;

for(var i =0; i<niz.length; i++)     
{
    if(niz[i]<min){
       
        min=niz[i];
        
    }
}

for(var i =0; i<niz.length; i++){
    if(niz[i]>min && niz[i]<secondMin ){
        secondMin=niz[i];
    }
}
console.log('first element larger than minimu: '+secondMin)

//trece resenje
var niz=[-4, 2, 2, -1, 6];
var smallest=niz[0];
var smaller=Infinity;

for(var i =0; i<niz.length; i++){
    if(niz[i]<smaller){
        if(niz[i]<smallest){
            smaller=smallest;
            smallest=niz[i];

        }
    }
}

//4b) SORT + print second smallest
var niz=[4, 2, 2, -1, 6];
var temp=0;
for(var i =0; i<niz.length; i++){
    for(var j=i+1;j<niz.length;j++){
        if(niz[i]>niz[j]){
            temp=niz[i];
            niz[i]=niz[j];
            niz[j]=temp;

        }
    }
}console.log('sort: '+niz);


// 5.	Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var niz=[3, 11, -5, -3, 2];
var sum=0;
for(var i=0;i < niz.length;i++){
    if (niz[i]>0){
        sum=sum+niz[i];  
    }    
}
console.log('sum : '+sum);
// 6.	Write a program that checks if a given array is symmetric. An array is symmetric if 
// it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.
var niz=[2, 4, -2, 7, -2, 4, 2];
var front=[];back=[];
for(var i=0;i < niz.length/2;i++){
    front[i]=niz[i];
    back[i]=niz[(niz.length-1)-i];
}
if(front[i]==back[i]){
    console.log('The array is symmetric.')
} else console.log('The array is NOT symmetric.');

//drugo resenje:

var niz=[2, 4, -2, 7, -2, 4, 2];
var front=[];back=[];
var res='';
for(var i=0;i < niz.length;i++){
    front=niz[i];
    for(var j=niz.length-1;j>=0;j--){
        back=niz[j];
    }
    if(front==back){
        res='The array is symmetric.'
    }else res='The array is NOT symmetric.'
}
console.log(res);
           
//trece resenje:
var niz=[2, 4, -12, 7, -2, 4, 2];
isSymetric=true;
for(var i=0, j=niz.length-1; i <= j; i++, j--){
    
    if(niz[i]!==niz[j]){
        isSymetric=false;
    }
}
console.log('The array is symmetric: '+isSymetric);

           
//trece resenje B:
var niz=[2, 4, -12, 7, -2, 4, 2];
var isSymetric=true;
for(var i=0; i <niz.length; j--){
    for(var j=niz.length-1; j >= 0;  j--){
        //for(var i=0, j=niz.length-1; i <= j; i++, j--){ 
            // prestaje se kada su se ukrstili i<=j na pola
    if(niz[i]!==niz[j]){
        isSymetric=false;
    }
}
}
if(isSymetric){
    console.log('The array is symmetric')
}else
console.log('The array is symmetric: ');



// 7.	Write a program that intertwines two arrays. 
// You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var niz1=[4, 5, 6, 2];
var niz2=[3, 8, 11, 9];
var niz3=[];
for(var i=0;i < niz1.length;i++)
{
    niz3[niz3.length]=niz1[i];
    niz3[niz3.length]=niz2[i];
}
console.log(niz3);

// drugo resenje
var niz1=[4, 5, 6, 2];
var niz2=[3, 8, 11, 9];
var niz3=niz1;
for(var i=0;i < niz1.length;i++){
    niz3[niz3.length]=niz2[i];
}
console.log(niz3, niz1);

// 8.	Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var niz1=[4, 5, 6, 2];
var niz2=[3, 8, 11, 9];
var niz3=[];

for(var i=0;i < niz2.length;i++){
    niz3[i]=niz1[i];
    niz3[i+niz1.length]=niz2[i];
    
}
console.log('concatenate: '+niz3)

// 9.	Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
var niz=[4, 6, 2, 8, 2, 2];
var e=2;
var niz3=[]
for(var i=0;i < niz.length;i++){
    if (niz[i]!=e){
        niz3[niz3.length]=niz[i];
    }
}
console.log('new array: '+niz3);

// 10.	Write a program that inserts a given element e on the given position p 
// in the array a. If the value of the position is greater than the array length, 
// print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var e = 78, index = 8, niz = [2, -2, 33, 12, 5, 8];
if(index>=niz.length){
    console.log('error') // must be less
    
}
for(var i=niz.length; i>index; i--){
    niz[i]=niz[i-1];
}
niz[index]=e;
console.log('new array length: '+ niz.length);
console.log('new array with inserted element: '+ niz);
