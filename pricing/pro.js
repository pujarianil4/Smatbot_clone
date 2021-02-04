var Pro=document.getElementById('pro-btn');
function ColorPro() {
    Pro.style.background="white";
    Pro.style.color="black";
}
function OriginalPro() {
    Pro.style.background="hotpink";
    Pro.style.color="white";
}
Pro.addEventListener('mouseover',ColorPro);
Pro.addEventListener('mouseleave',OriginalPro);