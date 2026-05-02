const chalk = require("chalk");

function colorfulMessage() {
  console.log(chalk.blue("Hello World!"));
  console.log(chalk.red.bold("Important message!"));
  console.log(chalk.green("Everything works 🎉"));
}

module.exports = colorfulMessage;