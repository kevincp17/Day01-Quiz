/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money,type){
    if(type=="yen"){
        let result=money*130.12;
        return Intl.NumberFormat('ID',{style:'currency',currency:'IDR',maximumFractionDigits: 0, minimumFractionDigits: 0}).format(result)
    }
    else if(type=="usd"){
        let result=money*14382.5;
        return Intl.NumberFormat('ID',{style:'currency',currency:'IDR',maximumFractionDigits: 0, minimumFractionDigits: 0}).format(result)
    }
    else if(type=="euro"){
        let result=money*16000;
        return Intl.NumberFormat('ID',{style:'currency',currency:'IDR',maximumFractionDigits: 0, minimumFractionDigits: 0}).format(result)
    }
    else{
        return "no match type currency"
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency