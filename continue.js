
/* for (i = 0; i < 30; i++) {

    if (i == 15) {
        continue;
    }
    console.log(i);
} */

// program to print the value of i
/* for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i > 3) {
        continue;
    }

    console.log(i);
} */

/* var numbers = [12, 34, 45, 24, 56, 57, 78, 35, 89, 98, 97];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 60) {
        continue;
    }
    console.log(number);
} */

var i = 5;
for (; i < 5; i++) {
    console.log(i);
}
var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
        break;
    }
    console.log(marks[i]);
};