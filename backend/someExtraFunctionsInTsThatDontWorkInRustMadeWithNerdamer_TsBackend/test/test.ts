import nerdamer = require("../backend/nerdamer-master/all");

console.log("Gello, world!");

var lel = nerdamer.diff_with_var_replacement('x^2', 'x', '1', '2');

console.log(lel.toString());