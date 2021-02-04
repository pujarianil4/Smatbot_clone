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

//creating botton for bottom pro
var probtn=document.getElementById('pro-btn2');
function Colorprobtn() {
    probtn.style.background="white";
    probtn.style.color="black";
}
function Originalprobtn() {
    probtn.style.background="hotpink";
    probtn.style.color="white";
}
probtn.addEventListener('mouseover',Colorprobtn);
probtn.addEventListener('mouseleave',Originalprobtn);
