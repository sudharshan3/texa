
var a = document.getElementById('parent');
var b = document.getElementById('bck');
var count = 1;
var temp=0;
const form = document.querySelector('#login-form');
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var pass_tel = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
var pass_web =  new RegExp('^(https?:\\/\\/)?'+
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
'((\\d{1,3}\\.){3}\\d{1,3}))'+ 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+
'(\\#[-a-z\\d_]*)?$','i');

let btn = form.elements.namedItem("forwardbtn");
let username = form.elements.namedItem("username");
let password = form.elements.namedItem("password");
let emailid = form.elements.namedItem("emailid");
let cname = form.elements.namedItem("cname");
let code = form.elements.namedItem("code");
let tnumber = form.elements.namedItem("tnumber");
let weburl = form.elements.namedItem("weburl");



username.addEventListener('input', validate);
password.addEventListener('input', validate);
emailid.addEventListener('input', validate);
cname.addEventListener('input', validate);
code.addEventListener('input', validate);
tnumber.addEventListener('input', validate);
weburl.addEventListener('input', validate);
b.style.display='none';




form.addEventListener('onInput', function(e) {
 e.preventDefault();
 
 alert('SUBMITTED');
 return true;
});

function validate (e) {
 if (e.target.name == "password") {
  if (pass_reg.test(e.target.value)) {
   e.target.classList.add('valid');
   e.target.classList.remove('invalid');
   temp=1;
  } else {
   e.target.classList.add('invalid');
   e.target.classList.remove('valid');
   temp=0;
  }
 }
 
 if (e.target.name == "username") {
  if (e.target.value.length > 3) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
   
    temp=1;
  } else {
   e.target.classList.add('invalid');
   e.target.classList.remove('valid');
   temp=0;
  }
 }

 if (e.target.name == "emailid") {
    if(reg.test(e.target.value) == false)
  {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
    temp=0;
  }

    else {
     e.target.classList.add('valid');
     e.target.classList.remove('invalid');
     temp=1;
    }
   }

   if (e.target.name == "cname") {
    if (e.target.value.length > 3) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
     
      temp=1;
    } else {
     e.target.classList.add('invalid');
     e.target.classList.remove('valid');
     temp=0;
    }
   }

   
   if (e.target.name == "code") {
    if(pass_tel.test(e.target.value) == true)
  {
    e.target.classList.add('invalid');
    e.target.classList.remove('valid');
    temp=0;
  }

    else {
     e.target.classList.add('valid');
     e.target.classList.remove('invalid');
     temp=1;
    }
   }

if (e.target.name == "tnumber") {
    if(pass_tel.test(e.target.value) == true)
  {
     e.target.classList.add('invalid');
     e.target.classList.remove('valid');
    temp=0;
  }

    else {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
     
     temp=1;
    }
   }

   if (e.target.name == "weburl") {
    if(pass_web.test(e.target.value) == true)
  {
     e.target.classList.add('valid');
     e.target.classList.remove('invalid');
    temp=0;
  }

    else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
     
     temp=1;
    }
   }

}






function forward(elem){

    if (temp==1){
    a.style.transform='translateY(' + (-350 * count) + 'px) ';
    count += 1;
    console.log(count);
    
    }
    else{
        console.log("its invalid");
    }
    
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

