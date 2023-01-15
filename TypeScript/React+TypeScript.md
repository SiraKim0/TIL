# 리액트+타입스크립트

## 🧐타입스크립트란 무엇이며 왜 사용해야하는가?

> TypeScript is a **`superset`** to JavaScript = 타입스크립트는 자바스크립트의 **`슈퍼셋`** 언어이다. 슈퍼셋이란 상위집합, 즉 타입스크립트가 자바스크립트의 특성을 침범하지 않고 지원한다는 것이다.

- 자바스크립트를 기반으로 하되 **몇 가지 기능을 추가**한 것이다.
- 자바스크립트 라이브러리가 아니기 때문에 새로운 기능을 만들거나 기능을 확장하지 않는 대신 자바스크립트의 주요 문법보다 더 확장된 문법을 가진다.
- ex5의 모든 문법을 지원하고 es6 문법 대부분을 지원한다. es5의 `superest`이므로 기존의 자바스크립트(es5) 문법을 그대로 사용할 수 있다. ex6의 새로운 기능들을 사용하기 위해 babel과 같은 별도 트랜스파일러를 사용하지 않아도 es6의 새로운 기능을 기존의 자바스크립트 엔진에서 실행할 수 있다.
- 자바스크립트의 기본적인 문법들과 if 조건문, for 반복문, 객체 사용 등 동일하다.
- 타입스크립트는 **`정적타입(static typing)`** 의 특징을 갖는다.
  - 자바스크립트는 **동적타입(dynamically typed)** 언어이다)
  - 정적타입이 추가된 이유: **오류 방지**(오류 예방), **빠른 실행속도**(타입을 지정하기 때문)
  ```jsx
  //no-typescript.js
  function add(a, b) {
    return a + b;
  }
  const result1 = add(2, 5);
  const result2 = add("2", "5");
  console.log(result); //7
  console.log(result2); //25
  ```
  - 위 코드는 `add` 함수를 정의한 후 상수에 함수 호출을 저장하고 그 결과값을 콘솔에 출력한 것이다. 이때 함수에 전달한 **두 개의 값은 숫자(number)형**이다. **자바스크립트는 이를 자체적으로 알고 있다**. 함수 선언 시점에는 자료형을 특정 짓지 않고(타입이 고정되어 있지 않고) 두 개의 매개 변수를 받는다는 것만 알고 코드를 실행해 보는 것이다.
  - 숫자로 실행했을 때 두 개의 값이 `+` 연산되어 `7`이라는 값이 출력된다. (정상출력)
  - 문자열을 사용한다면 `+` 연산이 되어 두 문자열을 연결시킨 `25`라는 값이 출력된다. (오류)
    - 어떻게 보면 `25` 값이 오류라고 할 순 없다. 그러나 대규모 프로젝트에서 많은 사람들이 동일한 코드 베이스에서 작업할 것이기 때문에 함수나 객체를 의도치 않은 방식으로 사용하는 일이 발생할 수 있다. **이러한 문제를 줄이기 위해선 타입을 지정해주는 것이 좋다**.
  ```tsx
  //with-typescript.ts
  function add(a: number, b: number) {
    return a + b;
  }
  const result1 = add(2, 5);
  const result2 = add("2", "5"); //에러 표시난다.
  console.log(result1); //7
  console.log(result2); //에러
  ```
  - 위 코드는 **타입스크립트**로 작성한 코드이다.
  - **타입 표기(Type Annotation) 구문을 사용**할 수 있다. 매개변수 뒤에 콜론(:)을 추가하고 타입을 지정하면 된다.
  - 런타임에서 오류를 찾을 필요없이 코드를 작성할 때 바로 오류 표시가 된다.

## 🧐타입스크립트 설치 및 사용

```markdown
npm init -y //빈 package.json 파일 생성. 종속 라이브러리를 설치하는데 필요.
npm install typescript //해당 프로젝트에만 설치
npm install -g typescript //전역에 설치
```

- 타입스크립트는 브라우저에서 실행되지 않는다. **타입스크립트를 자바스크립트 형태로 컴파일**해야 한다. 자바스크립트는 타입 표기를 이해하지 못하므로 컴파일이 진행되는 동안 타입 표기는 모두 삭제된다.
- 컴파일 단계에서는 미처 발견하지 못했던 오류를 잡아준다. 컴파일러를 사용하려면 아래와 같이 하면 된다.

