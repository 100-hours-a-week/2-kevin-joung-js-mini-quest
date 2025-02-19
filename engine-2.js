// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 무엇이 출력될까요?
let messageLet = "Hello with let!";
// Error: ReferenceError: Cannot access 'messageLet' before initialization
// messageLet이 호이스팅 됐지만, TDZ로 초기회 전에 접근 불가


// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // 무엇이 출력될까요?
const messageConst = "Hello with const!";
// Error: ReferenceError: Cannot access 'messageConst' before initialization
// 마찬가지로 호이스팅 됐지만, TDZ로 접근 불가

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요?
const greet = () => "Hello, Arrow Function!";
// Error: ReferenceError: Cannot access 'greet' before initialization
// 마찬가지로 호이스팅 됐지만, TDZ로 접근 불가