const names = ["abc", "cba", "nba", "mba", NaN]
// index 索引
if (names.indexOf("cba") !== -1) {
  console.log("包含abc元素")
}

// ES7 ES2016   可以传入第2个参数,表示从第几个开始
if (names.includes("cba", 1)) {
  console.log("包含abc元素")
}

// 区别  以前indexOf不可以判断 NAN
if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN")
}

if (names.includes(NaN)) {
  console.log("包含NaN")
}
