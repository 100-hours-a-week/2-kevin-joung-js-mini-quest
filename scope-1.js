let temperature = 25
temperature = 30
console.log(temperature)
// 30 출력. 재할당 됐음

const MAX_TEMPERATURE = 35
MAX_TEMPERATURE = 30
console.log(MAX_TEMPERATURE)
// TypeError: Assignment to constant variable.
// const는 재할당 불가