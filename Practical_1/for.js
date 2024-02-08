const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function forLoop(number){
    for(var i = 1; i < number; i++){
        console.log(i)
    }
    return number
}

rl.question("Enter the number: ", (input) => {
    var number = parseInt(input)
    console.log(forLoop(number))
    rl.close()
})