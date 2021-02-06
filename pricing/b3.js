var b3=document.getElementById('annual');
function changeColor() {
    b3.style.backgroundColor="chocolate";
    
}
function OriginalColor() {
    b3.style.backgroundColor= "cornflowerblue"
    
}

b3.addEventListener('mouseover',changeColor);
b3.addEventListener('mouseout',OriginalColor);

var starpro=[1800,5500];
var newprices=[1600,5000];


function proEnter() {
    if(starpro[0]&&starpro[1]!==(newprices[0]&&newprices[1])){
       
        document.querySelector('.amuual').innerHTML="Rs."+newprices[0]+" /month";
        document.querySelector('.amuual2').textContent="Rs."+newprices[1]+" /month";
    }
}

b3.addEventListener('click',proEnter);




