//for button one changing the color when we hover on it
var b1=document.getElementById('monthly');
function changeColor() {
    b1.style.backgroundColor="chocolate";
    
}
function OriginalColor() {
    b1.style.backgroundColor=" cornflowerblue"
    
}

b1.addEventListener('mouseover',changeColor);
b1.addEventListener('mouseout',OriginalColor);

var starpro=[1400,4700];
var newprices=[1800,5500];

function pressEnter() {
    if(starpro[0]&&starpro[1]!==(newprices[0]&&newprices[1])){
        
        document.getElementById('price').innerHTML="Rs."+newprices[0]+" /month";
        document.getElementById('pro-price').textContent="Rs."+newprices[1]+" /month";
    }
}
b1.addEventListener('click',pressEnter);



