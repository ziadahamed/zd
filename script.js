var popupover = document.querySelector(".popup-over");
var popup =document.querySelector(".popup");
var but = document.getElementById("btn");


but.addEventListener("click",function(){

    popupover.style.display = "block";
    popup.style.display ="block";

})


var cancel = document.getElementById("cancel");

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupover.style.display = "none";
    popup.style.display ="none";



})

var container = document.querySelector(".con");
var addbook = document.getElementById("add")
var booktitle = document.getElementById("booktitle");
var bookauthor = document.getElementById("bookauthor");

var bookdescription = document.getElementById("bookdescription");

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div");
    div.setAttribute("class","bg");
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button class="but" onclick="deletebook(event)">delete</button>`
    container.append(div)
})


function deletebook(event){
    event.target.parentElement.remove();
}
