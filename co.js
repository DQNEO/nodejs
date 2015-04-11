#!/usr/bin/env node --harmony
// http://tech.nitoyon.com/ja/blog/2013/06/27/node-yield/

var co = require('co');
var fs = require('fs');

var dir = '/var/log/';

// なんか動かないぞ...

console.log("co start");
co(function *() {
  var files = yield co.wrap(fs.readdir)(dir);
  var data = yield co.wrap(fs.readFile)(dir + files[0], 'utf-8');
  console.log(data);
});
console.log("co end");

/*
*/

// カレント ディレクトリーのファイル一覧を取得する
fs.readdir(dir, function(err, files) {
  // 先頭のファイルの中身を読み取る
  console.dir(dir + files[0]);
  fs.readFile(dir + files[0], 'utf-8', function(err, data) {
    // 読み取った結果を出力する
    console.log(data);
  });
});
