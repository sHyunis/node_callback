// 출력하기
// 재사용성 up
function even(m){
    if(m%2 === 0){
        console.log(m);
    }
}
function odd(m){
    if(m%2 !== 0){
        console.log(m);
    }
}
function odd5(m){
    if(m%5 === 0){
        console.log(m);
    }
}

// log(1)
// log(2)
const numAry = [0,1,2,3,4,5,6,7,8,9,10];
// function loop(ary){
//     ary.forEach(num => {
//         if(num%2 === 0){
//             console.log(num);
//         }
//     });
// }

// 2.
// function loop(ary){
//     ary.forEach(num => {
//         even(num);
//         // 짝수만 구하기
//     });
// }

// 함수를 파라미터로 넘길 수 있다.
// 3. 어떤 용도로도 사용할 수 있는 함수
function loop(ary, callback){
    ary.forEach(num => {
        callback(num);
    });
}

// 4. 고차함수 : 함수를 파라미터로 갖거나 함수를 리턴하는 함수
function highOrderFunction(ary, callback){
    ary.forEach(num => {
        callback(num);
    });
}

loop(numAry, even)
loop(numAry, odd)
loop(numAry, odd5)


