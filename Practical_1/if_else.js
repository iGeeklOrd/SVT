const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question("Enter two numbers between 1 and 100: ", (input) => {
        const [x, y] = input.trim().split(" ").map(Number);
        if (isNaN(x) || isNaN(y)) {
            console.log("Invalid input. Please enter two integers.");
            rl.close();
            return;
        } else if (x < 0 || y < 0) {
            console.log("Negative numbers are not allowed.");
            rl.close();
            return;
        } else if (x > 100 || y > 100) {
            console.log("Incorrect input. Numbers should be between 1 and 100.");
            rl.close();
            return;
        }

        if (x > y) {
            [x, y] = [y, x]; // Swap x and y if x > y
        }

        console.log(`The range between ${x} and ${y} is: `);
        for (let i = x; i <= y; ++i) {
            process.stdout.write(`${i} `);
        }
        console.log();
        rl.close();
    });
}

main();