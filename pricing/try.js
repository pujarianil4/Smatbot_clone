var starter=document.getElementById('Try');
function Colorstarter() {
    starter.style.background="white";
    starter.style.color="black";
}
function Originalstarter() {
    starter.style.background="#110858 ";
    starter.style.color="white";
}
starter.addEventListener('mouseover',Colorstarter);
starter.addEventListener('mouseleave',Originalstarter)

//creating button for bottom 
var trybtn=document.getElementById('Try2');
function Colortrybtn() {
    trybtn.style.background="white";
    trybtn.style.color="black";
}
function Originaltrybtn() {
    trybtn.style.background="#110858 ";
    trybtn.style.color="white";
}
trybtn.addEventListener('mouseover',Colortrybtn);
trybtn.addEventListener('mouseleave',Originaltrybtn)
