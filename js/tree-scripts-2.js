function createJSTree(jsondata, id) {
	$(id).jstree({
	
		'core' : {
		"animation" : 0,
		"check_callback" : function (operation, node, parent, position, more) {
		  if(operation === "copy_node" || operation === "move_node" ) {
			if(parent.id === "#") {
			  return false; // prevent moving a child above or below the root
			}
		  }
		  return true; // allow everything else
		},
		'data' : jsondata
		
		},
		
		"types" : {
			"question" : {"icon" : "icon/logo-question.png"},
			"solution" : {"icon" : "icon/logo-solution.png"},
			"output" : {"icon" : "icon/logo-output.png"},
			"field" : {"icon" : "icon/logo-field.png"},
			"workshop" : {"icon" : "icon/logo-work.png"},
			"showroom" : {"icon" : "icon/logo-show.png"},
			"library" : {"icon" : "icon/logo-lib.png"},
			"lab" : {"icon" : "icon/logo-lab.png"}
		 },
		 
		"state" : { "i876555@fontys.nl" : "state_demo" },
		"plugins" : ["dnd","types","state"]
	});

	$(id).on("changed.jstree", function (e, data) {
	
		if(data.node != undefined){
			$('#mainQuestion .methode .question').empty();
			$('#mainQuestion .methode .solution').html("<strong>Solution:</strong><br>");
			$('#mainQuestion .methode .field').html("<strong>Field:</strong><br>");
			$('#mainQuestion .methode .library').html("<strong>Library:</strong><br>");
			$('#mainQuestion .methode .showroom').html("<strong>Showroom:</strong><br>");
			$('#mainQuestion .methode .workshop').html("<strong>Workshop:</strong><br>");
			$('#mainQuestion .methode .lab').html("<strong>Lab:</strong><br>");
			
			
			//var ref = $('#container').jstree(true);
			
			Root = data.instance.get_node(data.node.parent);
			
			if(data.node.type == "question"){
				Root = data.node;
			}
			if(data.node.type == "output"){ 
				Root = data.instance.get_node(Root.parent);
			}
			//console.log(Root.type);
			$('#mainQuestion .question').html(Root.text);
			for (x in Root.children ) {
				var Child = data.instance.get_node(Root.children[x]);
				if (Child.type != "question"){
					if(Child.children.length == 0 ){
						$('#mainQuestion .methode .' + Child.type).append( Child.text +  '<br>'  );
					}else{
						$('#mainQuestion .methode .' + Child.type).append( "<a class='a-svg' target='_blank'  href='" + data.instance.get_node(Child.children[0]).text + "' >" + Child.text + "</a>" + '<br>'  );
					}
				}
			}
			
		}
	});
}

var filename = "untitled";


