/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start,end){
    if(isNaN(start) || isNaN(end)){
        return start+" or "+end+" harus dalam angka"
    }
    else{
        let increase=((end-start)/start)*100;
        if(increase<0){
            return "Total penurunan income "+Math.floor(increase)+"%";
        }
        else{
            return "Total kenaikan income "+Math.ceil(increase)+"%";
        }
        
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%

