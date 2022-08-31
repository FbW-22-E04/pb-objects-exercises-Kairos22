//1
const data = { a: 1 };
//write your code here 
function isPlainObject(obj){
    if (typeof obj === "object" && obj !== null && !Array.isArray(obj)){
        return true;
    }else {
        return false;
    }
}
console.log(isPlainObject(data)); // true

//2
const data2 = { a: 1, b: 2 };
//write your code here 
function makePairs(obj) {

    let entries = Object.entries(obj);

    console.log(entries);

    return (entries);

}
console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

//3
const data3 = { a: 1, b: 2 };
//write your code here 
function without (x, y){

    delete x[y];
    return x;

}
console.log(without(data3, 'b')); // { a: 1 }


//4
const data4 = { a: 1, b: undefined };
const data40 = { a:undefined };
//write your code here 
function isEmpty (obj){
      
    if (Object.keys(obj).length === 0 || obj[Object.keys(obj)[0]] === undefined){

        return true;
    } else {
        return false;
    }

}
console.log(isEmpty({}));
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 

//5
const data5 = { a: 1, b: 1 };  
const data51 = { a: 1, b: 1 };  
const data52 = { a: 1, b: 2 };
//write your code here 
function isEqual (a, b) {

    if (JSON.stringify(a) === JSON.stringify(b)){

        return true;
    }else {
        return false;
    }


}


console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6
const data6 = { a: { b: [1, 2, 3] } }
//write your code here 
function invoke(obj, ab, spl, arr) {
  const newArr = ab.split(".");
  console.log(newArr);
  const result = newArr.reduce((acc, key) => {
    console.log(`Key is ${key}`);
    console.log(`acc[key] ${acc[key]}`);
    console.log(`obj[key] ${obj[key]}`);
    acc = acc[key] === undefined ? obj[key] : acc[key];
    return acc;
  }, {});
  // console.log(result);
  console.log(Array.prototype[spl].apply(result, arr));
  // obj[]
  // console.log(obj);
  return obj;
}
// function invoke(obj, str, func, arr) {
//   const code = "obj" + "." + str + "." + func + "(" + arr + ");";
//   console.log(code);
//   return eval(code);
// }
console.log(invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]


// //7
// const data7 = { a: { b: undefined } };
// //write your code here 
// console.log(isEmptyDeep(data7));


// //8
// const data8 = { a: 1, b: { c: 1 } };  
// const data81= { a: 1, b: { c: 1 } };  
// const data82= { a: 1, b: { c: 2 } };
// //write your code here 
// console.log(isEqualDeep(data8, data81));// true  
// console.log(isEqualDeep(data8, data82)); // false  


// //9
// const data9 = { a: 1, b: 2 };  
// const data91 = { c: 1, b: 2 };
// //write your code here 
// console.log(intersection(data9, data91)); // { b: 2 }


// //10
// const data10 = { a: 1, b: { c: 3 } };  
// const data11 = { c: 1, b: { c: 3 } };
// //write your code here 
// console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }