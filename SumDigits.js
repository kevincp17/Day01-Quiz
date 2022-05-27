/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n){
   if(n>=10000){
        return n+" harus lebih kecil dari 10000"
   }
   else if(isNaN(n)){
       return n+" is not number, try again..."
   }
   else{
       return parseInt(n.toString().charAt(0))+parseInt(n.toString().charAt(1))+parseInt(n.toString().charAt(2))+parseInt(n.toString().charAt(3))
   }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...