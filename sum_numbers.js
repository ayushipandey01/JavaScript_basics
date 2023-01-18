const arr = [23,45,11,20,75,64,25,5];
let sum =0 ;

//1 method
for(let i=0;i<arr.length;i++){
    if(arr[i]< 40 ){
        sum+=arr[i];
    }
}

console.log(sum);

//2 method

const result = arr.reduce((acc , cur ) => cur < 40 ? acc + cur : acc , 0);

console.log(result);