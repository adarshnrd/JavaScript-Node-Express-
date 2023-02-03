//console.log("hello");
function hello(string) {
    console.log("hello " + string);
}
// hello("adarsh");
// var n :Number=1;
// console.log(n);
//dataTypes
var isWinter = false;
var count = 5;
var names = "Adarsh";
var namess = ["Adarsh", "Rock", 45, null];
var starks;
(function (starks) {
    starks[starks["Jon"] = 0] = "Jon";
    starks[starks["bran"] = 1] = "bran";
    starks[starks["edder"] = 2] = "edder";
    starks[starks["catlyn"] = 3] = "catlyn";
})(starks || (starks = {}));
; //is a set of string or key to refer.
var cat = starks.catlyn;
function getName() {
    console.log("winter is comming");
}
getName;
