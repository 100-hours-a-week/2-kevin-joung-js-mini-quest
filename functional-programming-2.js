// 함수형 프로그래밍 미니퀘스트 2번
const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((n) => {
        sum += n
    });
    return sum;
};

const arr = [1, 2, 3, 4, 5]
console.log(sumArray(arr))