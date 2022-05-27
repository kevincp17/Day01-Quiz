/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if(isNaN(seconds)){
        return seconds+" is not number"
    }
    else{
        const secondsInAMinute = 60;
        const secondsInAnHour  = 60 * secondsInAMinute;
        const secondsInADay    = 24 * secondsInAnHour;
        
        const days = Math.floor(seconds / secondsInADay);

        const hourSeconds = seconds % secondsInADay;
        const hours = Math.floor(hourSeconds / secondsInAnHour);

        const minuteSeconds = hourSeconds % secondsInAnHour;
        const minutes = Math.floor(minuteSeconds / secondsInAMinute);

        const remainingSeconds = minuteSeconds % secondsInAMinute;
        const second = Math.ceil(remainingSeconds);

        return days+" hari "+hours+" jam "+minutes+" menit "+second+" detik";
    }    
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik