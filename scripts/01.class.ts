
/**
 * 1. 클래스
 * 단순하게 객체를 생성하는 툴이다.
 *
 * 2. this
 * 클래스 내부에서 사용되는 키워드로, 클래스가 인스턴스화 될 때 생성된 객체를 가리킨다.
 */
class Person {
    // 프로퍼티
  name: string;
  age: number;

    // 생성자는 클래스가 인스턴스화 될 때 호출된다.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

    // 메서드
  sayHello() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
  }
}

const spartan = {
    name: 'Spartan',
    age: 30,
    sayHello: function () {
        console.log(`안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    }
}

const person = new Person('Spartan', 30);
person.sayHello();

/**
 * 접근 제한자
 */
class Person2 {
  // private 키워드를 사용하면 클래스 내부에서만 접근이 가능하다.
  private name: string;
  // protected 키워드를 사용하면 클래스 내부와 상속받은 클래스에서만 접근이 가능하다.
protected age: number;
    // public 키워드를 사용하면 클래스 외부에서도 접근이 가능하다.
public log : string


  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.log = 'Hello'
  }

  public sayHello() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`);
  }
}