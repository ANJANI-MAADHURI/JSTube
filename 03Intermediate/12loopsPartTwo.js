const myStates = [
    "Delhi",
    "AP",
    1947,
    "Karnataka",
    "Gujrat",
    "Assam",
];

// 
let i = 0;
for (; ;){
    if (i > 3) break;
    console.log(i);
    i++;
}
// 
myStates.forEach((s) => (console.log(s)));
// Gives the same out put as above line. 
// The outside paranthesis () are removed
myStates.forEach((s) => console.log(s));