// callback 
// fs : read, write, append
const fs = require('fs');

console.log('0. 시작 ');

// 처리 환경이 되면 0초 후에 실행한다.
setTimeout(()=>{
    console.log('1. setTimeout');
}, 0)
setTimeout(()=>{
    console.log('2. setTimeout');
}, 0)
console.log('3. 중간 ');

setTimeout(()=>{
    console.log('4. setTimeout');
}, 0)

console.log('5. 끝 ');
// 결과 : 0 3 5 1 2 4