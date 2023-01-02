# Set과 Map
## Set이란?
>
- Set 객체는 배열과 유사하지만 `중복되지 않는 유일한 값들의 집합`이다.
- Set은 `수학적 집합을 구현하기 위한 자료구조`로 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.
- Set 객체는 동일한 값을 중복하여 포함할 수 없고, 요소 순서에 의미가 없으며 인덱스로 요소에 접근할 수 없다.
- Set 객체는 이터러블이다.

### Set 객체 생성
- Set 객체는 Set 생성자 함수로 생성한다.
Set 생성자 함수에 인수를 전달하지 않으면 위처럼 빈 Set 객체가 생성된다.
```js
const set = new Set();
console.log(set); //Set(0) {}
```
- 이터러블의 중복된 값은 Set 객체에 요소로 저장되지 않는다.
```js
const set1 = new Set([1,2,3,3,3])
console.log(set1); //Set(3) {1,2,3}
```

- 중복을 허용하지 않는 Set의 특성을 활용하여 배열에서 중복된 요소를 제거할 수 있다.
```js
const uniq = array => [...new Set(array)];
console.log(uniq([1,2,3,4,3,4])); // [1,2,3,4]
```
### Set 객체의 요소 개수 확인
- `Set.prototype.size` 프로퍼티를 사용하여 Set 객체의 요소 개수를 확인할 수 있다.
```js
const {size} = new Set([1,2,3,4,4]);
console.log(size) // 4
```

### 요소 추가
- Set 객체에 요소를 추가할 때는 Set.prototype.add 메서드를 사용한다.
- 중복된 요소는 허용되지 않으며 에러가 발생하지 않고 무시된다.
```js
const set = new Set();
set.add(1); // Set(1) {1}
set.add(1); // Set(1) {1}
set.add(2); // Set(2) {1,2}
```

### 요소 삭제
- Set 객체에 요소를 삭제할 때는 Set.prototype.delete 메서드를 사용한다.
- 삭제 성공 여부는 불리언 값으로 반환한다.
- 삭제하고자하는 요소값을 인수로 전달한다.
```js
const set = new Set([1,2,3]);
set.delete(0); // false 존재하지 않는 요소이므로 에러 없이 무시
set.delete(1); // true
set.delete(4); // false
console.log(set); // Set(2) {2,3}
```

- 일괄 삭제하려면 Set.prototype.clear 메서드를 사용한다.
- clear 메서드는 언제나 undefined로 반환한다.
```js
const set = new Set([1,2,3]);
set.clear();
console.log(set); // Set(0) {}
```


### 요소 포함 여부
- Set 객체에 특정 요소가 존재하는지 확인할 땐 Set.prototype.has 메서드를 사용한다.
- 불리언 값dmfh 반환한다.
```js
const set = new Set([1,2,3]);
set.has(2); // true
set.has(4); // false
```

### 요소 순회
- Set 객체의 요소를 순회할 땐 Set.prototype.forEach 메서드를 사용한다.
- 이때 콜백함수는 3개의 인수를 전달받는다. 첫 번째 인수와 두 번째 인수는 같은 값으로 현재 순회 중인 요소값을 전달한다. 세 번째 인수에는 현재 순회 중인 Set 객체 자체를 전달한다.
- array.prototype.forEach 메서드와 유사하지만 순서에 의미가 없어 배열과 같이 인덱스를 갖지 않는다.
```js
const set = new Set([1,2,3]);
set.forEach((value1 ,value2, set) => console.log(value1, value2, set));
// 1 Set(3) {1,2,3}
// 2 Set(3) {1,2,3}
// 3 Set(3) {1,2,3}
}
```



## Map 이란?
>
Map 객체는 객체와 유사하며 `키와 값의 쌍으로 이루어진 컬렉션`이다.

### Map 생성
- Map 객체는 Map 생성자 함수로 생성한다.
```js
const map = new Map();
console.log(map); // Map(0)
```

- Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다.
- 인수는 이터러블을 키와 값의 쌍으로 이루어진 요소여야 한다.
```js
const map = new Map([['k1', 'v1'],['k2', 'v2']]);
console.log(map); // Map(2) {"k1" => "v1", "k2" => "v2"}
```

### Map 객체의 요소 개수 확인
- `Map.prototype.size` 프로퍼티를 사용하여 Map 객체의 요소 개수를 확인할 수 있다.
```js
const map = new Map(['k1', 'v1'],['k2', 'v2']);
console.log(map.size) // 2
```

### 요소 추가
- Map 객체에 요소를 추가할 때는 Map.prototype.set 메서드를 사용한다.
```js
const map = new Map();
map.set('key1', 'value1');
console.log(map); // Map(1) {"key1" => "value1"}
```

### 요소 삭제
- Map 객체에 요소를 삭제할 때는 Map.prototype.delete 메서드를 사용한다.
- 불리언 값을 반환한다.

```js
const lee = {name: 'Lee'};
const kim = {name: 'Kim'};
const map = new Map([lee, 'developer'],[kim, 'designer']);
map.delete(kim);
console.log(map); //Map(1) {{name: "Lee"} => "developer"}
```

- 요소를 일괄 삭제하려면 Map.prototype.clear 메서드를 사용한다.
- clear 메서드는 언제나 undefined를 반환한다.
