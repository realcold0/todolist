const title = document.querySelector("div.hello:first-child h1")

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";

}


function handleMouseEnter(){
    console.log("mouse is here");
}

function handleMouseLeave(){
    console.log("mouse is leave!");
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);