/*jshint esversion: 6 */
import * as readline from 'node:readline';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

await rl.question('What is your name? ', (userInput) => {
    console.log(`Hello ${userInput}`);
    rl.close();
});
