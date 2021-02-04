var signup=document.getElementById('Signup');
function ColorSignup() {
    signup.style.background="white";
    signup.style.color="black";
}
function OriginalSignup() {
    signup.style.background="#6c5ce7";
    signup.style.color="white";
}
signup.addEventListener('mouseover',ColorSignup);
signup.addEventListener('mouseleave',OriginalSignup);


//for buttom signup button 
var bottom=document.getElementById('Signup2');
function Colorbottom() {
    bottom.style.background="white";
    bottom.style.color="black";
}
function Originalbottom() {
    bottom.style.background="#6c5ce7";
    bottom.style.color="white";
}
bottom.addEventListener('mouseover',Colorbottom);
bottom.addEventListener('mouseleave',Originalbottom);
