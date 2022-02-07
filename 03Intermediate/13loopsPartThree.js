const name = ["Youtube", "Netflix", "Amazon", "FaceBook", "Instagram"];

for (const n of name ) {
    console.log(n);
}

const symbols = {
    YT: "Youtube",
    NF: "Netflix",
    AZ: "Amazon",
    FB: "FaceBook",
    IG: "Instagram",
    LCO: "LearnCodeOnline.in"
}

for (const n in symbols) {
    // console.log(n);
    // console.log(symbols[n]);
    console.log(`Key is: ${n}; Value is: ${symbols[n]}`);
}