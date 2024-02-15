const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question("Enter two numbers separated by a space (between 1 and 100): ", (input) => {
        const [x, y] = input.trim().split(" ").map(Number);

        if (isNaN(x) || isNaN(y) || x < 1 || y < 1 || x > 100 || y > 100) {
            console.log("Invalid input. Please enter two integers between 1 and 100.");
            rl.close();
            return;
        }

        const [min, max] = [Math.min(x, y), Math.max(x, y)];

        console.log(`The range between ${min} and ${max} is: `);
        for (let i = min; i <= max; ++i) {
            process.stdout.write(`${i} `);
        }
        console.log();
        rl.close();
    });
}

main();
