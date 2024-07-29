
#! /usr/bin/env node

import inquirer from "inquirer";

let num_1 = Math.floor(Math.random() * 1000) + 1;
console.log(num_1);
console.log(`Welcome to our number guessing game. You have 25 chances to guess the right number`);
console.log(``)
let x;
let no_of_attempts = 0;

while (num_1 != x && no_of_attempts <=24) {
  no_of_attempts++;
  const guess_num = await inquirer.prompt([
    {
      type: "number",
      name: "inp",
      message: "Please enter a number between 1 to 1000",
    },
  ]);
  console.log(``)
  x = guess_num.inp;
  if (num_1 == guess_num.inp) {
    console.log(
      `You have guessed the right number in ${no_of_attempts} attempt(s)`
    );
  } else {
    if (no_of_attempts > 15 && no_of_attempts <25) {
      console.log(
        `Your desired number is between ${num_1 - 15} and ${num_1 + 15}`
      );
    }
    else {if (no_of_attempts == 25){
      console.log(`You have availed all 25 chances. The right answer is ${num_1}`)
    }
  }
  }
}
