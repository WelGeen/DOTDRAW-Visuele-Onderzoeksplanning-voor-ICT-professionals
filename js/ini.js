
document.getElementById('file-input').addEventListener('change', demo_open, false);	

createJSTree([{"id":"j1_1","text":"Main Question?","icon":"icon/logo-question.png","li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"#","type":"question"}], "#container" );

/*createJSTree([{"id":"j1_1","text":"Main Question?","icon":"icon/logo-question.png","li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"#","type":"question"},{"id":"j1_2","text":"Sub Question","icon":"icon/logo-question.png","li_attr":{"id":"j1_2"},"a_attr":{"href":"#","id":"j1_2_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"question"},{"id":"j1_6","text":"Design Pattern Search","icon":"icon/logo-lib.png","li_attr":{"id":"j1_6"},"a_attr":{"href":"#","id":"j1_6_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_2","type":"library"},{"id":"j1_3","text":"Sub Question","icon":"icon/logo-question.png","li_attr":{"id":"j1_3"},"a_attr":{"href":"#","id":"j1_3_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"question"},{"id":"j1_7","text":"Survey","icon":"icon/logo-field.png","li_attr":{"id":"j1_7"},"a_attr":{"href":"#","id":"j1_7_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_3","type":"field"},{"id":"j1_4","text":"Sub Question","icon":"icon/logo-question.png","li_attr":{"id":"j1_4"},"a_attr":{"href":"#","id":"j1_4_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"question"},{"id":"j1_8","text":"Cultural probes","icon":"icon/logo-field.png","li_attr":{"id":"j1_8"},"a_attr":{"href":"#","id":"j1_8_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_4","type":"field"},{"id":"j1_9","text":"Storytelling","icon":"icon/logo-work.png","li_attr":{"id":"j1_9"},"a_attr":{"href":"#","id":"j1_9_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_4","type":"workshop"},{"id":"j1_5","text":"Sub Question","icon":"icon/logo-question.png","li_attr":{"id":"j1_5"},"a_attr":{"href":"#","id":"j1_5_anchor"},"state":{"loaded":true,"opened":true,"selected":true,"disabled":false},"data":{},"parent":"j1_1","type":"question"},{"id":"j1_10","text":"Ideation","icon":"icon/logo-lab.png","li_attr":{"id":"j1_10"},"a_attr":{"href":"#","id":"j1_10_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_5","type":"lab"}],
 
"#container" );*/

function zoom(_this){
	console.log(_this.parentElement);
	
	var svg = _this.parentElement.parentElement;
	var cntnt = _this.parentElement;
	var deflt = "-500 -300 1000 600";
	//console.log(_this);
	var a = Number(_this.getAttribute("data"));
	if(a==0){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-250 -150 500 300" );
			cntnt.setAttribute("transform", "translate(0,0)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==1){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(0,200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==2){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(-200,200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==3){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(-200,0)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==4){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(-200,-200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==5){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(200,-200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==6){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(200,200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}
	
	if(a==7){
		if (svg.getAttribute("viewBox")== deflt){
			svg.setAttribute("viewBox", "-125 -75 250 150" );
			cntnt.setAttribute("transform", "translate(0,-200)" );
		}else{
			svg.setAttribute("viewBox", deflt);
			cntnt.setAttribute("transform", "translate(0,0)" );
		}
	}	
}
