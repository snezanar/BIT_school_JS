// 2.	Write a program that shows text representation of a day in a week for 
// a number input from 1 to 7. All other cases output a message explaining that input 
// must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var day=8;
switch (day){
    case 1: 
    console.log('Monday');
    break;
    case 2 :
    console.log('Tuesday');
    break;
    case 3: 
    console.log('Wednsday');
    break;
    case 4: 
    console.log('Thursday');
    break;
    case 5: 
    console.log('Friday');
    break;
    case 6: 
    console.log('Saturday');
    break;
    case 7: 
    console.log('Sunday');
    break;
    default:
        console.log('enter number between 1-7');
        break;
}

// 3.	Write a program that for a 1-7 number input (representing a day in a week) shows if that day 
// is a weekday or weekend. All other cases output a message explaining that input must be a number 
// between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.
var day=1;
switch (day){
    case 1: 
    
    case 2 :
   
    case 3: 
    
    case 4: 
    
    case 5: 
    console.log("it's weekday");
    break;   
case 6:
case 7:    
    console.log('weekend')
break;
default:
    console.log('enter number between 1-7');
    break;
}


// 4.	Write a program that for a 1-12 number input (representing a month in a year) shows that 
// month’s name. All other cases output a message explaining that input must be a number between 1 and 12. 
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

var month=13;
switch (month){
    case 1: 
    console.log('january');
    break;
    case 2 :
    console.log('february');
    break;
    case 3: 
    console.log('march');
    break;
    case 4: 
    console.log('april');
    break;
    case 5: 
    console.log('may');
    break;
    case 6: 
    console.log('jun');
    break;
    case 7: 
    console.log('july');
    break;
    case 8: 
    console.log('august');
    break;
    case 9: 
    console.log('september');
    break;
    case 10: 
    console.log('october');
    break;
    case 11: 
    console.log('november');
    break;
    case 12: 
    console.log('december');
    break;
    default:
        console.log('enter num between 1-12');
        break;
}
// 5.	Write a program that for a 1-12 number input (representing a month in a year) shows what season 
// it is. All inputs different from 1-12 output a message explaining that input must be a number between
//  1 and 12. 

var month=1;
switch (month){
    case 12: 
    case 1:
    case 2 :
    console.log('winter');
    break;
    case 3: 
    case 4: 
    case 5: 
    console.log('spring');
    break;
    case 6: 
    case 7: 
    case 8: 
    console.log('summer');
    break;
    case 9: 
    case 10: 
    case 11: 
    console.log('autumn');
    break;
    default:
        console.log('enter num between 1-12');
        break;
}

// 6.	Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that 
// grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". 
// Input different from letters A-F outputs a message "Unknown grade".

var letter='E';
switch (letter){
    case 'A': 
    console.log('Good job');
    break;
    case 'B' :
    console.log('Pretty good');
    break;
    case "C": 
    console.log('Passed');
    break;
    case "D": 
    console.log('Not so good');
    break;
    case "E": 
    console.log('Failed');
    break;
   
    default:
        console.log('Unknown grade');
        break;
}
// 7.	Write a program that takes as input a city name and outputs the country where the city is. You may choose which 
// cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. 
// Note that each country must have a different number of cities. Input different from the listed cities should output 
//a message"Please choose a different city".
var city='Split';
switch(city){
case 'Bor':
case 'Paracin':
case 'Krusevac':
case 'Beograd':
      console.log('Serbia')
      break;
case 'Zagreb':
case 'Split':
case 'Osijek':
      console.log('Croatia');
      break;
case ('Podgorica'):
case ('Tivar'):
     console.log('Montenegro');
     break;                            
case 'Maribor':
     console.log('Slovenia');
     break;
default:
     console.log("Please choose a different city")
     break;
}

// 8.	Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”)
//  and prints out the appropriate result. Watch out for division by zero!
var a=5;
var b=0;
operation='/';
switch (operation){
case '+':
    console.log(a+b)
    break;

case '-':
    console.log(a-b)
    break;
case '*':
    console.log(a*b)
    break;
case '/':
        if(b!==0){
            console.log(a/b)
        }else console.log('can not devide by 0')
   
    break;
default :
    console.log('no');
    break;

}
