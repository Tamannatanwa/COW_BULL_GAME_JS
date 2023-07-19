const list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getRandomElement(list1) {
  const res = [];
  for (let i = 1; i <= 5; i++) {
    const index = Math.floor(Math.random() * list1.length);
    res.push(list1[index]);
    list1.splice(index, 1);
  }
  return res;
}
function checkElement() {
  let c = require("readline-sync");
  choose = c.question("Do you want to play again? yes/no\n").toLowerCase();
  if (choose == "yes") {
    let u = require("readline-sync");
    username = u.question("Enter the Name:-");
    let y = Guess_no(username);
  } else {
    console.log("Thanks for playing!");
  }
}
function Guess_no(username) {
  let list3 = [];
  let list4 = [];
  let x = getRandomElement(list1);
  console.log(x);
  let total = 0;
  for (let j = 1; j <= 10; j++) {
    let intput = require("readline-sync");
    y = intput.questionInt("Guess the  number:-");
    let int = require("readline-sync");
    r = int.questionInt("Guess the  Position:-");
    let EXTRA = x.findIndex(check);
    let extra = x.find(check);
    function check(item) {
      return item == y;
    }
    if ((EXTRA == r) & (y == extra)) {
      total += 1;
      console.log("BULL");
      list3.splice(r, 0, y);
    } else if (y == extra) {
      list4.push(y);
      console.log("This is correct numbers you can reuse it");
      console.log("cow");
    }
    else if((EXTRA !== r) & (y !== extra)){
        console.log("Both numbers and Position are Incorrect");
    }
    if (total == x.length) {
      j = 11;
    }
  }
  console.log(list3);
  let i = 0;
  let count = 0;
  while (i < x.length) {
    if (x[i] == list3[i]) {
      count += 1;
    }
    i++;
  }
  if (x.length == count) {
    console.log(`**Congratulation ${username} you are the winner**`);
  } else {
    console.log(`Opps you are the looser ${username}}`);
  }
  checkElement();
}
let u = require("readline-sync");
username = u.question("Enter the Name:-");
Guess_no(username);
