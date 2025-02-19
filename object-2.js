// JS 객체 미니퀘스트 2번
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const jane = new Person("Jane Doe", 25);
jane.greet();