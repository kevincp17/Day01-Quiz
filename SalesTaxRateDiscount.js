 /**
  * hitung sales discount plus tax rate
  * function getSalesDiscount
  */

function getSalesDiscount(price,tax,discount){
    if(isNaN(price) && !isNaN(tax) && !isNaN(discount)){
        return "Price harus dalam angka"
    }
    else if(!isNaN(price) && isNaN(tax) && !isNaN(discount)){
        return "Pajak harus dalam angka"
    }
    else if(isNaN(price) && isNaN(tax) && isNaN(discount)){
        return "Price,Pajak & Discount harus dalam angka"
    }
    else{
        let dis=price-(discount/100)*price;
        let afterTax=dis/10;
        let total=dis+afterTax;
        return "Total Sales : Rp."+price+"\nDiscount ("+discount+"%) : Rp."+(discount/100)*price+"\nPriceAfterDiscount : Rp."+dis+"\nPajak ("+tax+"%) : Rp."+afterTax+"\n----------------------------------\nTotalPayment : Rp."+total;
    }
}

console.log(getSalesDiscount("a", 1,5));//Price harus dalam angka
console.log(getSalesDiscount(500, "pajak",5));//Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak","discount"));//Price, Tax & Discount harus dalam angka
console.log(getSalesDiscount(4500, 10,5));
/**
   Total Sales 	: Rp.4500 
   Discount (5%) 	: Rp.225
   PriceAfterDiscount 	: Rp.4275
   Pajak (10%) 	: Rp.427.5
   ----------------------------------
   TotalPayment 	: Rp.4702.5
*/