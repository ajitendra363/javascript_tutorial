let score = "123" // string
console.log(typeof score) // 123123

let score1 = Number(score)// number
console.log(typeof score1) // 123123

let score = "123FDDF" // string
console.log(typeof score) // 123123

//  let score1 = Number(score)// NaN
console.log(typeof score1) // 123123

// typecasting
// 1. String to Number
// 2. Number to String
// 3. String to Boolean
// 4. Boolean to String
// 5. Number to Boolean
// 6. Boolean to Number
// 7. Object to String
// 8. String to Object
// 9. Object to Number
// 10. Number to Object
// 11. Object to Boolean
// 12. Boolean to Object
// 13. String to Array
// 14. Array to String
// 15. Array to Number
// 16. Number to Array
// 17. Array to Boolean
// 18. Boolean to Array
// 19. Array to Object
// 20. Object to Array

/*must remember that when we are converting a string to a number, if the string is not a number, it will return NaN.

* must remember this .
*/
let str1=1+'1'+"6"
comsole.log(str1) // 116
let str2=1+1+"6"
comsole.log(str2) // 26

/******************stack vs heap memory allocation*****************/

let a = 10; // stack memory allocation
let b = a; // stack memory allocation
cosole.log(a," ",b) // 10