

m=0;
fuction generate(){
	view ="<table id='game'>";
	for(i=1;i<10;i++){
		view+="<tr>";
	       for(j=1;j<10;j++){
	       	view+= '<td><input type="button" id="'+i+j+'" onclick="entry('+i+','+j+')"/></td>';
	       }
	       view+="</tr>";
	}
}
view += "</table>";
document.getElementById("board").innerHTML = view;
}

function entry(x,y){
	xs = x.toString();
	ys = y.toString();

	make(xs+ys)
	if(m!=10)document.getElementById(xs+ys).value=m;
}

function make(x,y){
	xs=x.toString();
	ys=y.toString();
	  for(k=1;k<10;k++)
	  	  for(l=1;l<10;l++){
	  	  	ks=k.toString();
	  	  	ls=l.toString();
	  	  	document.getElementById(ks+ls).disabled =false;
	  	  	document.getElementById(ks+ls).style.backgroundColor="grey";

	  	  }
}
	for(i=1;i<9;i++){
		is= i.toString();
		z="";
		if(i!=x) z=document.getElementById(is+ys).value;
		if(z==w){
		 document.getElementById(is+ys).style.backgroundColor= "red";
		 for(k=1;k<10;k++){
		 	for(l=1;l<10;l++){
		 		ks=k.toString();
		 	    ls=l.toString();
		 	    document.getElementById(ks+ls).disabled=true;
		 	}
		 }
             document.getElementById(xs+ys).disabled=false;
		 }
	}
	if(m!=0) document.getElementById(xs+ys).value =m;
}
function insert(a){
	if(a==1 || a==2 || a==3 || a==4 || a==5 || a==6 || a==7 || a==8 || a==9){
		for (i=1; i<10; i++){
			var id="button" +i;
			if(i==a){
				document.getElementById(id).style.backgroundColor="red";
			}
			else{
				document.getElementById(id).style.backgroundColor="white";
			}
		}
		return m=a;
	}
	else{
		alert("done!";)
	}
	}
}


function highlight(a){
	if((a==1||a==2||a==3||a==4||a==5||a==6||a==7||a==8||a==9) &&(a!=m)){
		var id="button"+a;
		document.getElementById(id).style.backgroundColor ="blue"
	}
	else{
		if(a==m){

		}
		else{
			alert("Nothing to highlight");
		}
	}
}

function listen(a){
	if((a==1||a==2||a==3||a==4||a==5||a==6||a==7||a==8||a==9) &&(a!=m)){
		var id="button"+a;
		document.getElementById(id).style.backgroundColor ="blue"
	}
	else{
		if(a==m){

		}
		else{
			alert("Nothng to listen");
		}
	}
}

