const color = 'blue';

const firstLevel = () => {
    let color = 'red';

    const secondLevel = () => {
        let color = 'green';
        console.log(color); // (1)
    };

    secondLevel();
    console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)

/*
결과:
green
red
blue

이유:
JS는 렉시컬 스코프를 따르기 때문에 함수의 선언위치에 따라 스코프가 결정됨
(1) secondLevel의 스코프에서 color를 찾아 green 출력
(2) firstLevel 스코프에서 color를 찾아 red 출력
(3) global 스코프에서 color를 찾아 blue 출력
 */