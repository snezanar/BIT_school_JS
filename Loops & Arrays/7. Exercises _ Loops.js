//1.	Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current 
//number is odd or even, and display a message to the screen.



var a=[2,3,'abc',11,-7];
a.length=0;
console.log(a);

console.log(2<3+5);


for(var i=0; i<=15; i++){
    if (i%2==0){
        console.log('number '+i+ ' is even')
    } else
    console.log('number ' +i+ ' is odd')
}

//2.	Write a program to sum the multiples of 3 and 5 under 1000.

var sum=0;
for (var i=0; i<1000; i++){
    if(i%3===0 || i%5===0){
sum=sum+i;
    }
}
console.log(sum)

//3.	Write a program to compute the sum and product of an array of integers.
var niz=[1,2,3,4,5];
var sum=0;
var prod=1;
for (var i=0; i<niz.length; i++){
    sum=sum+niz[i];
    prod=prod*niz[i];
}
console.log('sum: '+sum);
console.log('product: '+prod);

//4.	Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
for (var i=0; i<niz.length; i++){
    console.log(x[i]);
}

//5.	Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
for(var i=0; i<a.length; i++){
    var currentElement=a[i];
    console.log(a[i]);
}
// -------------------

for(var i=0; i<a.length; i++){
    var currentElement=a[i];
    for (var j=0; j<currentElement.length; j++){
        var currentValue=currentElement[j];
        console.log(currentValue);
    }
}
//----------------------
var result ='';
for(var i=0; i<a.length; i++){
    var currentElement=a[i];
    for (var j=0; j<currentElement.length; j++){
        var currentValue=currentElement[j];
        result=result+currentValue+'\t';
    }
    result+='\n'
}
console.log(result);

// I0  i=0, 0<3, currEl=a[0]  ==>  [1,2,1,24]
    //  J0   j=0, 0<4, currValue=currElem[0]  ==> 1 + tab
    //  J1   j=1, 1<4, currValue=currElem[1]  ==> 1 + tab + 2 + tab
    //  J2   j=2, 2<4, currValue=currElem[2]  ==> 1 + tab + 2 + tab + 1 + tab
    //  J3   j=3, 3<4, currValue=currElem[3]  ==> 1 + tab + 2 + tab + 1 + tab + 24 + tab
    //  J4   j=4, 4<4  FALSE 
// result=result + \new line 
// I1  i=1, 1<3, currEl =a[1]     ==> [8,11,9,4]
    //  J0   j=0, 0<4, currValue=currElem[0]  ==> 8 + tab
    //  J1   j=1, 1<4, currValue=currElem[1]  ==> 8 + tab + 11 + tab
    //  J2   j=2, 2<4, currValue=currElem[2]  ==> 8 + tab + 11 + tab + 9 + tab
    //  J3   j=3, 3<4, currValue=currElem[3]  ==> 9 + tab + 11 + tab + 9 + tab + 4 + tab
    //  J4   j=4, 4<4  FALSE
// result=result + \new line 
// I1  i=2, 2<3, currEl =a[2]     ==> [7,0,7,27]    .............


//6.	Write a program that outputs the sum of squares of the first 20 numbers. 
var sum=0;
for (var i=0; i<=20; i++){
    sum=sum+i*i;
}
console.log('sum of squares: '+sum);

//7.	Write a program that computes average marks of the following students. 
//Then use this average to determine the corresponding grade. 
// David	80
// Marko	77
// Dany	88
// John	95
// Thomas	68

var niz=[80,77,88,95,68]
var sum=0;
var avg;
for (var i=0; i <niz.length; i++) {
sum=(sum+niz[i]);
avg=sum/niz.length;
}
console.log('average marks: '+ avg);

// < 60%	F
// < 70%	D
// < 80%	C
// < 90%	B
// < 100%	A
 


var students=[
    ['david',80],
    ['marko',77],
    ['dany',88],
    ['john',95],
    ['thomas',68]
];

var avgPoints;
var sumOfPoints=0;

for (var i=0; i <students.length; i++) {
    var currentStudentName=students[i][0];
    var currentStudentPoints=students[i][1];
    //sumOfPoints=currentStudentPoints++;


if (currentStudentPoints<60){
    console.log(currentStudentName+" grade F");
}else if(currentStudentPoints<70){
    console.log(currentStudentName+" grade D");
}else if(currentStudentPoints<80){
    console.log(currentStudentName+" grade C");
}else if(currentStudentPoints<90){
    console.log(currentStudentName+" grade B");
}else if(currentStudentPoints<100){
    console.log(currentStudentName+" grade A");
}
}


//8.	Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that 
// are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (var i=0; i <=100; i++){
    if (i % 3 == 0 && i % 5 ==0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

