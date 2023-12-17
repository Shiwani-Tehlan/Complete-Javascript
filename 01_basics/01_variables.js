const accountId = 212121;
let accountEmail = "shiwani@google.com";
var accountPassword = 12345;
accountState = "yes"; // js allows you to declare something even without a keyword
let accountCity;
/*
Avoid using var because of issue in block scope
and functional scope.
*/
accountEmail = "abab@gmail.com"
accountPassword = 23;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);