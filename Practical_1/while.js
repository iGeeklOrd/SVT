const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let x, y;
    let n = 0;

    function askInput() {
        rl.question("Enter the two numbers (between 1 and 100): ", (input) => {
            const nums = input.split(" ");
            if (nums.length !== 2 || !isValidInput(nums)) {
                console.log("Invalid input. Please enter two integers between 1 and 100.");
                askInput(); // Ask for input again
            } else {
                x = parseInt(nums[0]);
                y = parseInt(nums[1]);
                if (x > 100 || y > 100) {
                    console.log("Incorrect input. Please enter numbers between 1 and 100.");
                    askInput(); // Ask for input again
                } else if (x < 0 || y < 0) {
                    console.log("Negative number entered. Please enter positive numbers.");
                    askInput(); // Ask for input again
                } else {
                    n = 1;
                    if (x > y) {
                        [x, y] = [y, x]; // Swap x and y if x > y
                    }
                    console.log(`Range between ${x} and ${y}:`);
                    for (let i = x; i <= y; ++i) {
                        process.stdout.write(i + " ");
                    }
                    console.log();
                    rl.close();
                }
            }
        });
    }

    askInput();
}

function isValidInput(nums) {
    return nums.every(num => !isNaN(num) && num >= 1 && num <= 100);
}

main();