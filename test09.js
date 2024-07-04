// nodejs
const fs = require('fs');
const users = require('./data/user.json');
// 확장자를 생략하면 user.js > user.mjs > user.json 순으로 실행
// 확장자를 생략할 수 있지만 에러를 없애기 위해서 .json 확장자를 사용한다. 
// 자동으로 json을 배열로 바꾸어서 읽어온다.

console.log(Array.isArray(users)); // true 배열인지 확인


const user = {
    id        : 3,
    userName  : "누군가",
    addr      : "대전"
}

users.push(user);

// 이 방식은 user.json에 append 하는게 아니라 추가하고 전체를 다시 쓰는 것이기 때문에 좋은 방식은 아님
fs.writeFileSync(
    './data/user.json', 
    JSON.stringify(users, null, "  "),
    (err) => {if(err) console.log(err)}
)


