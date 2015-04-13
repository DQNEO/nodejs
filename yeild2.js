#!/usr/bin/env node --harmony
// sample codes by 69log
// http://kazu69.net/blog/tec/2153
function* count() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

var c = count();
console.log(c.next()); // # 1
console.log(c.next()); // # 2
console.log(c.next()); // # 3
console.log(c.next()); // # 4
console.log(c.next()); // # 5
