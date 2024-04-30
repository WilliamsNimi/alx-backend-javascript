const readline = require('node:readline');

const inputRequest = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputRequest.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
  console.log(`Your name is: ${userInput}`);
  inputRequest.close();
});
