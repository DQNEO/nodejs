#!/usr/bin/env node --harmony

// sample codes by nitoyon
// http://tech.nitoyon.com/ja/blog/2013/06/27/node-yield/
function* N() {
  console.log("aaa");
  yield 1;
  console.log("bbb");
  yield 2;
  console.log("ccc");
  return 3;
}

var g = N();
console.log(g);

console.log(g.next());
console.log(g.next());
console.log(g.next());

console.log(g.next());
console.log(g.next());
