var enter=document.getElementById('enter-btn');
function Colorenter() {
    enter.style.background="white";
    enter.style.color="black";
}
function Originalenter() {
    enter.style.background="#EE964B";
    enter.style.color="white";
}
enter.addEventListener('mouseover',Colorenter);
enter.addEventListener('mouseleave',Originalenter);