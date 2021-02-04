var b3=document.getElementById('annual');
function changeColor() {
    b3.style.backgroundColor="chocolate";
    
}
function OriginalColor() {
    b3.style.backgroundColor= "cornflowerblue"
    
}

b3.addEventListener('mouseover',changeColor);
b3.addEventListener('mouseout',OriginalColor);





