
var btn=document.getElementById("btn")
var container=document.querySelector(".container")


btn.addEventListener("click",function(){
    
    var inputbox=document.getElementById("inputbox")
    
    var tr=document.createElement("tr")
    tr.classList.add("tablerow")

    var text=document.createElement("td")
    text.classList.add("textfont")
    text.textContent=inputbox.value
    

    var del=document.createElement("button")
    del.textContent="delete"
    del.classList.add("delete")
    del.onclick=function(){
        del.closest(".tablerow").remove()
    }

    tr.appendChild(text)
    tr.appendChild(del)

    container.appendChild(tr)
    console.log(container)
})
