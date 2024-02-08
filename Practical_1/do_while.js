const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function whileCase(number) {
    do{
        console.log(number);
        number++;
    }
    
    while (number < 5)
    return number;
}

rl.question("Enter a number: ", (input) => {
    var number = parseInt(input);
    console.log(whileCase(number));
    rl.close();
});