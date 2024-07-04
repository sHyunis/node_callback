// callback 
// fs : read, write, append
const fs = require('fs');
// const fsPromises = require('fs').promises

const user = {
    id        : 3,
    userName  : "누군가",
    addr      : "대전"
}

// async
// 순차처리
// async function fileSystemHandle(){
const fileSystemHandle = async () => {
    console.log('0. 시작 ');
    // await : 끝날 때 까지 기다린다. (async 필요)
    const data = await fs.readFileSync('./data/user.json', 'utf-8', (err)=>{if(err)console.log(err)});
    console.log('1. data 읽기 완료', data);
    console.log('2. 중간 ');
    
    // 없으면 만들어서 쓰고
    // 있으면 덮어쓴다.
    // await fs.writeFileSync('./data/user.json', JSON.stringify(user), 
    //     (err) => {
    //         if(err)console.log()(err);
    //         // console.log('3. 쓰기 완료');
    // });
    // console.log('3. 쓰기 완료');


    fs.renameSync('./data/user.json', './data/my.json', (err)=>{
        if(err)console.log(err);
    });

    fs.appendFileSync('./data/my.json', JSON.stringify(user, null, "  "), (err)=>{
        if(err)console.log(err);
    });

    console.log('4. 끝 ');
}


console.time('test08');
fileSystemHandle();
console.timeEnd('test08')
