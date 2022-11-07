// Data pravda nepravda zapnute či vypnute
let prepisovani = false
let bezmezer = false
let odradkovani = false
let zapnout = false
let a1 = "Přepisování: Vypnuto"
let a2 = "Mezery: Vypnuto"
let a3 = "Řádkování: Vypnuto"
// Data aby fungoval přepis
var rr = 0
let x = document.querySelector(".ql-editor").textContent
let size = x.length
var p = 0
let m = x.slice(0,p)
// Aby šlo další odřádkování
let newline = true
// Oběví se menu
function menu(){
    if(zapnout === false){
    this.x = document.createElement("div")
    this.x.className = "menu-de-la-plus"
    document.querySelector(".dropdown-menu-left").appendChild(this.x)
    this.x.innerHTML = `<p class="a1">`+a1+`</p><p class="a2">`+a2+`</p><p class="a3">`+a3+`</p>`
    }
}
// Zmizí menu
function menudel(){
    if(zapnout === true){
        this.x = document.querySelector(".menu-de-la-plus")
        this.x.innerHTML = ""
        this.x.remove() 
    }
}
// Tady se dává pravda či nepravda
document.body.addEventListener("keydown",function(e){
// Zde se nastavuje přepisování jestli je zapnuty či vypnutý
if(e.key === "ArrowLeft" && prepisovani === false){
menu()
prepisovani = true
zapnout = true
a1 = "Přepisování: Zapnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a1").innerHTML = a1
} else if(e.key === "ArrowLeft" && prepisovani === true){
menu()
prepisovani = false
zapnout = true
a1 = "Přepisování: Vypnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a1").innerHTML = a1
}
// Zde se nastavujou mezery jestli jsou zapnuty či vypnutý
if(e.key === "ArrowDown" && bezmezer === false){
menu()
bezmezer = true
zapnout = true
a2 = "Mezery: Zapnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a2").innerHTML = a2
} else if(e.key === "ArrowDown" && bezmezer === true){
menu()
bezmezer = false
zapnout = true
a2 = "Mezery: Vypnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a2").innerHTML = a2
}
// Zde se nastavuje řádkování jestli je zapnuty či vypnutý
if(e.key === "ArrowRight" && odradkovani === false){
menu()
odradkovani = true
zapnout = true
a3 = "Řádkování: Zapnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a3").innerHTML = a3
} else if(e.key === "ArrowRight" && odradkovani === true){
menu()
odradkovani = false
zapnout = true
a3 = "Řádkování: Vypnuto"
document.querySelector(".menu-de-la-plus").querySelector(".a3").innerHTML = a3
}
// Zde se nastavuje menu jestli jde vidět nebo ne
if(e.key === "ArrowUp" && zapnout === true){
menudel()
zapnout = false
}else if(e.key === "ArrowUp" && zapnout === false){
menu()
zapnout = true
}


// Tadik funguje celý script
if(prepisovani === true && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !=="Backspace"){
if(e.key === "Enter"){
newline = false
}
if(bezmezer === true){
x = document.querySelector(".ql-editor").textContent
x = x.replaceAll(" ","")
x = x.replaceAll(" ","")
} else if(bezmezer === false){
x = document.querySelector(".ql-editor").textContent
}
if(newline === true){
size = x.length
let wwa = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].textContent
p = wwa.length
p++
m = x.slice(0,p)
document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].innerHTML = m
} else {
let wwa = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].textContent
document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p")[rr].innerHTML = wwa+"¶"
let zas = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").innerHTML
p = 0
m = x.slice(0,p)
document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").innerHTML = zas+"<p>"+m+"</p>"
rr = document.querySelector(".zav-dynamic-height").querySelector(".ql-editor").querySelectorAll("p").length
rr = rr - 1
newline = true

}
}
})
