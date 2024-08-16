// Q1

// var num = +prompt("Input positive integers");
// document.write("number" + " " + num + "<br>")
// var rounoffnum = Math.round(num);
// document.write("Round off value:" + rounoffnum + "<br>")
// var floorvalue = Math.floor(num);
// document.write("Floor value"+" :" + floorvalue + "<br>")
// var ceilvalue = Math.ceil(num);
// document.write("Ceil value"+" :" + ceilvalue + "<br>")

// Q2
// var num = +prompt("Input negative floating integers");
// document.write("number" + " " + num + "<br>")
// var rounoffnum = Math.round(num);
// document.write("Round off value:" + rounoffnum + "<br>")
// var floorvalue = Math.floor(num);
// document.write("Floor value"+" :" + floorvalue + "<br>")
// var ceilvalue = Math.ceil(num);
// document.write("Ceil value"+" :" + ceilvalue + "<br>")

// Q3
// let number = +prompt("enter a number");
// let absolutevalue = Math.abs(number);
// alert("The absolute value of"   +" " + number +" "+ "is:"+ "  "+ absolutevalue)

// // Q4
// // Simulate rolling a dice
// let diceValue = Math.floor(Math.random() * 6) + 1;

// // Display the value of the dice
// document.write("The value of the dice is: " + diceValue);



// Q6
// let randomvalue =Math.floor (Math.random() * 100) + 1;
// document.write('Randon number between 1 and 100 :'+ '  ' + randomvalue)


// Q7
// let weight = prompt('Enter your weight in Kilogram');
//         if (weight) {
//             weight = weight.toLowerCase();

//             if (weight === '50kgs' || weight === '50') {
//                 document.write('The weight of user is 50 kilograms');
//             } else if (weight === '50.2kgs' || weight === '50.2kilograms') {
//                 document.write('The weight of user is 50.2 kilograms');
//             } else {
//                 document.write('Write down the correct weight');
//             }
//         } else {
//             document.write('Please enter your weight');
//         }

// Q8

let randomsecretnum = +prompt('enter a number between 1 to 10')

    if (randomsecretnum === 7) {
        alert('Congrats');
    } else {
        alert('This is not a secret number');
    }
