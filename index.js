const person = require("./information")
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${person.name} ${person.campus}`,
    e : "oO",
    T : "U "
}));