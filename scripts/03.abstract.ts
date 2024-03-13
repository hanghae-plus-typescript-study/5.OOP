// 구현은 자식에게 맡긴다.

abstract class Shape {
  // abstract
  abstract getArea(): number; // 추상 함수 정의!!!

  // non abstract
  printArea(name: string) {
    console.log(`${name}도형 넓이: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    // 원의 넓이를 구하는 공식은 파이 X 반지름 X 반지름
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    // 사각형의 넓이를 구하는 공식은 가로 X 세로
    return this.width * this.height;
  }
}

const circle = new Circle(5);
circle.printArea('circle');

const rectangle = new Rectangle(4, 6);
rectangle.printArea(`rectangle`);
