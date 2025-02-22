class Square {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    isSquare() {
        return this.width === this.height;
    }
}

class Rectangle extends Square{

}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.isSquare())