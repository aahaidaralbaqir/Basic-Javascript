// loop vs recursive

// let total  = 0
// for(let i = 1; i <= 3; i++) {
//   total += i
// }
// console.log(total)


let add = function(n) {
  if(n<=0) return 0
  return n + add(n-1)
}


// 0 + 1
//     1 + 2 = 3
//             3 + 3 = 6
// p(1) + 2 = p(2)
// p(n-1) + n = p(n)
// add(3) => 3 + add(2)
