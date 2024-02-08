const readline = require("readline")

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

});

function ifElse(number) {
    if(number > 99){
        console.log("Three digit number or above")
    }

    else{
        console.log("Not a three digit number or above")
    }
}

rl.question("Enter the number: ", (input) =>{
    
    var number = parseInt(input)
    console.log(ifElse(number))
    rl.close()
})