const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function triangle(a, b, c){
    
    if(a < b + c && b < a + c && c < a + b)
    {
        if(a === b && b === c)
        {
            return "Equilateral triangle"
        }
        else if(a === b || b === c || a === c)
        {
            return "Isosceles triangle"
        }
        else
        {
            return "Scalene triangle"
        }
    }
    else
    {
        return "Not a triangle"
    }

}

rl.question('Enter the a side of triangle: ', (answer1) => {
    rl.question('Enter b side of triangle: ', (answer2) => {
        rl.question('Enter c side of triangle: ', (answer3) => {
            
            const result = triangle(parseInt(answer1), parseInt(answer2), parseInt(answer3));

        console.log("Triangle type: ", result);
        
        rl.close();
        });
    });
});