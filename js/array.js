const arr = ["사과","포도","딸기","망고","바나나"];

// map(함수): 함수를 실행한 결과가 새로운 배열로 리턴
// const result = arr.map((fruit,idx) => fruit); // [ '사과', '포도', '딸기', '망고', '바나나' ]
// const result = arr.map((fruit,idx) => {
//     fruit; // [ undefined, undefined, undefined, undefined, undefined ]
// });
// const result = arr.map((fruit,idx) => {
//     return fruit; // [ '사과', '포도', '딸기', '망고', '바나나' ]
// });
const result = arr.map((fruit, idx) => fruit);
console.log(result);