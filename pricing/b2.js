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

var starpro=[1800,5500];
var newprices=[1600,5000];


function proEnter() {
    if(starpro[0]&&starpro[1]!==(newprices[0]&&newprices[1])){
       
        document.querySelector('.sixmon').innerHTML="Rs."+newprices[0]+" /month";
        document.querySelector('.sixmon2').textContent="Rs."+newprices[1]+" /month";
    }
}

b2.addEventListener('click',proEnter);
