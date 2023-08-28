const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var code1 = "";
var code21 = "";

function verify(code3, code2) {
  code3 === code2 ? console.log("equal") : console.log("diff");
}

rl.question("Send a first code: ", (code) => {
  code1 = code;

  rl.question("send a second code:", (code2) => {
    code21 = code2;
    console.log(code21);
    verify(code1, code21);
    rl.close();
  });
});
