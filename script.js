1- Write a js program to check whether a character is uppercase or lowercase alphabet.
// var char = prompt("Please enter a character to check:")
// if(char>="A" && char<="Z")
// {
//     alert("The character is in Upper case.")
// }
// else if (char>="a" && char<="z")
// {
//     alert("The character is in Lower case.") 
// }

// 2- Write a js program to input Week number and print week day.
// var days = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
// var currentDate = new Date()
// var number = prompt("Please enter week number:")
// document.write(days[number])

// 3- Write a js program to input month number and print number of days in that month.
// var numberOfDays = [31,28,31,30,31,30,31,31,30,31,30,31]
// var months = ["January","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var number = prompt("Please enter month number:")
// document.write("There are "+numberOfDays[number]+" days in "+months[number]+".")

// 5- Write a js program to input angles of a triangle and check whether triangle is valid or not.
// var angle1 = prompt("Please enter angle of first side:")
// var angle2 = prompt("Please enter angle of second side:")
// var angle3 = prompt("Please enter angle of third side:")
// angle1 = parseInt(angle1)
// angle2 = parseInt(angle2)
// angle3 = parseInt(angle3)
// if( angle1 + angle2 + angle3 == 180)
// {
//     alert("The triangle is valid.")
// }
// else
// {
//     alert("The tringle is not valid.")
// }

// 6-. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// var side1 = prompt("Please enter first side:")
// var side2 = prompt("Please enter second side:")
// var side3 = prompt("Please enter third side:")
// side1 = parseInt(side1)
// side2 = parseInt(side2)
// side3 = parseInt(side3)
// if(side1+side2 > side3 && side2+side3 > side1 && side1+side3 > side2)
// {
//     alert("The Triangle is valid.")
// }
// else
// {
//     alert("The triangle is not valid.")
// }

// 7- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var side1 = prompt("Please enter first side:")
// var side2 = prompt("Please enter second side:")
// var side3 = prompt("Please enter third side:")
// side1 = parseInt(side1)
// side2 = parseInt(side2)
// side3 = parseInt(side3)
// if(side1 == side2 && side1 == side3 && side2 == side3 )
// {
//     alert("Equilateral")
// }
// else if ((side1 == side2) || (side1 == side3) || (side3 == side2))
// {
//     if(side1 !=side3 || side2 != side3)
//     {
//         alert("isoceles")
//     }
// }
// else
// {
//     alert("scalene")
// }

// 8- Write a js program to find all roots of a quadratic equation.
// var a = prompt("Please enter the value of a:")
// var b = prompt("Please enter the value of b:")
// var c = prompt("Please enter the value of c:")
// a = parseInt(a)
// b = parseInt(b)
// c = parseInt(c)
// var b= b*b;
// if((b - 4*a*c) == 0)
// {
//     alert("roots are real and equal.")
// } 
// else if((b - 4*a*c) > 0)
// {
//     alert("roots are real and different.")
// }
// else if((b - 4*a*c) < 0)
// {
//     alert("roots are complex")
// }

// 9- Write a js program to calculate profit or loss.
// var originalPrice = prompt("Please enter original price of an object:")
// var soldPrice = prompt("Please enter sold price of an object:")
// var profit,loss ;
// if (soldPrice>originalPrice)
// {
//     profit = soldPrice - originalPrice ;
//     document.write("You earned "+profit+" Rs.")
// }
// if (soldPrice<originalPrice)
// {
//     loss = originalPrice - soldPrice ;
//     document.write("You loss "+loss+" Rs.")
// }

// 10- Write a js program to search all occurrences of a character in given string.
// var string = "Java Script is Scripting Language."
// var char = prompt("Please enter a character to search the occurances:")
// var counter = 0
// for(var i = 0; i<=string.length; i++)
// {
//     if(string.slice(i, i+1)==char)
//     {
//         counter = counter + 1;

//     }  
// }
// document.write("The character "+char+ " appears "+counter+" times in a string")

// 12- Write a js program to find highest frequency character in a string.

