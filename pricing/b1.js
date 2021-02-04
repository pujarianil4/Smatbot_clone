//for button one changing the color when we hover on it
var b1=document.getElementById('monthly');
function changeColor() {
    b1.style.backgroundColor="chocolate";
    
}
function OriginalColor() {
    b1.style.backgroundColor=" cornflowerblue"
    
}

b1.addEventListener('mouseover',changeColor);
b1.addEventListener('mouseout',OriginalColor);




