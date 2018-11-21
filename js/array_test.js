'use strict';

// === http://javascript.info/objec / test 1 
// let user = {};

// user.name = 'jhon';
// console.log(user);

// user.surname = 'esmit';
// console.log(user);

// user.name = 'path';
// console.log(user);

// delete user.name;

// console.log(user);


// === http://javascript.info/objec / test 2
// function isEmpty(obj) {
//     // return obj;
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};


// console.log(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule)); // false

// === http://javascript.info/objec / test 4
// let salaries = {
    //     John: 100,
    //     Ann: 160,
    //     Pete: 130
    // }
    // let emptyTest = {};
    
    // function sumSal(obj) {
        //     let sumVal = 0;
        //     for (let key in obj) {
            //         sumVal += obj[key];
            //     }
            //     return sumVal;
            // }
            
            // console.log( "salary sum " + sumSal(salaries) );
            // console.log( "emptyTest sum " + sumSal(emptyTest) );

// === http://javascript.info/objec / test 5
function multiplyNumeric(obj) {
    for(let key in obj) {
        if (typeof (obj[key]) == 'number' ) {
            obj[key] *= 2;
        }
    }
};

// http://javascript.info/array-methods / test 01
function camalize(str){
    str = str.split('-');
    str = str.map(function(item, index) {
        if (index == 0) {
            return item;
        } else {
            item = item[0].toUpperCase() + item.slice(1);
            return item;
        }
    })
    str = str.join('');
    
    return str;
};

function makeJson(num){
    let arr=[];
    let i = num;
    while(i) {
        arr.push({
            name:`person ${i}`,
            value:i
        });
        i--;
    }
    return(arr.length);
}

// http://javascript.info/function-basics#tasks / test Function min(a, b)
function min(a, b) {
    if(a>b){
        return b;
    }
    return a;
}

// http://javascript.info/function-basics#tasks / test Function pow(x,n)

// P.S.In this task the
// function should support only natural values of n: integers up from 1
function pow(x, n) {
    if ( n == 1 ) {
        return x;
    }
    return x * pow(x, n-1);
}

// http://javascript.info/function-expressions-arrows / Rewrite with arrow functions
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask (
//     "Do you agree?", 
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
// );


// http://javascript.info/constructor-new / Create new Accumulator
// function Accumulator(init) {
//     this.initvalue = init;
//     this.read = () => {
//         this.initvalue += +prompt('how mutch add?',0);
//     };
// }
// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.initvalue); // shows the sum of these values


// http://javascript.info/constructor-new / Create new Calculator
// function Calculator() {
//     this.a;
//     this.b;
//     this.read = () => {
//         this.a = +prompt('enter first value', 0);
//         this.b = +prompt('enter 2nd value', 0);
//     };
//     this.sum = () => (this.a+this.b);
//     this.mul = () => (this.a*this.b);
// }

// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// http://javascript.info/array#array-operations
// Create an array styles with items“ Jazz” and“ Blues”.
// Append“ Rock - n - Roll” to the end.
// Replace the value in the middle by“ Classics”.Your code
// for finding the middle value should work
// for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
let arr01fun = function () {
    let styles = ['Jazz', 'Blues'];
    console.log(styles);
    styles.push("Rock-n-Roll");
    console.log(styles);
    styles[((styles.length + 1) / 2)-1] = "Classics";
    console.log(styles);
    alert(styles.shift());
    console.log(styles);

};
// arr01fun();


