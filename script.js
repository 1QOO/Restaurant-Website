function NewElement(name, attr=null, content=false){
    let openTag = null;
    let closeTag = `</${name}>`;
    
    if (attr) openTag = `<${name} ${attr}>`;
    else openTag = `<${name}>`;
    
    if(content) return `${openTag}${content}${closeTag}`;
    else return `${openTag}${closeTag}`
}

let dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "+
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris "+
                "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit "+
                "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "+
                "sunt in culpa qui officia deserunt mollit anim id est laborum.";

function createMenu(dishName, imageURL, dishDesc){
    let target = document.getElementById("menu-display");
    
    target.innerHTML += 
    NewElement("div", "class=\"menu\"",
        NewElement("img", `src="assets/img/img_default.jpeg" alt="dish"`, false)+
        NewElement("div", "class=\"menu-content\"",
            NewElement("h2", null, dishName)+
            NewElement("p", null, dishDesc)
        )+
        NewElement("div", "class=\"menu-actions\"",
            infoTooltip(dummyText)+
            NewElement("div", "class=\"rating-content\"", rating())+
            NewElement("div", "class=\"order-actions\"", orderActions())
        )
    );
}

function infoTooltip (info){
    let element = NewElement("div", "class=\"info\"", "Info!"+
                  NewElement("p", "class=\"info-content\" hidden", info));
                  
        return element;
}

function rating(){
    let element = NewElement("canvas", "class=\"rating\" style=\"height:4vh;width:20vh;\"", "");
    
    return `Rating: ${element}`;
}

function orderActions(){
    let element = NewElement("button", null, "-")+
                  NewElement("span", null, "0")+
                  NewElement("button", null, "+");
                  
    return `i ${element}`;
}