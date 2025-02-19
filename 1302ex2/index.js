document.getElementById("fontSelect").addEventListener("change", edit);
document.getElementById("fontColor").addEventListener("change", edit);
document.getElementById("fontSize").addEventListener("change", edit);
document.getElementById("editableDiv").addEventListener("input", edit);

function edit(){
    let text = document.getElementById("editableDiv");
    let color = document.getElementById("fontColor").value;
    let size = document.getElementById("fontSize").value;
    let font = document.getElementById("fontSelect").value;
    
    text.style.color = color;
    text.style.fontFamily = font;
    text.style.fontSize = size + "px"; 
}
