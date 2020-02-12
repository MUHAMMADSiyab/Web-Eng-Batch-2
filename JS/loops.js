// JavaScript Loops
var name = "john";

for (let i = -10; i <= 10; i++) {
  //   if (i === 5) {
  //     break;
  //   }

  if (i === 7) {
    continue;
  }

  //   console.log(i);
}

let users = ["john", "jane", "sara", "brad"];

for (let i = 0; i < users.length; i++) {
  //console.log(names[i]);
}

// Shorthand version of For loop
for (user of users) {
  //console.log(user);
}

// For accessing object keys
for (i in users) {
  //console.log(user);
}

// While

var i = 18;

while (i < 15) {
  i++;
  //console.log(i);
}

// Do-While
do {
  i++;
  console.log(i);
} while (i < 15);
