let str = "prakash";

//output --> c{wujk

let shiftByPos = 2;
let finalOutput = "";
for(let i=0;i<str.length;i++){
    let currentPosition = str.charCodeAt(i);
    let newPosition = currentPosition + shiftByPos;

    let finalPostion = String.fromCharCode(newPosition);
    finalOutput+=finalPostion;
}

console.log("Original String : " , str);
console.log("Encoded String : " , finalOutput);
