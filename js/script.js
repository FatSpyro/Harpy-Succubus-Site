

/* VERSION 1 GALLERY

console.log('I am connected'); 
var imgBox = document.getElementById("imgBox"); 
var fullImg = document.getElementById("imgDescriptionBox");
var imgTitle = document.getElementById("Title"); 
var imgDesc = document.getElementById("Description"); 
var imgData = document.querySelectorAll(".imgData"); 

function openFullImg(pic){
    fullImg.style.display = "inline"; 
    imgBox.src = pic; 
 
   imgData.forEach( e => {
    var description = e.getAttribute("data-desc"); 
    imgDesc.innerHTML = description; 
    
    var title = e.getAttribute("data-title"); 
    imgTitle.innerHTML = title; 
    console.log(title); 

   }) 

}

function closeFullImg(){
    fullImg.style.display = "none"; 
}

*/