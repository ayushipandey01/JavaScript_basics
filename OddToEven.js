const arr = [12,13,14,15];
let newArr = [];

//1 method
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0 ){        
        newArr.push(arr[i]-1);        
    }
    else{
        newArr.push(arr[i]+1);
    }
}

console.log(newArr);

//2method
const result = arr.map(num => num % 2 === 0 ? num -1 : num + 1 );

console.log(result);
