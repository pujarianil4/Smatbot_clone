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