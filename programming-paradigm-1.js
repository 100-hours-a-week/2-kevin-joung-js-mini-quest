// 프로그래밍 패러다임 미니퀘스트 1번
const arr = [1, 2, 3, 4, 5]

function sumArr(arr) {
    return arr.reduce((acc, cur) => acc + cur)
}

console.log(sumArr(arr))