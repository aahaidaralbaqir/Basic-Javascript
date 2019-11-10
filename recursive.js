// recursive adalah sesuatu procedure/function
// yang memanggil dirinya sendiri


// implementasi ulang fungsi-fungsi dasar seperti, length,map,filter dan dreducer di dalam fungsi javascript

// 1.length
const length  = ([head,...tail]) => {
  if(head == undefined) return 0
  return 1 + length(tail)
}


/*
* statement
* const [head,...tail] = [1,2,3]
* akan menghasilkan head = 1 dan tail = 2,3
* sementara const [head,...tail] = [1] menghasilkan head = 1 dan tail = []
*/
// console.log(length([1,2,3]))


// 2.map
const map = fn => ([head,...tail]) => {
  if(head === undefined) return []
  return [fn(head),...map(fn)(tail)]
}
// console.log( map(x => x + 1)([2, 4, 6]) )

/*
*Apply value yang sedang di evaluasi ke dalam fungsi fn untu
*di transformasikan nilainya a.k.a fn(head),lalu moveon ke element
*setelahnya a.k.a ...map(fn)(tail)
*
*/

// 3.filter
const filter = fn => ([head,...tail]) => {
  if(head === undefined) return []
  if(!fn(head)) return [...filter(fn)(tail)]
  return [head,...filter(fn)(tail)]
}

/*
* Esensi dari filter adalah untuk menyeleksi value mana yang memenuhi syarat
* dan kondisi yang di tetapkan pada function fn.if(!fn(head)) alias
* jika value yang sedang di evaluasi tidak memenuhi kondisi yang di tetapkan
* maka skip value tersebut dan move on ke element setelahnya a.k.a
* return [...filter(fn)(tail)] . jika ternyata memenuhi kondisinya maka seertakan value tersebut lalu move on
* ke element setelahnya a.k.a return [head,...filter(fn)(tail)]
*/

// console.log( filter(x => x > 2)([1, 2, 3, 4, 5]) )


const reduce = (fn,init) => ([head,...tail]) => {
  if (head === undefined) return init
  return reduce(fn,fn(head,init)) (tail)
}

const reduceFn = (x, acc) => `${acc}!${x}`
const initial = 0
console.log( reduce(reduceFn, initial)([1, 2, 3, 4, 5]) )
