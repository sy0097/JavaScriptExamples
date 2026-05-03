
let a=require("os")
a.version()
console.log(a.version())
console.log(a.platform())
console.log(a.arch())
console.log(a.cpus())
console.log(a.hostname())

let b=require("assert")
b(10<20)

b(50>60, "Values mistmatch")
