const accountId = 1234567890;
let email = "ajitendra363";
var accountPassword = "1234567890";
accountCity="dELHI";  // global variable
/*
//accountId=456212345; // This will throw an error because const variables cannot be reassigned
// preferred to use const for variables that won't change
//preferred to use let for variables that will change
//preferred to use var for global variables
// preferred to use camelCase for variable names
// preferred to use meaningful variable names
// preferred to use const for constants
// preferred to use let for variables that will change
// preferred to use var for global variables
//BUT SHOULD NOT USE VAR IN MODERN JAVASCRIPT*/
console.log(accountId); // 1234567890
console.log(email); // ajitendra363
console.log(accountPassword); // 1234567890
console.log(accountCity); // Delhi
console.table([accountId, email, accountPassword, accountCity]); // Display in a table format