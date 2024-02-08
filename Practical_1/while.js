const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function whileCase(number) {
    while (number < 5) {
        console.log(number);
        number++;
    }
    return number;
}

rl.question("Enter a number: ", (input) => {
    var number = parseInt(input);
    console.log(whileCase(number));
    rl.close();
});