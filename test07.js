// callback 
// fs : read, write, append
const fs = require('fs');

const user = {
    "id"        : 3,
    "userName"  : "누군가",
    "addr"      : "대전"
}

console.time('test07');
fileSystemHandle();
console.timeEnd('test07')

// async
// 순차처리
async function fileSystemHandle(){
    console.log('0. 시작 ');
    // await : 끝날 때 까지 기다린다. (async 필요)
    const data = await fs.readFile('./data/user.json', 'utf-8', (err)=>{if(err)console.log(err)});
    console.log('1. data 읽기 완료', data);
    console.log('2. 중간 ');
    
    await fs.writeFile('./data/user.json', JSON.stringify(user), 
        (err) => {
            if(err)console.log()(err)
            console.log('3. 쓰기 완료');
    });

    console.log('4. 끝 ');
}