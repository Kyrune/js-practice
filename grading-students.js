// Round student grades according to the rules.
// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.

// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// The function is expected to return an INTEGER_ARRAY.
// The function accepts INTEGER_ARRAY grades as parameter.

function gradingStudens(grades) {
    return grades.map((n) => {
        let diff = 5 - (n % 5);

        if (diff < 3 && n >= 38) {
            n += diff;
        }
        return n;
    })
}