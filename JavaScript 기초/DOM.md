# DOM의 개념
## DOM(Document Object Model) 이란?
> DOM은 Document Object Model의 약자로, 브라우저가 트리 구조로 만든 문서 객체 모델이다. <br>
여기서 문서 객체란, 브라우저에서 <html>, <head>, <body> 태그에 접근하거나 조작할 수 있도록 태그들을 트리 구조로 객체화 시킨 것이다.
  - DOM 객체는 트리구조로 되어 있기 때문에 JS가 쉽게 DOM 객체에 접근하거나 조작할 수 있다. 자료구조에서 트리는 저장된 데이터를 더 효과적으로 탐색하기 위해 사용된다. 때문에 DOM은 JS가 쉽게 DOM 객체에 접근&탐색하는 속도가 빠르고, 업데이트 속도도 빠르다.
- DOM은 원본 HTML 문서의 객체 기반 표현 방식이다. 단순 텍스트로 구성된 HTML 문서의 내용과 구조가 객체 모델로 변환되어 다양한 프로그램에서 사용될 수 있다. DOM의 개체 구조는 `노드 트리`로 표현된다. 

- **DOM의 조작 속도가 느려지는 이유**: <br>
DOM이 변경되고 업데이트가 되면 브라우저 렌더링 엔진 또한 변경 사항을 나타내기 위해 Reflow, Repaint가 된다.
업데이트된 요소와 그에 해당하는 자식 요소들이 DOM 트리로 재구축된 후 리렌더링 과정을 거쳐 업데이트가 되면,
브라우저는 다시 레이아웃 및 페인트에 대한 재연산을 해야되기 때문에 속도가 느려진다. <br>
즉, DOM의 렌더링은 브라우저의 구동 능력에 의존하기 때문에 DOM의 조작 속도는 느려지게 되는 것이다.
DOM을 조작하는 정도가 잦다면 성능에 영향을 미칠 수 있다.
  
## DOM의 종류
W3C DOM 표준은 세 가지 모델로 구분된다.
1. Core DOM: 모든 문서 타입을 위한 DOM 모델
2. HTML DOM: HTML 문서를 위한 DOM 모델
3. XML DOM: XML 문서를 위한 DOM 모델

HTML DOM
HTML DOM은 HTML 문서를 조작하고 접근하는 표준화된 방법을 정의한다.
모든 HTML 요소는 HTML DOM을 통해 접근할 수 있다.

XML DOM
XML DOM은 XML문서에 접근하여 그 문서를 다루는 표준화된 방법을 정의한다.
모든 XML 요소는 XML DOM을 통해 접근할 수 있다.

  
## DOM 접근 메서드
- document.getElementById("idname") : 해당 id명을 가진 요소 하나를 반환한다.
- document.querySelector("#idname") : 해당 선택자를 만족하는 요소 하나를 반환한다.
- document.getElementsByClassName("classname") : 해당 class명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환한다.
- document.getElementsByTagName("button"): 해당 태그명을 가진 요소들을 배열에 담아 인덱스에 맞는 요소를 반환한다.
- document.querySelectorAll(".classname") : 해당 선택자를 만족하는 모든 요소들을 배열에 인덱스에 맞는 요소를 반환한다.
  
## 요소 접근 속성과 document.write 메서드
- element.innerHTML : 해당 요소를 다른 HTML요소로 변경할 수 있다.
- element.style.property : 해당 요소에 적용된 css속성의 값을 나타낸다.
- element.attribute : 해당 요소의 속성을 나타낸다.
- document.write() : 인자로 전달한 내용을 DOM에 그릴 수 있다.
  
  
