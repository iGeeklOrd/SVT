const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let x, y;
    let n = 0;

    function askInput() {
        rl.question("Enter two numbers between 1 and 100: ", (input) => {
            const [xInput, yInput] = input.trim().split(" ").map(Number);
            if (isNaN(xInput) || isNaN(yInput)) {
                console.log("Invalid input. Please enter two integers.");
                askInput(); // Ask for input again
            } else {
                x = parseInt(xInput);
                y = parseInt(yInput);
                if (x > 100 || y > 100) {
                    console.log("Incorrect input. Numbers should be between 1 and 100.");
                    askInput(); // Ask for input again
                } else if (x < 0 || y < 0) {
                    console.log("Negative numbers are not allowed.");
                    askInput(); // Ask for input again
                } else {
                    n = 1;
                    console.log(`Range between ${x} and ${y}: `);
                    for (let i = x; i <= y; ++i) {
                        process.stdout.write(`${i} `);
                    }
                    console.log();
                    rl.close();
                }
            }
        });
    }

    askInput();
}

main();
