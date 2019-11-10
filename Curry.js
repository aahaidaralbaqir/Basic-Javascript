/**
 * Currying  adalah metode populer di kalangan javascript developer
 * untuk membuat function dimana argument function tersebut
 * di translate menjadi stand alone function
 * example :
 * function(a,b) ----> function(a)(b)
 */

// di javascrip tkti sah-sah saja membuat fungsi begini
function add() {
    return function(a) {
        return function(b){
            return a + b
        }
    }
}

console.log(add()(2)(3))

/**
 * currying bisa berjalan karena javascript support closure ,
 * tapi sabar dulu nih heheh,currying bisa jadi kurang flexible  karena  terlalu banyak nested di dalam function
 */

//  function makeCurry(uncurried) {
//      let params = Array.prototype.slice.call(arguments,1)
//      return function () {
//          return uncurried.apply(this,params.concat(
//              Array.prototype.slice.call(arguments,0)
//          ))
//      }
//  }

//  let greeting = function(greet, title, education, name) {
//     return greet + title + education + name;
//   };
//  let greetHello2 = makeCurry(greeting, "Hello", "Mr.");
//  console.log(greetHello2('S.kom', 'Budi')); // Hello Mr.Budi S.kom


 function curry(fn){
     return function curried(...args) {//pakai spread operator
        if(args.length >= fn.length) return fn.apply(this,args) 
         return function(...args2) {
             return curried.apply(this,args.concat(args2))
         } 
     }  
 }