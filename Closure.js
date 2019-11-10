/**
 * Closure adalah mekanisme di javasript dimana function bisa mengakses/mengingat variable di lexical scope
 * pada parent setelah parent function di definisi dan di destroy dari memori 
*/

function perkalian(a) {
    return function(b) { 
        return a * b
    }
}

let kaliLima = perkalian(5)(10)
console.dir(kaliLima)
/**
 * lihat bahwa seharusnya variable a pada statemen return a * b it undefined, karena a adalah argumen dan fungsi perkalian(a) 
 * dan keduanya di destroy dari callstack memory pada saat kode tersebut di eksekusi jadi variable a tidak
 * ada referensinya lagi. 
 * Ini semua terjadi karena javascript sudah memindahkan lokasinya ke scope closure
 */

