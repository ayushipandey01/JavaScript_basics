let str = "ayushi_pandey";

//1 method
// for(let i=0;i<str.length;i++){
//     let subString = str.substring(i);
//     console.log(subString);
// }

//2 method

for(let i=0;i<str.length;i++){
    for(let j=i+1;j<=str.length;j++){
        console.log(str.slice(i , j));
    }
}