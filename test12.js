const http = require('http');
// 서버, 클라이언트 간에 어떻게 데이터를 주고 받을 것인가?

const server = http.createServer(); // 서버 생성

// 처리 : 제한된 요청 들어주기

//                      순서    주의
server.on('request', (request, response)=>{
    console.log(request.url);
    // 브라우저에서 localhost:3000/
    if(request.url === '/'){
        response.end('hello!!!');
    }
})

server.listen(3000, ()=>{console.log('listen 3000')}) // 서버를 계속 켜줌 (포트번호, 콜백)

