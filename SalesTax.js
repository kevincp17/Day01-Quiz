/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

 function getSalesTax(price, tax) {
    if(isNaN(price) && !isNaN(tax)){
        return "Price harus dalam angka"
    }
    else if(!isNaN(price) && isNaN(tax)){
        return "Pajak harus dalam angka"
    }
    else if(isNaN(price) && isNaN(tax)){
        return "Price & Pajak harus dalam angka"
    }
    else{
        let sum=price+tax;
        return "Total Sales : Rp."+price+"\nPajak : "+tax+"\nTotalHarga+Pajak : Rp."+sum;
    }
}

console.log(getSalesTax("a", 1));//Price harus dalam angka
console.log(getSalesTax(500, "pajak"));//Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak"));//Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/