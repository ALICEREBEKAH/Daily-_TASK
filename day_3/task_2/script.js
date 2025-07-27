//---Function expression & Arrow functions---//

// --Declaration-- //
function add(x, y) {
    return x + y;
}

// --Expression-- //
const add1 = function(x, y) {
    return x + y;
};
console.log(add1(2, 3));

// --Arrow Function-- //
const add2 = (x, y) => x + y;
console.log(add2(2, 3));
