class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('동물 소리~');
  }
}

/**
 * 3. 슈퍼타입과 서브타입
 * 서브타입은 슈퍼타입에 속하는 타입을 말합니다.
 * string이 서브타입이라면 any는 슈퍼타입.
 * 이는 타입에 적용되고, 타입으로 사용할 수 있는 클래스에도 적용됩니다.
 * Cat은 Animal의 서브타입입니다.
 */
class Dog extends Animal {
  age: number;

  constructor(name: string) {
    // 부모 클래스의 생성자를 호출하기 위해 super 키워드를 사용합니다.
    super(name);
    this.age = 5;
  }

  // 오버라이딩을 통해 부모 클래스의 동작을 변경할 수 있습니다.
  makeSound() {
    console.log('멍멍!'); // 부모의 makeSound 동작과 달라요!
  }

  eat() {
    // Dog 클래스만의 새로운 함수 정의
    console.log('강아지가 사료를 먹습니다.');
  }
}

class Cat extends Animal {
  // Animal과 다를게 하나도 없어요!
}

const dog = new Dog('누렁이');
dog.makeSound(); // 출력: 멍멍!

const cat = new Cat('야옹이');
cat.makeSound(); // 출력: 동물 소리~

// upcasting, downcasting?
// upcasting: 서브타입을 슈퍼타입으로 변환하는 것

let someAny: any;
someAny = 5;

let animal: Animal;
animal = new Dog('누렁이');
