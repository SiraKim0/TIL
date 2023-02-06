# type alias/interface/class

## 🤔type alias

> type은 별칭(alias)을 부여해 정의해두고 타입을 사용한다.
> 

## 🤔interface

> interface는 특정 자료형의 구조를 나타낸 커스텀 타입이며 ES6에서 지원하지 않고 타입스크립트에서 사용할 수 있다.
> 

## 🤔class

> class는 객체를 생성하기 위한 틀이다. javascript에서는 ES6에서 도입되었다.
> 
- class를 선언하면 바로 class 객체를 만들 수 있다.
- constructor(생성자)를 이용하여 class 객체의 초기 값을 설정한다.
    - class 내부에는 하나의 constructor만 존재할 수 있다. (2개 이상 사용시 syntax error)

```tsx
class Person {
    name: string;
    age: number;
    constructor() {
        //모든 멤버 변수는 초기화 되어야 한다
        this.name = 'Kim';
        this.age = 14;
    }
}
const person = new Person();
```

- class의 상속. 자식 class가 부모 class의 속성과 메소드를 사용할 수 있다.

```tsx
class Person {
    name: string;
    age: number;
    constructor() {
        this.name = 'Kim';
        this.age = 14;
    }
}
class Student extends Person {
	school: string;
	constructor() {
		super();
		this.school = "한국중학교"
	}
	intro() {
		console.log(`${this.name}은 ${this.age}살 이고, ${this.school}를 다닌다.`);
	}
}
```

---

## 🤔type과 interface 차이

### 1. 타입을 확장하는 방법

- **interface**는 `extends`키워드로 확장한다.
    
    ```tsx
    //interface 정의
    interface Person = {
    	name: string;
    	age: number;
    };
    //interface 상속
    interface PersonExtra extends Person{
    	friends: string[];
    	hobby: string;
    }
    const person1: PersonExtra = {
    	name: "kim",
    	age: 20,
    	freinds: ["park", "choi", "lee"],
    	hobby: "tennis",
    };
    const person2: Person = {
    	name: "kim",
    	age: 20,
    };
    ```
    
- **type**은 특수문자 `&` 연산자로 확장한다.
    
    ```tsx
    type Person = {
    	name: string;
    	age: number;
    };
    type PersonExtra = {
    	freinds: string[];
    	hobby: string;
    };
    const person1: PersonExtra & Person = {
    	name: "kim",
    	age: 20,
    };
    const person2: Person2 = {
    	name: "kim",
    	age: 20,
    };
    ```
    

### 2. 중복 선언 시

- interface는 새로운 속성을 추가하기 위해 **동일한 이름으로 확장하는 것이 가능**하다.

```tsx
interface Person {
	name: string;
}
interface Person {
	age: number;
}
```

- type은 새로운 속성을 추가하기 위해 **동일한 이름으로 선언할 수 없다**. (식별자 중복 X)

```tsx
type Person {
	name: string;
}
type Person { //error
	age: number; 
} 
```

## 🤔class와 interface의 차이

- class는 **선언과 구현이 모두 존재**하지만 interface는 **선언만 존재**한다.
- class는 javascript에서 사용할 수 있지만 interface는 typescript 문법에서만 사용할 수 있다. 컴파일 후 사라진다.

## 정리

- type alias는 간단하지만 확장성에 제한이 있으므로 상속이나 확장이 필요하지 않고 단순 원시 값으로 사용되는 경우에 사용한다. 단순히 type을 정의하고 제한하는 목적일 경우 적합하다.
- class와 interface는 동일하게 extends 키워드를 사용하여 상속을 할 수 있으나, 함수를 포함하고 있는 객체를 만들 때나 new 키워드를 사용하여 인스턴스를 만들 때 class를 사용한다. new 키워드를 사용하지 않고 상속 구현만 할 것이라면 interface를 사용한다.
