let names = ["Fero", "Jožo", "Marek", "Dezider", "Ján"]

let id = document.querySelector(".list")
names.forEach((i)=>{
    let newsome = document.createElement("ul")
    newsome.innerHTML = i
    id.appendChild(newsome)
})

let title = "Added with javascript";
let text = "This block was added using JavaScript's jQuery library. How awesome!"

let additionalBlock = {
    title: title,
    text: text
}

$(function(){
$("#tit").text(title)
$("#cont").text(text)
});