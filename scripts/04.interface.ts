interface UserInterface {
  name: string;
  age: number;
  email: string;
  phone: string;
}

const user: UserInterface = {
  name: 'Spartan',
  age: 30,
  email: 'asdf',
  phone: '010',

  sayHello() {
    console.log(
      `안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}살입니다.`,
    );
  },
};
