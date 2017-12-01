   var ici, en,resultat,nbrtent ,niv1 ,niv2,niv3 ,niv ,max,btn1;

niv1 = document.getElementById('niv01').onclick = function(){
  niv = niv1;
}
niv2 = document.getElementById('niv02').onclick = function(){
  niv = niv2;
}
niv3 = document.getElementById('niv03').onclick = function(){
  niv = niv3;
}


niv1 = 10;
niv2 = 5;
niv3 =3;
max=30;

btn1 = document.getElementById('btn1');
btn1.onclick=function(){
  if (niv01.checked) {
    niv = niv1;
    niv01.checked=false;
  }

  else if (niv2.checked) {
    niv = niv2;
    niv2.checked=false;
  }

  else if (niv3.checked) {
    niv = niv3;
    niv3.checked=false;

  }

  if (document.getElementById('nbr').value.trim() !== '') {
    max = document.getElementById('nbr').value;
    document.getElementById('nbr').value='';

  }

  function randomize(param){
    return Math.floor(Math.random()*param+1);
    
  }

  randval=randomize(max);
  alert('niveau game='+niv+ ' max='+max+' randval='+randval);
}

nbrtent =0;
ici=document.getElementById('test');
en=document.getElementById('btn');
resultat = document.getElementById('valiny');

en.onclick=function(){
  
  var  tmp=ici.value;
  ici.value='';
  nbrtent++;
  
  if (nbrtent < niv ){
   if((randval + 1) < tmp){
    
    resultat.innerHTML=resultat.innerHTML +'<br>'+'tentative N°:'+nbrtent +' dia '+  tmp + ' lehibe' ;

  }

  else if ((randval+1) > tmp){ 
    
    resultat.innerHTML =resultat.innerHTML+'<br>' +'tentative N°:'+nbrtent +' dia '+  tmp+ ' kely';

  }
  else if (tmp = randval){
    resultat.innerHTML= tmp+   ' Marina izany';

  }
    
}
else
  resultat.innerHTML = resultat.innerHTML+'<br>'  +'tentative N°:'+nbrtent +' dia '+  tmp+ ' mbola diso' +'<br>'+'Mialatsiny,,, Tapitra ny lalao';

};

function dis(x){
                if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==7 || x==8 || x==9 || x==0 || x=='(' || x==')'){
                frm.txt.value=frm.txt.value+x;}
                else{
                    if(frm.txt.value.charAt(frm.txt.value.length-1)==x){}
                    else{
                        if(frm.txt.value.charAt(frm.txt.value.length-1)=='/' ||frm.txt.value.charAt(frm.txt.value.length-1)=='*' ||frm.txt.value.charAt(frm.txt.value.length-1)=='+' ||frm.txt.value.charAt(frm.txt.value.length-1)=='-' ||frm.txt.value.charAt(frm.txt.value.length-1)=='.'){
                            frm.txt.value=frm.txt.value.slice(0,frm.txt.value.length-1);
                        }
                        frm.txt.value=frm.txt.value+x;
                    }
                }
            }
            function ce(){
                frm.txt.value='';
            }
            function bs(){
                frm.txt.value=frm.txt.value.slice(0,frm.txt.value.length-1);
            };