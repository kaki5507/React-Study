// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// use strict하면 조금 더 상식적인 범위에서 이용할 수 있고, 엔진이 효율적으로 빠르게 분석 + 조금 더 나은 성능
'use strict'; // 선언하면 a 가 선언되지 않았을떄 에러문구로 알려준다

console.log('hello world');

let a;
a = 6;

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
let name = 'elie';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);
console.log(globalName);

// var 쓰지마! ( dont' ever use this! )
// var hoisting 호이스팅 ? 어디에 선언했냐에 상관없이 맨위로 끌어준다 (move declaration from bottom to top)
// has no block scope 블럭 상관없이 안에 있어도 쓸 수 있음 이러면 안되는데
// 렛은 알려주는데 var는 선언을 나중에 해도 가능함;
console.log(age);
age = 4;
console.log(age);
var age;
{
    age2 = 4;
    var age2;
}
console.log(age2)

// 3. Constant 값을 할당하면 (ready only)
// favor immutable date type always for a few reasons:
// - security 보안상
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // 1왼쪽에 있는 ` ' < 이거아님
console.log(`value: ${size}, type: ${typeof size}`);

/* number - special numeric values: infinity, -infinity, Nan */
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 최근에 bigInt값이 추가되어서 n을 마지막에 추가시키면 type이 bigInt로 나옴
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type:${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals  뺵틱을 이용하면 번거롭게 안해도 된다.
console.log(`value: ${helloBob}, type:${typeof helloBob}`);
console.log('value: '+helloBob+' type'+ typeof helloBob); // 원래는 이런식으로 다 +

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type:${typeof nothing}`);

// undefined
let x; // = undefined
console.log(`value:${x},type:${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id'); // 고유한 식별자를 만들어 줄 때 사용
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol1 만 적으면 에러가 나서 항상 
// .description 을 이용해서 string으로 변환해서 출력해야함.

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h 0번 부터니깐
console.log(`value:${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type:${typeof text}`); 
text = '7'+5;
console.log(`value:${text}, type:${typeof text}`); 
text = '8' / '2'; // 숫자랑 숫자랑 나누기한다고? 하면 number로 바꿔줌
console.log(`value:${text}, type:${typeof text}`); 
console.log(text.charAt(0)); // 타입을 숫자로 위에서 바꿧으니깐 이렇게 String인줄알고 부르면 에러남

// object, real-life object, data structure
const ellie = {name:'sh', age:25};
ellie.age = 21;