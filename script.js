function NewElement(name, attr=null, content=false){
    let openTag = null;
    let closeTag = `</${name}>`;
    
    if (attr) openTag = `<${name} ${attr}>`;
    else openTag = `<${name}>`;
    
    if(content) return `${openTag}${content}${closeTag}`;
    else return `${openTag}${closeTag}`
}

function createMenu(dishName, imageURL, dishDesc){
    let target = document.getElementsByTagName("main")[0];
    
    target.innerHTML += 
    NewElement("div", "class=\"menu\"",
        NewElement("img", `src="${imageURL}" alt="dish"`, false)+
        NewElement("div", "class=\"menu-content\"",
            NewElement("h1", null, "Menu")+
            NewElement("p", null, "Menu Description")
        )+
        NewElement("div", "class=\"menu-button\"",
            NewElement("span", null, "Info!")+
            NewElement("span", null, "Rating")+
            NewElement("button", null, "Add")
        )
    );
}



document.addEventListener("DOMContentLoaded", ()=>{

createMenu("Nasi Goreng", "assets/img/curry_1.jpeg", "Indonesian Fried Rice");

});