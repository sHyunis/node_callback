// 즉시 실행되는 callback
// 배열함수 

const numAry = [0,1,2,3,4,5,6,7,8,9,10];

numAry.sort((prev, next) => prev-next); // 이전-이후 : 오름차순 정렬
// numAry.sort((prev, next) => next-prev); // 이후-이전 : 내림차순 정렬
// numAry.sort((prev, next) => next-prev > -1, 0, 1); //뺀 값이 양,음수에 따라 정렬방식이 바뀐다. 

console.log(numAry);

const filtered = numAry.filter(num => num % 3 === 0);
// const filtered = numAry.filter(function(num){return num%3 === 0 && num});
console.log(filtered); // 결과 : [ 0, 3, 6, 9 ]


const find = numAry.find(num => num === 6)
console.log(find); // 결과 : 6

const map = numAry.map(num => num * 2)
console.log(map); // 모든 값이 두배가 됨

