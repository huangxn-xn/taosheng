window.onload=function(){
	var text=document.getElementById('text');
    text.onfocus=function(){
	if(text.value=='--请输入关键字--'){
		text.value='';
		text.style.color='#333';
	}
}
	text.onblur=function(){
	if(text.value==''){
		text.value='--请输入关键字--';
		text.style.color='#999';
	}
}
function link(li0s,p0s){
	var mylis=document.getElementById(li0s);
	var myps=document.getElementById(p0s);
	mylis.onmouseover=function(){
		myps.style.display='block';
	}
	mylis.onmouseout=function(){
		myps.style.display='none';
	}
}
link('li01','p01');
link('li02','p02');
link('li03','p03');
link('li04','p04');
link('li05','p05');
link('li06','p06');
}

