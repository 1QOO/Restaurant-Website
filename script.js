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
        NewElement("img", `src="assets/img/img_default.jpeg" alt="dish"`, false)+
        NewElement("div", "class=\"menu-content\"",
            NewElement("h1", null, dishName)+
            NewElement("p", null, dishDesc)
        )+
        NewElement("div", "class=\"menu-button\"",
            NewElement("span", null, "Info!")+
            NewElement("span", null, "Rating")+
            NewElement("button", null, "Add")
        )
    );
}

let dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "+
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
                "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit "+
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "+
                "sunt in culpa qui officia deserunt mollit anim id est laborum.";

document.addEventListener("DOMContentLoaded", ()=>{

createMenu("Nasi Goreng", "assets/img/curry_1.jpeg", dummyText);
createMenu("Soto", "assets/img/curry_1.jpeg", dummyText);
createMenu("Empal Gentong", "assets/img/curry_1.jpeg", dummyText);
createMenu("Nila Bakar", "assets/img/curry_1.jpeg", dummyText);

});