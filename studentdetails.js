// getting input id's
var nameinput=document.getElementById("nameinput")
var ageinput=document.getElementById("ageinput")

var courseinput=document.getElementById("courseinput")
var mailinput=document.getElementById("mailinput")

var btn=document.querySelector(".btn")

// getting id to store



btn.addEventListener("click",function(e){

    e.preventDefault();
    
        var container=document.getElementById("container")
        
        var tr=document.createElement("tr")
        tr.classList.add("tablerow")
        
        var name=document.createElement("td")
        name.textContent=nameinput.value
        
        
        var age=document.createElement("td")
        age.textContent=ageinput.value
        
        var gender=document.querySelector('input[name="gender"]:checked')
        var sex=document.createElement("td")
        sex.textContent=gender?gender.value:"-"
        
        
        
        var course=document.createElement("td")
        course.textContent=courseinput.value
        
        
        var mail=document.createElement("td")
        mail.textContent=mailinput.value,Number
        
        
        var btn=document.createElement("button")
        btn.classList.add("delbtn")
        btn.textContent='Delete'
        
        btn.onclick=function(){
            btn.closest(".tablerow").remove()
        }
        
        tr.append(name,age,sex,course,mail,btn)
        
        container.append(tr)
        
        console.log(container)



})    






