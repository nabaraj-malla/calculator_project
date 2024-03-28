// var op1 = 20;
// var op2 = 40;
var opr = '*';
console.log(typeof(opr));
// console.log(eval(op1+" "+opr+" "+op2));
// let opr = '';
console.log(typeof(opr));
if(opr == '') {
    console.log("operator is empty");
}

let num1 = 0;
let arr = ['10', '20', '30'];
let element = arr[0];
console.log(typeof(element));
num1 = (num1 * 10) + (+arr[0]);
console.log(num1);


let num = 1234;
console.log(num);
console.log(Math.floor(num / 10));

let num2 = 6789;
console.log(typeof(num));
num2 = num2.toString();
console.log(typeof(num2));
console.log(num2.slice(0,num2.length - 1));