```markdown
npx tsc
npx tsc with-typescript.ts //파일 직접 지정하여 컴파일
```

## 🧐타입스크립트 기본 유형

### 1. 기본형(Primitives): number, string, boolean

- null, undefined, symbol은 나중에. 동작방식이 좀 다름. 나중에.
- 주의: 타입을 지정할 땐 소문자임.

```tsx
let age: number = 24;
let userName: string = "Max";
let isInstructor: boolean = true;
```

### 2. 복잡한 자료형: array, object

- 변수에 타입을 지정할 수 있다.
- 타입을 지정해주지 않으면 기본으로 `any` 타입으로 지정된다. 명시적으로 `let person: any` 라 지정해줄 수도 있다. `any`는 어떤 값이든 저장할 수 있으나 타입스크립트를 사용하는 주 목적과 반대되기 때문에 가급적 사용하지 않는 것이 좋다.

```tsx
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//객체 타입(object type) 정의. 동일한 구조여야 함.
let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};

//객체 배열 구조 정의
let people: {
  name: string;
  age: number;
}[];
```

### 3. 함수(function type), 매개변수(parameter)

```tsx
//function & type
function add(a: number, b: number) {
  return a + b;
}
```

- 매개변수에도 타입을 지정할 수 있다.
- 타입스크립트는 함수의 값을 통해 타입을 알고 함수 타입을 추론한다. 위 코드에서 `add`함수의 두 개의 매개변수는 number 타입이다. 이를 통해 반환 값 역시 숫자형이라 추론한다.

```tsx
//number or string 모두 가능.
function add(a: number, b: number): number {
  return a + b;
}
function add(a: number, b: number): string {
  return a + b;
}

//union type으로 지정 가능
function add(a: number, b: number): string | number {
  return a + b;
}
```

- 함수의 반환 타입을 직접 지정할 수도 있다
- 타입스크립트는 타입을 추론하기 때문에 꼭 지정해줄 필요가 없다. 명시적으로 작성하고 싶다면 적어주지만 그렇지 않을 경우 정의해줄 필요가 없다.

```tsx
//이 함수의 타입은 void 이다.
function Output(value: any) {
  console.log(value);
}
```

- return문이 없을 경우 갖는 특별한 반환 타입 void.
- void는 함수에 반환 값이 없다는 것을 의미한다. null 또는 undefined와 비슷하나 항상 함수와 결합하여 사용한다.

- 매개변수 타입 뿐 아니라 반환 값 타입도 생각해야 한다.

### 🚀 타입 추론(Type inference)

```tsx
let course = "React - The Complete Guide";
course = 12341; // 에러 발생. 타입 추론으로 타입을 지정하지 않았는데 에러가 발생함.
```

- 타입스크립의 핵심 기능인 **타입 추론(type inference)**. 명시적인 타입표기 없이도 어떤 타입을 어디 사용해야할지 추론한다. 할당된 값의 자료형을 보고 해당 값의 타입을 사용. 위 코드에서 `course` 라는 변수에 할당된 값은 문자열이므로 타입 추론이 발생해 course에 number type 값을 할당하게 되면 에러가 발생한다.

### 🚀 유니온 타입(Union Type)

```tsx
let course: string | number = "React - The Complete Guide";
course = 12341; //에러가 발생하지 않음.

let userName: string | string[]; // 타입은 문자열이나 문자열배열이다라고 타입 정의.
```

- 자바스크립트의 `||` (or 연산자)와 같이 타입을 A이거나 B이다 라고 정의하는 타입이다.
- 타입 추론을 사용하는 경우가 아니라면 유니온 타입은 타입을 지정한 곳이면 어디든 사용할 수 있다.

### ⭐ 타입 별칭(Type Aliases)

```tsx
type Person = {
  name: string;
  age: number;
};
let person: Person;
let people: Person[];
```

- 동일한 타입을 반복해서 정의할 경우, 기본 타입을 만든 후, 더 복잡한 타입을 정의할 때 그 타입의 별칭을 사용할 수 있다.
- 타입별칭을 사용하면 코드가 간결해지고 관리하기 수월해진다.
