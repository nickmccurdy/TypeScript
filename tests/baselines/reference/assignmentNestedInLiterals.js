//// [assignmentNestedInLiterals.ts]
var target, x, y;
target = [x = 1, y = x];

var aegis, a, b;
aegis = { x: a = 1, y: b = a };


//// [assignmentNestedInLiterals.js]
var target, x, y;
target = [x = 1, y = x];
var aegis, a, b;
aegis = { x: a = 1, y: b = a };
