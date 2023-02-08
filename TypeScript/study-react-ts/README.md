# study-react-ts 정리

## Create React App 설치

[Getting Started | Create React App](https://create-react-app.dev/docs/getting-started)

```tsx
npx create-react-app study-react-ts--template typescript
```

### 🧐 React+바닐라 자바스크립트가 아닌 Creat React App 사용하면?

- jsx문법을 사용하기 때문에 확장자를 `.tsx`를 사용해야 한다. 개발 툴에 불필요한 경고창이 뜨지 않는다.
- `npm start`시 타입스크립트 코드를 자바스크립트로 **컴파일**하여 최적화를 한다. 직접 타입스크립트를 직접 컴파일하거나 컴파일러를 호출할 필요가 없다.
  - 일반적인 자바스크립트에서는 `npm start`시 단순히 js 코드를 받아 파일들을 하나로 묶고 최적화를 하였다.
- `package.json`에서 `@types`패키지들이 추가된다. 자바스크립트 라이브러리와 타입스크립트 사이에서 **번역기**와 같은 역할을 한다. 자바스크립트가 타입스크립트를 이해할 수 있도록 변환해주는 것.

### 🧐 Todo 컴포넌트 작업하기

- CRA를 통해 자동으로 생성된 코드 중 불필요한 파일은 정리하고 시작한다 (`App.test.tsx`, `logo.svg`등)
- `Component` 폴더 생성 → 폴더 안에 `Todo.tsx` 파일 생성
  ```tsx
  //Todo.tsx
  function Todo() {
    return <div></div>;
  }
  export default Todo;
  ```
- App.tsx에서 Todo 컴포넌트 가져오기.
  ```tsx
  //App.tsx
  function App() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
  ```
- Todo 컴포넌트에 `props` 매개변수 추가.
  ```tsx
  //Todo.tsx
  function Todo(props) {
    return <ul></ul>;
  }
  export default Todo;
  ```
  - 이때 발생하는 오류
    - 'props' is declared but its value is never read: props를 사용하고 있지 않다.
    - Parameter 'props' implicitly has an 'any' type: props가 any 타입이다.
  - 타입을 지정해주면 되지만, props를 사용하는 컴포넌트에 props를 매번 정의해주기 번거로우므로 제네릭 함수로 변환하여 간단하게 사용.
- 함수형 컴포넌트를 제네릭 함수로 변환해 사용.

  - 화살표 함수 사용. function 키워드 대신 화살표 사용.
  - `FC` 타입 추가.

    ```tsx
    //Todo.tsx
    import React from "react";

    const Todo: React.FC = (props) => {
      return <div></div>;
    };

    export default Todo;
    ```

    - FC 타입은 `@Types/react` 패키지에 정의되어 있는 타입이다.
    - FC 타입은 **FunctionComponent 타입**의 줄임말이다.
    - React.FC는 제네릭 타입이다.

  - React.FC에 의해 정의된 타입에 추가할 구체적인 값(props 객체) 지정.

    ```tsx
    //Todo.tsx
    import React from "react";

    const Todo: React.FC<{ items: string[] }> = (props) => {
      return (
        <ul>
          {props.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    };
    export default Todo;
    ```

  - App.tsx에서 Todo 컴포넌트에서 내려줄 props 추가

    ```tsx
    //App.tsx
    import Todo from "./component/Todo";

    function App() {
      return (
        <div>
          <Todo items={["learn react", "learn ts"]} />
        </div>
      );
    }

    export default App;
    ```

### 🧐데이터 모델 추가

- model 폴더 생성 → todo.ts 파일 생성
  - 컴포넌트를 생성하는 것이 아니므로 tsx가 아닌 ts로 작성
  - tsx에서는 JSX 문법을 사용할 수 있고 ts에선 사용 불가
- todo.ts에서 class로 타입을 정의한다.(생성할 땐 type 키워드, interface 키워드를 사용해도 됨)
  ```tsx
  //todo.ts
  class Todo {
    id: string;
    text: string;
    constructor(todoText: string) {
      this.id = new Date().toISOString();
      this.text = todoText;
    }
  }
  export default Todo;
  ```
- Todo.tsx에서 정의된 class를 불러온 후 그에 맞춰 Todo.tsx와 App.tsx를 수정한다.

  - 정의된 class 이름은 타입으로 사용될 수 있다.
  - item 배열의 객체는 타입이 문자열인 id 프로퍼티를 가진다.

  ```tsx
  //Todo.tsx
  import React from "react";
  import TodoType from "../model/todo";

  const Todo: React.FC<{ items: TodoType[] }> = (props) => {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  };
  export default Todo;
  ```

  ```tsx
  //App.tsx
  import Todo from "./component/Todo";
  import TodoType from "./model/todo";

  function App() {
    const todos = [
      new TodoType("Learn React"),
      new TodoType("Learn TypeScript"),
    ];
    return (
      <div>
        <Todo items={todos} />
      </div>
    );
  }

  export default App;
  ```

### 🧐간단한 연습

- 아래 코드에서 map으로 출력하고 있는 <li>를 분리해 별도의 컴포넌트로 만들기
- JSX 코드를 유지한 상태에서 (나의 경우)TodoType 배열로 작업 진행

```tsx
//Todo.tsx
import React from "react";
import TodoType from "../model/todo";

const Todo: React.FC<{ items: TodoType[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
export default Todo;
```

- 컴포넌트 분리 후 코드:

```tsx
//Todo.tsx
import React from "react";
import TodoType from "../model/todo";
import TodoItem from "./TodoItem";

const Todo: React.FC<{ items: TodoType[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todo;
```

```tsx
//TodoItem.tsx
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};
export default TodoItem;
```

### **🧐Todo 작성 폼 만들기**

- submitHandler 함수 작성.
  - 타입스크립트에서 이벤트를 처리하려면 이벤트 타입을 지정해야 한다.
  - 리액트 패키지에서 제공하는 **React.FormEvent** 이벤트 관련 타입을 사용한다.
    - **React.ChangeEvent**는 **onChange** 이벤트 등에 사용
    - **React.MouseEvent**는 **onClick** 이벤트 등에 사용
    - **React.KeyboardEvent**는 **onKeydown, onKeyup** 이벤트 등에 사용
    - **React.FormEvent**는 **<form> 태그의 onSubmit** 등에 사용
  - submit 태그에는 버튼을 눌렀을 때 발생하는 고유의 동작이 있다. 페이지 이동, form 내부에 input을 전송하는 등의 동작들을 **event.preventDefault()** 메서드로 중단시킨다.

```tsx
const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
```

- useRef를 사용하여 input 요소와 연결하기

  - useRef란?
    > useRef는 저장공간, dom 요소 접근 위해 사용한다. ref 안에 값을 저장하면 컴포넌트가 렌더링될 때 값이 변화되지 않고 유지되고, 상태가 바뀌어도 ref 안에 값을 변경해도 컴포넌트가 다시 렌더링되지 않는다.
  - `todoTextInputRef`라는 변수에 useRef 호출하고 input 태그의 ref 속성에 `todoTextInputRef`래퍼런스를 지정한다
    - 래퍼런스가 명확하지 않기 때문에 오류 발생 → 레퍼런스에 저장될 데이터의 타입을 지정해주어야 한다
  - useRef는 제네릭 타입으로 정의되어 있고 그에 맞춰 제네릭 타입으로 타입을 지정해준다.
    - input 요소에 데이터를 저장하므로 **HTMLInputElement로 타입을 지정**. \*\*\*\*
    - **useRef의 초기값은 null로 지정.** 다른 값이 할당되어 있을 수도 있기 때문에 초기값을 지정해주지 않으면 오류가 발생한다.
  - `enteredText` 변수를 만들어 `todoTextInputRef`와 연결해준다.

    - **useRef()는 current 속성을 가지고 있는 객체를 반환**한다. 인자로 넘어온 초기값을 current 속성에 할당한다(여기서 초기값은 null). 이때 `.`을 찍으면 타입을 명확하게 지정해주었기 때문에 자동완성을 사용할 수 있다.
      ![230208스샷1](https://user-images.githubusercontent.com/50124980/217566161-5636b6d3-9709-430b-a084-c41cf6f9e37e.png)

  - `todoTextInputRef.current?.value`, `todoTextInputRef.current!.value`
    - 객체 프로퍼티에 타입을 정의했으나 값을 할당하지 않는 경우 오류가 발생한다. 이러한 경우 선택적 프로퍼티(Optional Properties) 문법을 사용하여 해결할 수 있다.
    - 타입스크립트에서 `!` **느낌표**는null이나 undefined가 아님을 단언한다.
    - 타입스크립트에서 `?` **물음표**는 optional. 필수값이 아닌 옵셔널한 값이라는 의미이다.
    - 아래 코드에서는 래퍼런스와 요소가 연결되어 있고 null이나 undefined가 아니라는 것을 알기 때문에 ! 를 사용할 수 있다. 단, 확신할 때 사용해야 함(?)

```tsx
import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
```
