let str = "madam";
let arr = str.split("");

arr.reverse();

let finalOutput = arr.join("");

if(str === finalOutput){
    console.log("Its a Palindrome!!!");
}else{
    console.log("Its not a Palindrome!!!")
}