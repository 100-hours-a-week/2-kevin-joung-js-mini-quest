function messageMarker(prefix) {
    function makeMessage(suffix) {
        return prefix + suffix
    }

    return makeMessage
}

const marker = messageMarker("hello, ")
const str = marker("world!")
console.log(str)