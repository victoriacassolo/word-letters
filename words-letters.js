const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Send a sequence of letters: ", (letters) => {
  for (var i = 0; i < letters.length; i++) {
    console.log(letters);
  }
  rl.close();
});
