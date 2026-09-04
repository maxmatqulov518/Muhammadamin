let mehmonSoni = Number(prompt("Mehmonlar soni!"))
let ovqatNarxi = Number(prompt("Ovqatlar narxi!"))
let xizmatHaqqi = Number(prompt("Xizmat haqqi!"))

if(mehmonSoni <= 0 || ovqatNarxi <= 0 || ovqatNarxi <= 0){
    alert("Jo'rajon, chota neto yozildi");
}
else{
    let umumiyNarxi = ovqatNarxi + xizmatHaqqi;
    let kishiUchunNarx = umumiyNarxi / mehmonSoni;
}

let umumiyNarxi = ovqatNarxi + xizmatHaqqi;
let kishiUchunNarx = umumiyNarxi / mehmonSoni;

let ms = document.getElementById("ms");
let on = document.getElementById("on");
let xh = document.getElementById("xh");
let un = document.getElementById("un");
let hbkun = document.getElementById("hbkun");


ms.textContent = mehmonSoni
on.textContent = ovqatNarxi
xh.textContent = xizmatHaqqi
un.textContent = umumiyNarxi
hbkun.textContent = kishiUchunNarx