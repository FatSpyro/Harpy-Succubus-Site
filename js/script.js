console.log('I am connected'); 
var imgBox = document.getElementById("imgBox"); 
var fullImg = document.getElementById("imgDescriptionBox"); 

function openFullImg(pic){
    fullImg.style.display = "inline"; 
    imgBox.src = pic; 
}

function closeFullImg(){
    fullImg.style.display = "none"; 
}