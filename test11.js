// nodejs
const fs = require('fs');


const readFile =  () => {
    try{
        const data =  fs.readFileSync( './data/user.json', 'utf-8');
        const users = JSON.parse(data);
        return [...users];
    }catch(err){
        if(err)console.log(err);
    }finally{
        console.log('readFile 처리완료');
    }
}

// readFile();
const users = readFile();

// 원하는 것을 찾기(고차함수)
const filteredAry = users.filter(user => user.userName === '누군가');
console.log(filteredAry);

const deleteAry = users.filter(user => user.userName !== '누군가');
console.log(deleteAry);

const writeJson = require('./test10.js');
writeJson(deleteAry);

// 하나 데이터를 받아서 화면에 표현