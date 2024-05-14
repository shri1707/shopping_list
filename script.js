const list = document.querySelector("ul")
const input = document.querySelector("#item")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    const myItem= input.value
    input.value = ""

    const listele = document.createElement("li")
    const licont = document.createElement("span")
    const btn2= document.createElement("button")
    listele.appendChild(licont)
    licont.textContent= myItem
    listele.appendChild(btn2)
    btn2.textContent= "delete"
    
    list.appendChild(listele)

    btn2.onclick= () => list.removeChild(listele)
    input.focus()


})