function demo_new() {
    var r = confirm("Download file first?");
    if (r == true) {
       demo_save(1);
    } else {
		filename = "untitled";
        $('#container').jstree(true).settings.core.data = [{"id":"j1_1","text":"main question","icon":"icon/logo-question.png","li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"#","type":"question"}];
		$('#container').jstree(true).refresh();
    }
}

function demo_save(bool) {
	console.log(bool,filename)
	if(bool || filename == "untitled") {
		
		filename = prompt("Please enter file name", filename);
	}
	var json_data = $('#container').jstree(true).get_json('#', {flat:true});
	var data = JSON.stringify(json_data);
    var a = document.createElement("a");
    var file = new Blob([data], {type: 'text/plain'});
    a.href = URL.createObjectURL(file);
    a.download = filename + '.dot';
    a.click();
}

function demo_open(e) {
  var file = e.target.files[0];
  console.log(file);//filename
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
	var js = JSON.parse(contents);
	$('#container').jstree(true).settings.core.data = JSON.parse(contents);
	$('#container').jstree(true).refresh();
  };
  reader.readAsText(file);
}


function demo_print() {
	var nodes = $('#container').jstree(true)._model.data;
	var html =  $('#mainQuestion').html();

	for (id in nodes) {
		if (nodes[id].type == "question" && nodes[id].parent != "#"){
			$('#subQuestions').append('<div id="'+id+'" >' + html +'</div>'); 
		}
    }

	for (id in nodes) {
		if (nodes[id].type == "question" ){
			$('#'+id+' .question').empty();
			$('#'+id+' .solution').html("<strong>Solution:</strong><br>");
			$('#'+id+' .field').html("<strong>Field:</strong><br>");
			$('#'+id+' .library').html("<strong>Library:</strong><br>");
			$('#'+id+' .showroom').html("<strong>Showroom:</strong><br>");
			$('#'+id+' .workshop').html("<strong>Workshop:</strong><br>");
			$('#'+id+' .lab').html("<strong>Lab:</strong><br>");

			Root = nodes[id];
			$('#'+id+' .question').html(Root.text);
			
			//console.log(nodes);
			for (x in Root.children ) {
				
				var Child = nodes[Root.children[x]];
				
				if(Child.children.length == 0 ){
					$('#'+id+' .' + Child.type).append( Child.text +  '<br>'  );
				}else{
					$('#'+id+' .' + Child.type).append( "<a class='a-svg' target='_blank'  href='" + Child.children[0].text + "' >" + Child.text + "</a>" + '<br>'  );
				}
				

			}			
		}
    }
	
	$('.flex-container').css({display: "block"});
	$('#left').css({width: "95%"});
	$('#right').css({width: "95%"});
	
	


	
	setTimeout(function(){ 
		$('.flex-container').css({display: "flex"});
		$('#left').css({width: "40%"});
		$('#right').css({width: "60%"}); 
		$('#subQuestions').empty();
	}, 1000);
	
	
	window.print();
	
}

function demo_question() {
	var ref = $('#container').jstree(true),
		sel = ref.get_selected();

	if(!sel.length) { return false; }
	//
	sel = sel[0];
	if (sel && ref.get_node(sel).type != "question" ){
		alert("Do not add a question into a "+ref.get_node(sel).type+"!" );
		return false;
	}
	sel = ref.create_node(sel, {'type': "question", "text" : "Sub Question"});
	if(sel) {
		ref.edit(sel);
	}
	//$('#container').jstree("refresh");
}


function demo_solution() {
	var ref = $('#container').jstree(true),
		sel = ref.get_selected();

		if(!sel.length) { return false; }
	//
	sel = sel[0];
	//console.log("question" );
	
	if (sel && ref.get_node(sel).type == "question" ){
			sel_new = ref.create_node(sel, {'type': "solution", "text" : "Solution"});
			ref.edit(sel_new);
	}else{
		alert("Add your solution to the end of a question!" )
	}
	//$('#container').jstree("refresh");
}
function demo_strategie(obj) {
	var ref = $('#container').jstree(true),
		sel = ref.get_selected();
	if(!sel.length) { return false; }
	sel = sel[0];
	
	if (sel && ref.get_node(sel).type == "question" ){
			sel_new = ref.create_node(sel, {'type': obj.str, "text" : obj.txt});
			ref.edit(sel_new);
	}else{
		alert("Add your " + obj.str  + "-strategie methode "+ obj.txt +" into a question!" )
	}
	//$('#container').jstree("refresh");
}

function demo_rename() {
	var ref = $('#container').jstree(true),
		sel = ref.get_selected();
	if(!sel.length) { return false; }
	sel = sel[0];
	ref.edit(sel);
	//$('#container').jstree("refresh");
}

function demo_delete() {
	var ref = $('#container').jstree(true),
		sel = ref.get_selected();
		
	if(!sel.length) { return false; }
	
	if (confirm("Press a OK to delete <" + ref.get_node(sel).text +"> !") == true ) {
		sel = sel[0];
		if (sel != "j1_1" ) {
			ref.delete_node(sel);
		}else{
			alert("Do not delete main question!")
		}
	} else {
		return false;
	}
	//$('#container').jstree("refresh");
}


function demo_output() {

	var ref = $('#container').jstree(true),
		sel = ref.get_selected();

	if(!sel.length) { return false; }
	sel = sel[0];
	
	if (sel && ref.get_node(sel).type != "output" && ref.get_node(sel).type != "question" && ref.get_node(sel).children.length == 0){
			
			sel_new = ref.create_node(sel, {'type': 'output', "text" : 'https://docs.google.com/'});
			ref.edit(sel_new);
	}else{
		alert("Only link one output as PDF into a methode!" );
	}
	//$('#container').jstree("refresh");
}

function demo_example() {
    var r = confirm("Download file first?");
    if (r == true) {
       demo_save(1);
    } else {
		filename = "Example_Visualisation";
        $('#container').jstree(true).settings.core.data = [{"id":"j1_1","text":"Hoe kan een robot oma minder eenzaam laten voelen?","icon":"icon/logo-question.png","li_attr":{"id":"j1_1"},"a_attr":{"href":"#","id":"j1_1_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"#","type":"question"},{"id":"j1_7","text":" Interview: Oma en andere oma's","icon":"icon/logo-field.png","li_attr":{"id":"j1_7"},"a_attr":{"href":"#","id":"j1_7_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"field"},{"id":"j1_8","text":"https://maken.wikiwijs.nl/127721/DOT_framework#!page-4568096","icon":"icon/logo-output.png","li_attr":{"id":"j1_8"},"a_attr":{"href":"#","id":"j1_8_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_7","type":"output"},{"id":"j1_10","text":"Internet: Bestaat de oplossing al?","icon":"icon/logo-lib.png","li_attr":{"id":"j1_10"},"a_attr":{"href":"#","id":"j1_10_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"library"},{"id":"j1_12","text":"https://maken.wikiwijs.nl/127721/DOT_framework#!page-4568096","icon":"icon/logo-output.png","li_attr":{"id":"j1_12"},"a_attr":{"href":"#","id":"j1_12_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_10","type":"output"},{"id":"j1_11","text":"Interview expert: om input te vragen","icon":"icon/logo-lib.png","li_attr":{"id":"j1_11"},"a_attr":{"href":"#","id":"j1_11_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"library"},{"id":"j1_13","text":"https://maken.wikiwijs.nl/127721/DOT_framework#!page-4568096","icon":"icon/logo-output.png","li_attr":{"id":"j1_13"},"a_attr":{"href":"#","id":"j1_13_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_11","type":"output"},{"id":"j1_14","text":"Brainstormen: Creatieve technieken toepassen? ","icon":"icon/logo-work.png","li_attr":{"id":"j1_14"},"a_attr":{"href":"#","id":"j1_14_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"workshop"},{"id":"j1_18","text":"https://www.creatiefdenken.com/nl/cursus/creatieve-technieken.php","icon":"icon/logo-output.png","li_attr":{"id":"j1_18"},"a_attr":{"href":"#","id":"j1_18_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_14","type":"output"},{"id":"j1_15","text":"Interacties ontwerpen: schetsen","icon":"icon/logo-work.png","li_attr":{"id":"j1_15"},"a_attr":{"href":"#","id":"j1_15_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"workshop"},{"id":"j1_19","text":"https://maken.wikiwijs.nl/127721/DOT_framework#!page-4568096","icon":"icon/logo-output.png","li_attr":{"id":"j1_19"},"a_attr":{"href":"#","id":"j1_19_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_15","type":"output"},{"id":"j1_16","text":"Prototyping","icon":"icon/logo-work.png","li_attr":{"id":"j1_16"},"a_attr":{"href":"#","id":"j1_16_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"workshop"},{"id":"j1_20","text":"https://www.youtube.com/watch?v=QhnmKs5WtVA","icon":"icon/logo-output.png","li_attr":{"id":"j1_20"},"a_attr":{"href":"#","id":"j1_20_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_16","type":"output"},{"id":"j1_21","text":"Meten :elk uur aan geven hoe oma zich voelt.","icon":"icon/logo-lab.png","li_attr":{"id":"j1_21"},"a_attr":{"href":"#","id":"j1_21_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"lab"},{"id":"j1_22","text":"https://docs.google.com/","icon":"icon/logo-output.png","li_attr":{"id":"j1_22"},"a_attr":{"href":"#","id":"j1_22_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_21","type":"output"},{"id":"j1_23","text":"(Product) Quality Review: vergelijken met bestaande oplossingen? ","icon":"icon/logo-show.png","li_attr":{"id":"j1_23"},"a_attr":{"href":"#","id":"j1_23_anchor"},"state":{"loaded":true,"opened":false,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"showroom"},{"id":"j1_24","text":"Solution","icon":"icon/logo-solution.png","li_attr":{"id":"j1_24"},"a_attr":{"href":"#","id":"j1_24_anchor"},"state":{"loaded":true,"opened":true,"selected":false,"disabled":false},"data":{},"parent":"j1_1","type":"solution"},{"id":"j1_25","text":"NOT YET","icon":"icon/logo-output.png","li_attr":{"id":"j1_25"},"a_attr":{"href":"#","id":"j1_25_anchor"},"state":{"loaded":true,"opened":false,"selected":true,"disabled":false},"data":{},"parent":"j1_24","type":"output"}];
		$('#container').jstree(true).refresh();
    }	
}