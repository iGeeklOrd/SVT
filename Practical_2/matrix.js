const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function matrixMultiplication(matrix1, matrix2) {
    let result = [];

    // Initialize the result matrix with zeros
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            result[i][j] = 0;
        }
    }

    // Perform matrix multiplication
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

function inputMatrix(prompt) {
    return new Promise((resolve, reject) => {
        let matrix = [];
        rl.question(prompt, rows => {
            rows = parseInt(rows);
            rl.question("Enter number of columns: ", columns => {
                columns = parseInt(columns);
                console.log("Enter the elements row-wise:");
                let rowsRead = 0;
                let columnsRead = 0;
                let row = [];
                const readNextRow = () => {
                    rl.question("", value => {
                        row.push(parseInt(value));
                        columnsRead++;
                        if (columnsRead === columns) {
                            matrix.push(row);
                            row = [];
                            rowsRead++;
                            columnsRead = 0;
                            if (rowsRead === rows) {
                                resolve(matrix);
                            } else {
                                readNextRow();
                            }
                        } else {
                            readNextRow();
                        }
                    });
                };
                readNextRow();
            });
        });
    });
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

async function main() {
    console.log("Matrix Multiplication Program");
    const matrix1 = await inputMatrix("Enter details for first matrix:\nEnter number of rows: ");
    const matrix2 = await inputMatrix("Enter details for second matrix:\nEnter number of rows: ");
    
    const result = matrixMultiplication(matrix1, matrix2);

    console.log("Resultant matrix:");
    printMatrix(result);

    rl.close();
}

main();