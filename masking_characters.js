str = "1234567899997898476547684569827";

//output = 12345678####;

let len = (str.length)-5;
let newStr = "";

for(let i=0;i<str.length;i++){    
    if(i>len){
        newStr+="#";
    }
    else{
        newStr+=str[i];
    }
}

console.log(newStr);

//second approach


let maskChar = "#";

let updatedMaskChar = maskChar.repeat(4);

// console.log(updatedMaskChar)

let finalStr = str.slice(0,str.length-4) + updatedMaskChar ;

console.log(finalStr);
