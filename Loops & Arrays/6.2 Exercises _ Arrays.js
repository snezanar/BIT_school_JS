//1.	Write an array of months in a year. Using console.log display June, October and January from the array.

var x=['jan','feb','march','april', 'may','jun','july','aug','sep','oct','nov','dec'];
console.log(x[5]);
console.log(x[9]);
console.log(x[11]);

//2.	Write an arrays of days in a week. Using console.log display Sunday from the array.
var x=['mon','tue','wedn','thu', 'fri','sat','sun'];
console.log(x[6]);
//Print all negative elements from the array [2, -4, 5, -2, -11].  
var x=[2,-4,5,-2,-11]
console.log(x[1],x[3],x[4]);
//4.	Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

// if x[i] %3=0 {
//     console.log(x[i])
// }
var x=[5,15,-5,20,12,18,72,14,9]
console.log(x[0],x[3],x[6]);

//5.	What is the index of number 24 in the following array?
var x=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(x[0][3]);

// Using console.log:
// ●	Display the 3rd element of the array,
// ●	Display the 2nd element of the 3rd element.

console.log(x[2]);
console.log(x[2][1]);

var i=9;
do{
    i++;
}
while(i<10)
console.log(i);