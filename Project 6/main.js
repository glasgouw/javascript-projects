// Ask a student for his grade
// If the grade is lower than 60 change the value of the html elment of id='grade' to "You got a F"
// If the grade is between 60 - 69, change the value of the html elment of id='grade' to "You got a D"
// If the grade is between 70 - 79, change the value of the html elment of id='grade' to "You got a C"
// If the grade is between 80 - 89, change the value of the html elment of id='grade' to "You got a B"
// If the grade is between 90 - 100, change the value of the html elment of id='grade' to "You got a A"

var grade = prompt("What is your grade?");
var gradeElement = document.getElementById("grade");

if (grade >= 0 && grade < 60) {
    gradeElement.innerHTML = "You got an F";
}
else if (grade >= 60 && grade <= 69) {
    gradeElement.innerHTML = "You got a D";
}
else if (grade >= 70 && grade <= 79) {
    gradeElement.innerHTML = "You got a C";
}
else if (grade >= 80 && grade <= 89) {
    gradeElement.innerHTML = "You got a B";
}
else if (grade >= 90 && grade <= 100) {
    gradeElement.innerHTML = "You got an A";
}
else {
    gradeElement.innerHTML = "Invalid grade";
}
