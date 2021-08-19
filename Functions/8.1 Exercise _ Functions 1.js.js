//1.	Write a program that calculates the maximum of two given numbers.

function Max(a, b) {
  var max;
  if (a > b) {
    max = a;
  } else if (b > a) {
    max = b;
  }else max='equal';

  return max;
}
var res = Max(15, 15);
console.log(res);

//2.	Write a program that checks if a given number is odd.
function Odd(a) {
  var odd;
  if (a % 2 == 0) {
    odd = false;
  } else odd = true;
  return odd;
}
var res = Odd(6);
console.log(res);

//3.	Write a program that checks if a given number is a three digit long number.

function ThreeDigit(a) {
    var xxx;
  if (a >= 100 && a < 1000) {
    xxx=true;
  } else xxx=false;
  return xxx;
}
var res = ThreeDigit(1999);
console.log('three digit number:  '+res);

//4.	Write a program that calculates an arithmetic mean of four numbers.
function AritmeticMean(a, b, c, d) {
  var avg = (a + b + c + d) / 4;
  return avg;
}
var res = AritmeticMean(1, 2, 3, 4);
console.log(res);

//5.	Write a program that draws a square of a given size. For example,  
//      if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****


//-------------------- PISEM  * KAD GOD SAM NA NEKOM OD GRANICNIH USLOVA:
function drawSquare(n){
    var square='';
    for(var row=0; row<n; row++){
        for(var col=0; col<n; col++){
            if(row===0 || row===n-1 || col===0 || col===n-1){
                square+='* ';
            }else {
                square+='  ';
            }
        }
        square+='\n';
    }
    return square;
}
var res=drawSquare(5);
console.log(res);

//6.	Write a program that draws a horizontal chart representing three given values. 
//      For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
function horisontalChart(x,y,z){
    var chart='';
    var numOfArg=arguments.length;
    for(var j=0;j<numOfArg; j++){
        for (var i=0; i<arguments[j]; i++){
            chart+='*';
        }
        chart+='\n';
    }
    return chart;
}
var res=horisontalChart(5,3,7);
console.log(res);
//---------------------

function horisontalChart(x,y,z){
    var chart='';
    
        for (var i=0; i<x; i++){
            chart+='*';
        }
        chart+='\n';
        for (var i=0; i<y; i++){
            chart+='*';
        }
        chart+='\n';
        for (var i=0; i<z; i++){
            chart+='*';
        }
        return chart;
    }
    

var res=horisontalChart(5,3,7);
console.log(res);



//7.	Write a program that calculates a number of digits of a given number.
function NumDigit(a) {
    var count = 0;
    if(a<0){
        a*=-1;
    }
  while (a >= 1) {
    a /= 10; // a = a/10
    ++count;
  }
  return count;
}
var res = NumDigit(-1000);
console.log('Num of Digits: ', res);

//8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
var niz=[2, 4, 7, 8, 7, 7, 1];
var e=7;
function appearNum(){
    var count=0;
    for(var i=0;i<niz.length;i++){
        if (e==niz[i]){
            count++;
        }
        
    }
    return count;
}
var res = appearNum();
console.log('Num of appearances : '+ res);


//9.	Write a program that calculates the sum of odd elements of a given array.

var niz = [2, 4, 7, 3, 6];
function sumOdd(niz) {
  var sum = 0;               // uvek PRE for-a, ako je unutar postavlja count uvek na nula!!!
  for (i = 0; i < niz.length; i++) {
    if (niz[i] % 2 !== 0) {
      var sum = sum + niz[i];
    }
  }
  return sum; //return prekida petlju ako je unutar petlje
}
var res = sumOdd(niz);
console.log(res);

//10.	Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var string='AbrakadabrA';
var smalla='a';
var biga='A';
var countSmall=0, countBig=0;
function countLetter(){
    for(var i=0;i<string.length;i++){
        if(smalla==string[i] || biga==string[i]){
            countSmall++;
            countBig++;
        }
    }
return countSmall;
return countBig;

}
var res = countLetter();
console.log('count a and A: '+ res);
//-----------
function countChar(string){
  var count=0;
  for(var i=0;i<string.length;i++){
      if('a'===string[i] || 'A'===string[i]){
          count++;          
      }
  }
return count;
}
console.log(countChar('AbrakAdabra'));
//----------

function countCh(string,lowLetter,capLetter){
  var count=0;
  for(var i=0;i<string.length;i++){
      if(lowLetter===string[i] || capLetter===string[i]){
          count++;          
      }
  }
return count;
}
console.log(countCh('AbrakAdabra','a','B'));






//11.	Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

var str='abc', newString=''
function concatString(){
    for(i=0; i<4;i++){
        newString+=str;  //!!!!!!!!!  +=
    }
   
    return newString;
}
var res = concatString();
console.log('concatenate string: '+ res);
//---------------

function concat(string,n){
  var newString='';
  for(i=0; i<n;i++){
    newString+=string;
  }
  return newString;
}
console.log(concat('alo',2));