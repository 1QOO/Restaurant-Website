class Component{
    constructor(tagName, attribute, content, parent){
        this.tagName = tagName;
        this.attribute = attribute;
        this.child = content;
        this.parent = parent;
        
        alert(this);
    }
}

document.addEventListener("DOMContentLoaded", ()=>{

let timeOut;

createMenu("Nasi Goreng", "assets/img/curry_1.jpeg", dummyText);
createMenu("Mi Goreng", "assets/img/curry_1jpeg", dummyText);

document.getElementsByClassName("info")[0].addEventListener("mouseenter", ()=>{
   timeOut = setTimeout(()=>{document.getElementsByClassName("info-content")[0].hidden = false;}, 500);
});
document.getElementsByClassName("info")[0].addEventListener("mouseleave", ()=>{
   clearTimeout(timeOut);
   timeOut = setTimeout(()=>{document.getElementsByClassName("info-content")[0].hidden = true},250);
});

//THIS CODE BELOW IS FOR CANVAS

var c = document.getElementsByClassName("rating")[0];
var ctx = c.getContext("2d");
ctx.fillStyle = "yellow";
ctx.fillRect(0, 0, c.width, c.height);

});