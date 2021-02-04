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