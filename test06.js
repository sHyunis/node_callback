// callback 
// fs : read, write, append
const fs = require('fs');

console.time('test06');
console.log('0. 시작 ');

const user = {
    "id"        : 3,
    "userName"  : "누군가",
    "addr"      : "대전"
}

// 여러 단계가 되면 문제 발생
// callback hell
fs.readFile('./data/user.json', 'utf-8', (err, data)=>{
    console.log('1 : ', data);
    fs.writeFile('./data/user.json', JSON.stringify(user), 
    (err) => {
        if(err)console.log()(err)
        console.log('3. 쓰기 완료');
    });
});


console.log('2. 중간 ');



console.log('4. 끝 ');
console.timeEnd('test06');