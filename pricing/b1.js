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

var starter=1400;
var pro=4700;
var monthly_st=1800;
var mon_pro=5500;
function setMonthly(){
    if(starter<monthly_st){
        starter=monthly_st;
    }
    if(pro<mon_pro){
        pro=mon_pro;
    }
}

b1.addEventListener('click',setMonthly);



