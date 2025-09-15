// // q3
// for (var i = 1; i <= 10; i++) {
//     document.write(i, "<br>");
// }

// // q4
// var tableNumber = +prompt("Enter a table number:-");

// var tableRange = +prompt("Enter table range:-");

// for (var i = 1; i <= tableRange; i++) {
//   document.write(tableNumber, " x ", i, "=", tableNumber * i, "<br>");
// }
// // q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 1; i <= 5; i++){
//     document.write(fruits[i],"<br>")
// }
// // q6
// // a. Counting: 1 to 15
// document.write("<b>Counting:</b><br>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }
// document.write("<br><br>");

// // b. Reverse counting: 10 to 1
// document.write("<b>Reverse Counting:</b><br>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }
// document.write("<br><br>");

// // c. Even numbers: 0 to 20
// document.write("<b>Even:</b><br>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }
// document.write("<br><br>");

// // d. Odd numbers: 1 to 19
// document.write("<b>Odd:</b><br>");
// for (let i = 1; i < 20; i += 2) {
//   document.write(i + ", ");
// }
// document.write("<br><br>");

// // e. Series: 2k, 4k, 6k, …, 20k
// document.write("<b>Series:</b><br>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k, ");
// }
// // q10
// for (let i = 5; i <= 100; i += 5) {
//   document.write(i + ",<br> ");
// }
// // //chapter 21 and 22
// // Q1
// var mobile = prompt("Enter your favourite mobile phone model:");
//   document.write(
//     "My Favorite Phone is:"+mobile+"<br>"
//   )
//   document.write("Length: " + mobile.length+"<br>");
// // Q2
// var word = "Pakistani";
// document.write(word)
// var idx = word.indexOf("n");
// document.write('Index of "n" in ' +word+ ' is: ' + idx+"<br>");  
// // Q3
// var hw = "Hello World";
// var lastIdx = hw.lastIndexOf("l");
// document.write('Last index of "l" in '+hw+' is: ' +lastIdx); 
// // Q4
// var word2 = "Pakistani";
// document.write(word2+"<br>")
// var idx2 = word2.charAt(3);
// document.write('Caracter at index 3  is: ' + idx2+"<br>");  
// // Q10
// var inp = prompt("Type something (will be converted to UPPERCASE):");
// if (inp !== null) {
//   document.write(inp.toUpperCase());
// }
// // Q11
// var text = prompt("Enter a sentence (will be converted to Title Case):");
// var title = text.toLowerCase().split(" ");
// for (var i = 0; i < title.length; i++) {
//   if (title[i].length > 0) {
//     title[i] = title[i][0].toUpperCase() + title[i].slice(1);
//   }
// }
// alert(title.join(" "));
// // Q16
// var university = "University of Karachi";
// var chars = university.split(""); // each character
// for (var i = 0; i < chars.length; i++) {
//   document.write(chars[i] + "<br>");
// }
// // Q17
// var userInput = prompt("Enter something:");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("Last character: " + lastChar);