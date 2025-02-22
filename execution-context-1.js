const message = 'Hello, JavaScript!';

const showMessage = () => {
    console.log(message); // A
    let message = 'Hello, ES6!';
    console.log(message); // B
};

showMessage();

/*
ReferenceError: Cannot access 'message' before initialization
이유: 함수 내부에서 let으로 선언한 message가 호이스팅되어 A의 message는 함수 내부의 message를 참조.
하지만 초기화 되기 전엔 TDZ에 있으므로 접근할 수 없음
 */