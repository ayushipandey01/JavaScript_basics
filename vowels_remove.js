let str = "The quick brown fox jumps over the lazy dog.";

let vowels = ["a","e","i","o","u"];

let strFinal = "";

for(let char of str ){
    if(!vowels.includes(char)){
        strFinal+=char;
    }
}

console.log(strFinal);




// let vowels = "aeiou";

// console.log(str.includes(vowels));

// for(let i=0;i<vowels.length;i++){
//     // let strFinal = "";
//     for(let j=0;j<str.length;j++){
//         if(vowels[i] !== str[j]){
//             strFinal+=str[j];
//         }
//     } 
//     str = strFinal;   
// }    

// console.log(strFinal);
