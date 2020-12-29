


var a = document.getElementById('parent');
var b = document.getElementById('bck');
var count = 1;


// var val = document.getElementsByClassName('.forward');
// var input = document.getElementsByTagName('input');


// $(input).click(function(){
//     $('.forward').toggleClass('hover');
//   });
//   input.addEventListener('click',function formval(){
//     val.classList.add("hover");
// })




b.style.display='none';





function forward(elem){
    a.style.transform='translateY(' + (-350 * count) + 'px) ';
    count += 1;
    console.log(count);
    if (count<=1){
        b.style.display='none';
    }
    else{
        b.style.display='block';
    }
   

}

function backward(){
        count-=1;
        a.style.transform='translateY(' + (-350 * (count-1)) + 'px) ';
        console.log(count);
        if (count<=1){
            b.style.display='none';
        }
        else{
            b.style.display='block';
        }
        
    
}
