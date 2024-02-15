//Q1.Print all even numbers from 0 to 100.

/*for (let i=0;i<=100;i++){
    if(i%2==0)
    {
        console.log(i);
    }
}*/

//Q2.Create a game where you start with any random game number.Ask the user to keep gussing the game number until the user enters correct value.

/*let gameNum=25;
let userNum=prompt("Guess the game number:-");

while(userNum!=gameNum){
    userNum=prompt("You entered the wrong game number , enter again");
}
console.log("Yeah, You entered the correct game number and that is",gameNum);*/

//Q3.Prompt the user to enter theri fullname .Generate a username for them based on the input:-
     //Case 1.Start username with @, followed by their full name and ending with the fullname length.
    //For example, user name ="amarprasad", user name should be "@amarprasad10".
    //Case 2.Start username with initial letter of first name followed surname.
    //For example, user name ="Amar Prasad", user name should be "aprasad".

//Case 1
// let Name=prompt("Enter your name");
// let nameLength=Name.length;
// console.log(`@${Name}${nameLength}`);

//Case 2
// let fName=prompt("Enter your first name");
// let lName=prompt("Enter you Last name");
// console.log(fName.charAt(0)+lName);

//Q4.For a given array with marks of student ->[85,97,44,37,76,60].Find the average marks of the entire class.
// let stdMark=[85,97,44,37,76,60];
// let avg=0;
// for(let i=0;i<stdMark.length;i++){
//     avg=stdMark[i]+avg;
// }
// avg=avg/stdMark.length;
// console.log("Average Mark=",avg);

/*Above question using "for of" loop*/
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class= ${avg}`);

//Q5.For a given array with price of items->[250,645,300,900,50].All items have an offer of 10% OFF on them.Change the array to store final proce after applying offer.

// let priceArr=[250,645,300,900,50];
// for(let i=0;i<priceArr.length;i++){
//     let offerPrice=priceArr[i]/10;
//     priceArr[i]=priceArr[i]-offerPrice;
// }
// console.log(priceArr);

/*Q6 create an arrray to store companies->"Facebook","Uber","Google","Microsoft","Netflix","IBM"*/
//  a .Remove the first company from the array. 
//  b .Remove uber & add ola in its place.
//  c .add amazon at the end .

// let companies=["Facebook","Uber","Google","Microsoft","Netflix","IBM"];
// companies.shift(); // first company has been removed.
// companies.splice(1,1,"Ola"); // Removed uber & added ola in its place.
// companies.push("Amazon"); // added amazon at the end .
// console.log(companies);

//Q7 Create a function using the "Function" Keyword that takes a String as an argument & return the number of Vowels in the string.

/*let str = "AMAR";
let count=0;
for(i=0;i<=str.length;i++){
    if(str[i]=='a' || str[i]== 'A'){
    count++;
    }else if(str[i]=='e' || str[i]== 'E'){
     count++;
    }else if(str[i]=='i' || str[i]== 'I'){
     count++;
    }else if(str[i]=='o' || str[i]== 'O'){
        count++;
    }else if(str[i]=='u' || str[i]== 'U'){
        count++;
    }
}
console.log("Here is the count of total number of vowles in the given string=", count);*/

//Using function keyword
// function vowles(str){
//     let count=0;
//     for(const char of str){
//         if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' || char==='A' || char==='E' || char==='I' || char==='O' || char==='U'){
//             count++;
//         }
//     }
//     console.log("Vowel Count: ",count);
// }

/*Using Arrow function,find the number of vowels in a string*/
const vow=(str) => {
    function vowles(str){
        let count=0;
        for(const char of str){
            if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' || char==='A' || char==='E' || char==='I' || char==='O' || char==='U'){
                count++;
            }
        }
        console.log("Vowel Count: ",count);
    }
}





