const arr = [ "a" , "b" , "b" , "c" ,"a" , "d" , "e" , "e" ,"e" , "e"] ;

const result = arr.reduce((acc, cur) => cur in acc ? {...acc , [cur] : acc[cur] + 1} : {...acc , [cur] : 1}, {});

console.log(result);