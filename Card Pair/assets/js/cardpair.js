var card1='';
var card2='';
var obj1;
var obj2;
var wincount=0;
var pairCount = 8;
var ar = ['sports_esports','sports_football','sports_tennis','sports_mma','sports_cricket','sports_golf','sports_motorsports','sports_soccer','sports_esports','sports_football','sports_tennis','sports_mma','sports_cricket','sports_golf','sports_motorsports','sports_soccer']
var ar2 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
ar.sort(function(a, b){return 0.5 - Math.random()});

function start(){
	for(var i =0;i<16;i++){
	document.getElementById(String(i)).innerHTML = "<i class='material-icons' style='font-size:60px'>"+ar[i]+"</i>";
	document.getElementById('game-status').innerHTML= pairCount;
	}
}

function show(obj){
	obj.style.backgroundColor="#25CCF7";
}
function close(obj){
	obj.style.backgroundColor="#444";
}
function correct(obj){
	obj.style.backgroundColor="#45CE30";
}

function check(obj){
	if(card1==''){
		obj1=obj;
		card1=obj.innerHTML;
		show(obj);
	}else{
		obj2=obj;
		card2=obj.innerHTML;
		show(obj);
		setTimeout(myFunction, 500);
			function myFunction(){
						if(card1==card2){
			correct(obj1);
			correct(obj2);

			if(ar2[parseInt(obj1.id)]==1 && ar2[parseInt(obj2.id)]==1){
				ar2[parseInt(obj1.id)]=0;
				ar2[parseInt(obj2.id)]=0;
				pairCount--;
				document.getElementById('game-status').innerHTML=pairCount;
			}
			wincount++;
			if(pairCount==0){
				swal({
				  title: "Congratulations",
				  text: "You have found all pairs",
				  icon: "success",
				  button: "close",
				});
			}
		}else{
			
			close(obj1);
			close(obj2);
			
		}
		card1=''
		card2=''
		obj1=null
		obj2=null
			}

	}

}

start();
