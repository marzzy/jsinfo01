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
