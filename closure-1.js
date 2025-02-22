function createCounter() {
    let count = 0
    function increment() {
        count += 1
    }

    function decrement() {
        count -= 1
    }

    function getCount() {
        return count
    }

    return {increment, decrement, getCount}
}

const counter = createCounter()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())
counter.decrement()
console.log(counter.getCount())