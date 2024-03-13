// SRP 단일 책임 원칙
// 하나의 클래스는 하나의 책임만 가져야 한다.

// 테이블 하나를 기준으로?
class UserService {
  constructor(private db: Database) {}

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: User): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }
}

class EmailService {
  // 이메일 관련된 기능은 이메일 서비스에서 총괄하는게 맞습니다.
  // 다른 서비스에서 이메일 관련된 기능을 쓴다는 것은 영역을 침범하는 것이에요!
  sendWelcomeEmail(user: User): void {
    // 이메일 전송 로직
    console.log(`Sending welcome email to ${user.email}`);
  }
}

//https://inpa.tistory.com/entry/OOP-%F0%9F%92%A0-%EC%95%84%EC%A3%BC-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-SRP-%EB%8B%A8%EC%9D%BC-%EC%B1%85%EC%9E%84-%EC%9B%90%EC%B9%99

// OCP 개방 폐쇄 원칙
// 확장에는 열려있고, 수정에는 닫혀 있어야 한다.

class BossGoblin {
  protected HP = 100;
}

class Goblin extends BossGoblin {
  protected HP = 50;
}

// LSP 리스코프 치환 원칙
// 서브 타입은 언제나 슈퍼 타입으로 교체할 수 있어야 한다.
class Bird {
  fly(): void {
    console.log('펄럭펄럭~');
  }
}

class Penguin extends Bird {
  // 으잉? 펭귄이 날 수 있나요? 펭귄이 펄럭펄럭~ 한다는 것은 명백한 위반이죠.
}

// + 펭귄이 fly라는 메소드를 오버라이딩 해서 자신에 맞게 변경하면 안될까?
// -> 이는 좋은 방안이 아닌데, 부모 클래스의 Bird, fly라는 논제는 날 수 있는 새라는 전제로 만들어진 것이기 때문에, 이를 변경하는 것은 옳지 않다.
// 오버라이딩은 부모 메소드(프로퍼티)의 동작을 변경하는 것이 아니라, 확장하는 것이다.

class Animal1 {
  makeSound(): void {
    console.log('동물이 소리를 냅니다.');
  }
}

class Dog1 extends Animal1 {
  // 올바른 오버라이딩 예시: 상위 클래스의 의미를 변경하지 않고 확장함
  makeSound(): void {
    console.log('멍멍!');
  }
}

class Cat1 extends Animal {
  // 올바른 오버라이딩 예시: 상위 클래스의 의미를 변경하지 않고 확장함
  makeSound(): void {
    console.log('야옹~');
  }
}

// ISP 인터페이스 분리 원칙
// 클라이언트는 자신이 사용하지 않는 메소드에 의존 관계를 맺으면 안된다.

interface Human {
  walk(): void;
  talk(): void;
  eat(): void;
}

interface Animal2 {
  walkUseFourLegs(): void;
}

const person: Human & Animal2 = {
  walk() {},
  talk() {},
  eat() {},
  walkUseFourLegs() {}, // 인간에게 네발로 걷기는 필요하지 않아보임.,
};
