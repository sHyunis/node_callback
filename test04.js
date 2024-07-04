// callback 
// fs : read, write, append
const fs = require('fs');

console.time('test04');
console.log('0. 시작 ');

fs.readFile('./data/user.json', 'utf-8', (err, data)=>{
    console.log('1 : ', data);    
});

const user = {
    "id"        : 3,
    "userName"  : "누군가",
    "addr"      : "대전"
}

console.log('2. 중간 ');

fs.writeFile('./data/user.json', JSON.stringify(user), 
    (err) => {
        if(err)console.log()(err)
        console.log('3. 쓰기 완료');
});

console.log('4. 끝 ');
console.timeEnd('test04')


// 싱글쓰레드
// 한번에 하나만 처리

// 멀티쓰레드
// 여러개를 동시에 처리 = 병렬