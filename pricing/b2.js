//for button two...!
var b2=document.getElementById('six');
function changeColor() {
    b2.style.backgroundColor="chocolate";
    
}
function OriginalColor() {
    b2.style.backgroundColor="cornflowerblue"
    
}

b2.addEventListener('mouseover',changeColor);
b2.addEventListener('mouseout',OriginalColor);
