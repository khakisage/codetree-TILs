function min(a, b, c) {
    let min = 0;
    if (a < b && a < c) min = a;
    if (b < a && b < c) min = b;
    if (c < a && c < b) min = c;
    console.log(min)
}

const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [x, y, z] = [input[0], input[1], input[2]];
min(x, y, z);