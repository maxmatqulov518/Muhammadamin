// let kasb = prompt("Kasbingizni kiriting: ");


// console.log("Kasb".trim().length);
// console.log(kasb.length);
// console.log(kasb.toUpperCase());
// console.log(kasb.toLowerCase());

// let baho = prompt("Qo'yilgan baho: ")
// baho= Number(baho)
// console.log("Sizning bahoyingiz: " + baho.toFixed(1))

// let son = 100.975;
// console.log(Math.round(son))

// let sontasodifiy = Math.random() * 100
// console.log(Math.round(sontasodifiy))


// ============================================================================================
//                          Shartli operatorlar ---> (⊙_(⊙_⊙)_⊙)
// ============================================================================================


let yosh = Number(prompt("Yoshingizni Kiriting: "));
let natija = document.getElementById("natija");

if(yosh >=40){
    console.log("Vaay, bratan, uylanib bo'lgansan-ku! Endi bolalaringni o'ylab yashash vaqti keldi. ")
}
else if(yosh >=30){
    console.log("Vaay, uje endi kech bo'ldi. Uylanish vaqti keldi. ")
}
else if(yosh >= 18){
    console.log("Jo'ra, endi uylanish vaqti keldi. uylan tez-tez.")
}else{
    console.log("Avval, katta bo'l, keyin uylan. Hozircha o'zingni rivojlantirishga e'tibor ber. Jiyan")
    natija.innerText = "Avval, katta bo'l, keyin uylan. Hozircha o'zingni rivojlantirishga e'tibor ber. Jiyan"
}