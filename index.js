let statement = document.getElementById('text');

let send = document.getElementById('send');
statement = window.prompt("enter palindrom check");
let textin = document.getElementById('output');
function palindromeChecker(statement){

    //firstly we create a Regex of white spaces and make it globle to this new string
    let newString = statement.replace(/\W+|_/g, "").toLowerCase();
    let reversedString = newString.split("").reverse().join("");
    console.log(reversedString, newString, newString===reversedString);

    if(newString != reversedString){
        textin.innerHTML="not a palindrome"
        return false;
    }
    console.log(newString);
    textin.innerHTML="palindrome"
    return true;
}
palindromeChecker(statement);

