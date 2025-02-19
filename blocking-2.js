// 블로킹 논블로킹, 동기 비동기 미니퀘스트 2번
console.log('Start')

setTimeout(() =>{
    console.log('Async Operation Complete');
}, 1000);

console.log('End');

// Output:
/*
Start
End
Async Oo
 */
// setTimeout으로 1초 후에 콜백 함수를 실행하도록 하고, 이후 코드를 실행
