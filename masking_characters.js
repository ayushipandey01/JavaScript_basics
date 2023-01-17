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