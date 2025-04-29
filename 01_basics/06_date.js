console.log(Date())

let date = new Date()
console.log(date) // 2023-10-05T07:23:00.000Z
console.log(date.getDate()) // 5    
console.log(date.getDay()) // 4
console.log(date.getFullYear()) // 2023
console.log(date.getHours()) // 7
console.log(date.toDateString()) // 0

// timestamp
console.log(date.getTime()) // 1696480980000

let myTimeStamp =Date.now()
console.log(myTimeStamp) // 1696480980000