// var str = "javascript"
// var char,maxChar;
// var counter = 0 ;
// var highFrequencyChar = 0; 
// for (var i = 0; i<=str.length; i++)
// {
//    char = str.slice(i,i+1)
//    for (var j=0; j<=str.length; j++)
//    {
//        if(char == str.slice(j,j+1))
//        {
//            counter = counter + 1;
//        }
//    }
//    if(counter>highFrequencyChar)
//    {
//        highFrequencyChar = counter;
//        maxChar = char ;
//    }
//    counter = 0;
// }
// document.write("The character which appear most is "+'"'+maxChar+'"')

// 13- Write a js program to find lowest frequency character in a string.
// var str = "abcacc"
// var counter = 0;
// var lowFrequencyChar = str.length ;
// var char , miniChar ;
// for( var i = 0; i<=str.length; i++)
// {
//     char = str.slice(i,i+1)
//     for(j = 0; j<=str.length; j++)
//     {
//         if(char == str.slice(j,j+1))
//         {
//             counter = counter + 1;
//         }
//     }
//     if(counter<lowFrequencyChar)
//     {
//         miniChar = char ;
//         lowFrequencyChar = counter ;
//     }
    
//     counter = 0 ;
// }
// document.write("The character which appears least is "+'"'+miniChar+'"')

// 33- Write a js program to count frequency of each element in an array
// var arr = [1,2,2,3,3,2,4,3,4,5,5,4,5]
// var count = 0;
// var element = arr.slice(0) ;
// document.write(element)
// for(var i=0; i<=arr.length; i++)
// {
    

// }

// 42- Write a js program to sort even and odd elements of array separately.
// var arr = [1,3,2,5,4,6,7]
// var sortedArr = []
// var evenArr = []
// var oddArr = []
// var element ;
// for(i = 0; i<arr.length; i++)
// {
//     element=arr.slice(i,i+1)
//     if(element%2 == 0)
//     {
//         evenArr.push(element)
//     }
//     else
//     {
//         oddArr.push(element)
//     }
// }
// for (i = 0 ; i<oddArr.length; i++)
// {
//     sortedArr.push(oddArr[i])
// }
// for (i = 0 ; i<evenArr.length; i++)
// {
//     sortedArr.push(evenArr[i])
// }
// document.write(sortedArr)

// 43- Write a js program to left rotate an array.
// var arr = [1,2,3,4,5,6,7]
// var number = prompt("How many times you want to rotate left array:")
// var element;
// for (i=0; i<number; i++)
// {
//     element=arr.shift()
//     arr.push(element)
// }
// document.write("The array after rotating left "+number+" times "+"<br>"+arr)

// 44- Write a js program to right rotate an array.
// var arr = [1,2,3,4,5]
// var number = prompt("How many times you want to rotate right array:")
// var element;
// for (i=0; i<number; i++)
// {
//     element=arr.pop()
//     arr.unshift(element)
// }
// document.write("The array after rotating right "+number+" times "+"<br>"+arr)

// 

// 43- Write a js program to find sum of all natural numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 1;
// var sum = 0
// while(i<n)
// {
//     sum = sum + i ;
//     i = i + 1; 
// }
// document.write("The sum all natural numbes from 1 to "+n+" is "+sum)

// 44- Write a js program to find sum of all even numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 1;
// var sum = 0 ;
// while(i<n)
// {
//     if(i%2 == 0)
//     {
//         sum = sum + i;
//     }
//     i = i + 1 ;
// }
// document.write("The sum of all even numbers between 1 to "+n+" is "+sum)

// 45- Write a js program to find sum of all odd numbers between 1 to n.
// var n = prompt("Please Enter the value of n:")
// var i = 3;
// var sum = 0 ;
// while(i<n)
// {
//     if(i%2 != 0)
//     {
//         sum = sum + i;
//     }
//     i = i + 1 ;   
// }
// document.write("The sum of all odd numbers between 1 to "+n+" is "+sum)

// 46- Write a js program to print multiplication table of any number.
// var n = prompt("Please Enter the number you want to print the table of:")
// n = parseInt(n)
// var i = 1
// while(i<=10)
// {
//     document.write(n+" * "+i+" = "+ n*i)
//     document.write("<br>")
//     i = i+1
// }
// 47- Write a js program to count number of digits in a number.
// var number = prompt("Please enter the number you want to count the digits of:")
// var counter = 0 ;
// for(var  i = 0; i<number.length; i++)
// {
//     counter = counter + 1;
// }
// document.write("There are "+counter+" digits in a number.")

// 48- Write a js program to find first and last digit of a number.















