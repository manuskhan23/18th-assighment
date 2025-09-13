// q3
for (var i = 1; i <= 10; i++) {
    document.write(i, "<br>");
}

// q4
var tableNumber = +prompt("Enter a table number:-");

var tableRange = +prompt("Enter table range:-");

for (var i = 1; i <= tableRange; i++) {
  document.write(tableNumber, " x ", i, "=", tableNumber * i, "<br>");
}
// q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i = 1; i <= 5; i++){
    document.write(fruits[i],"<br>")
}
// q6
// a. Counting: 1 to 15
document.write("<b>Counting:</b><br>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br><br>");

// b. Reverse counting: 10 to 1
document.write("<b>Reverse Counting:</b><br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br><br>");

// c. Even numbers: 0 to 20
document.write("<b>Even:</b><br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");

// d. Odd numbers: 1 to 19
document.write("<b>Odd:</b><br>");
for (let i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br><br>");

// e. Series: 2k, 4k, 6k, …, 20k
document.write("<b>Series:</b><br>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
// q10
for (let i = 5; i <= 100; i += 5) {
  document.write(i + ",<br> ");
}
