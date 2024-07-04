// nodejs
const fs = require('fs');


const readFile =  () => {
    try{
        const data =  fs.readFileSync( './data/user.json', 'utf-8');
        const users = JSON.parse(data);
        return [...users]; // 기존에 있던 배열의 주소가 아닌 데이터를 복사
    }catch(err){
        if(err)console.log(err);
    }finally{
        console.log('readFile 처리완료');
        // open, close
    }
}

// readFile();
const users = readFile();

const user = {
    id        : 3,
    userName  : "누군가",
    addr      : "대전"
}


users.push(user);

function writeJson(users){
    try{
        fs.writeFileSync(
            './data/user.json', 
            JSON.stringify(users, null, "  "))
    }catch(err){
        if(err) console.log(err)
    }finally{
        console.log('writeJson 처리완료');
    }
}

writeJson(users);

module.exports = writeJson; // module로 writeJson만 뽑았다.