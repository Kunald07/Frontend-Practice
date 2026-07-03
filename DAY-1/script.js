// QUESTION-1
// write a function getGrade(score) that:
// * Takes a student's marks (0 to 100)
// * Reutrns the grade based on this logic:
// 90-100 A+
// 80-89  B+
// 70-79  C+
// 60-69  D+
// 33-59  E+
// 00-32  Fail
// Anything else



function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 33 && score <= 59) {
    return "E";
  } else if (score >= 0 && score <= 32) {
    return "FAIL";
  } else {
    return "Anything Else";
  }
}

// console.log(getGrade(71));

// 2nd approach for the same question - using early return pattern.

function getGrade(score) {
  if (score >= 90 && score <= 100) return "A";
  if (score >= 80 && score <= 89) return "B";
  if (score >= 70 && score <= 79) return "C";
  if (score >= 60 && score <= 69) return "D";
  if (score >= 33 && score <= 59) return "E";
  if (score >= 0 && score <= 32) return "Fail";
  return "Invalid Marks";
}

// console.log(getGrade(23));





// QUESTION-2
// ROCK-PAPER-SCISSOR LOGIC

function RPS(user, computer){
    if(user === "rock" && computer === "scissor") return "User Won";
    if(user === "scissor" && computer === "paper") return "User Won";
    if(user === "paper" && computer === "rock") return "User Won";
    return "Computer Won"
}

// console.log(RPS("rock", "paper"));








//QUESTION-3
// Print numbers from 1 to 10 using a for loop.

for(let i = 1; i <11; i++){
    // console.log(i);
    
}



//QUESTION-4
//Print numbers from 10 to 1 using a while loop

// start
// while(end) {
//     code
//     change;
// }


//using while loop
let i = 10;
while(i>0) {
    // console.log(i);
    i--;
}


//using FOR loop
for(let i = 10; i > 0 ; i--){
    // console.log(i);
}






//QUESTION-5
//Print even numbers from 1 to 20 using a loop.

for(i= 1; i < 21; i++) {
    if(i % 2 === 0) {
        console.log(i); 
    }
}


