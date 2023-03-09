const fs = require("fs");

let b = JSON.parse(fs.readFileSync("test.json"));
console.log(b.results[0].title);
//console.log(a.results[0].title);
