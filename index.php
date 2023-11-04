<?php
ini_set( "display_errors", true );
date_default_timezone_set( "Europe/Amsterdam" );  // http://www.php.net/manual/en/timezones.php
?>

<!DOCTYPE html>
<html lang="en">

	<head>
		<title>Visualisation DOT Framework Toolkit</title>
		<meta charset='utf-8'>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
		
		<script src="js/script.js"></script>
		<script src="js/tree-scripts-2.js"></script> 
		
		<link rel="stylesheet" href="https://static.jstree.com/latest/assets/dist/themes/default/style.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/styles.css">
		<link rel="stylesheet" href="css/styles-manual.css">

		<script src="jstree-master/dist/jstree.js"></script>

	</head>
	
	<body>
	
		<div id='cssmenu'>
			<ul>
				<li><a href='#'>File</a>
					<ul>
						<li><a href="#" onclick="demo_new();" >New</a></li>
						<li> 
							<a href="#" >Import</a>
							<input type="file" name="myfile" id="file-input" />
						</li> 
						<li><a href="#" onclick="demo_save(0);" >Download</a></li>
						<li><a href="#" onclick="demo_print();" >Print (Low Quality)</a></li>
					</ul>
				</li>
				
				<li><a href='#'>Add</a>
					<ul>
						<li><a href="#" onclick="demo_question();" >Question</a></li>
						<li><a href="#" onclick="demo_solution();" >Solution</a></li>
						<li><a href="#" onclick="demo_output();" >PDF documentation</a></li>
					</ul>
				</li>
				
				<li><a href='#'>Selecting</a>
					<ul>
						<li><a href="#" onclick="demo_rename();" >Edit</a></li>
						<li><a href="#" onclick="demo_delete();" >Delete</a></li>
					</ul>
				</li>						
				
				<li><a href='#'>Add Library</a>
					<ul>
						<li><a href='#'>Analysis</a>
							<ul>
								<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Available product analysis' });" >Available product analysis</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Competitive analysis' });" >Competitive analysis</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'SWOT analysis' });" >SWOT analysis</a></li>
							</ul>
						</li>
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Best good and bad practices' });" >Good and bad practices</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Community research<' });" >Community research</a></li>
						
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Design Pattern Search' });" >Design pattern research</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Expert interview' });" >Expert interview</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Literature study' });" >Literature study</a></li>
						
						<li><a href="#" onclick="demo_strategie({'str':'library', 'txt':'Benchmark creation'});" >Benchmark creation</a></li>
						
					</ul>
				</li>
				
				<li><a href='#'>Add Field</a>
					<ul>
						<li><a href='#'>Analysis</a>
							<ul>
								<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Document analysis' });" >Document analysis</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Task analysis' });" >Task analysis</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Stakeholder analysis' });" >Stakeholder analysis</a></li>
							</ul>
						</li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Explore user requirements' });" >Explore user requirements</a></li>
						
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Domain modelling' });" >Domain modelling</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Interview' });" >Interview</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Survey' });" >Survey</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Context mapping' });" >Context mapping</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Participant observation' });" >Participant observation</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Diary study' });" >Diary study</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Focus group' });" >Focus group</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Card sorting' });" >Card sorting</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Day in the life' });" >Day in the life</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Bag tour' });" >Bag tour</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Fly on the wall' });" >Fly on the wall</a></li> 
						<li><a href="#" onclick="demo_strategie({'str':'field', 'txt':'Cultural probes' });" >Cultural probes</a></li>

					</ul>
				</li>
				
				<li><a href='#'>Add Showroom</a>
					<ul>
					
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Benchmark test' });" >Benchmark test</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Ethical check' });" >Ethical check</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Guidline conformity analysis' });" >Guidline conformity analysis</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Static program analysis' });" >Static program analysis</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Peer Review' });" >Peer Review</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'(Product) Quality Review' });" >(Product) Quality Review</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Heuristic Evaluation' });" >Heuristic Evaluation</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Pitch' });" >Pitch</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Co-reflection' });" >Co-reflection</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Unique Selling Points' });" >Unique Selling Points</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Provocative Prototyping' });" >Provocative Prototyping</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'showroom', 'txt':'Expo' });" >Expo</a></li>
					</ul>
				</li>
				
				<li><a href='#'>Add Workshop</a>
					<ul>
						<li><a href='#'>Creative methods</a>
							<ul>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Brainstorm' });" >Brainstorm</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Ideation' });" >Ideation</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Sketching' });" >Sketching</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Storytelling' });" >Storytelling</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Business case exploration' });" >Business case exploration</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Scamper' });" >Scamper</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Co-creation' });" >Co-creation</a></li> 
							</ul>
						</li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Proof of Concept' });" >Proof of Concept</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Prototyping' });" >Prototyping</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Code review' });" >Code review</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Gap analyisis' });" >Gap analyisis</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Software decomposition' });" >Software decomposition</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Root cause analysis' });" >Root cause analysis</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Data oriented decision making' });" >Data oriented decision making</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Criteria-based Decision making' });" >Criteria-based Decision making</a></li>	
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Requirements prioritization' });" >Requirements prioritization</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'workshop', 'txt':'Morphological chart' });" >Morphological chart</a></li> 
					</ul>
				</li>	
				
				<li><a href='#'>Add Lab</a>
					<ul>
					<li><a href='#'>Test methods</a>
							<ul>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'A/B Testing' });" >A/B Testing</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Usability Testing' });" >Usability testing</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Think aloud' });" >Think aloud test </a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Unit tes' });" >Unit test</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'System test' });" >System test</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Software testing' });" >Software testing</a></li> 
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Component test' });" >Component test</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Security test' });" >Security test</a></li>
								<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Non-functional test' });" >Non-functional test</a></li>
							</ul>
						</li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Hardware validation' });" >Hardware validation</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Field Trial' });" >Field Trial</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Data analytics' });" >Data analytics</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Computer simulation' });" >Computer simulation</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Online analytics' });" >Online analytics</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Wizard of Oz' });" >Wizard of Oz</a></li>
						
						
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Biometrics' });" >Biometrics</a></li>
						
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Process review' });" >Process review</a></li>
						<li><a href="#" onclick="demo_strategie({'str':'lab', 'txt':'Product review' });" >Product review</a></li>
					</ul>
				</li>

				<li><a href='#'>Help</a>
					<ul>
						<li style="float: right"><a href="http://ictresearchmethods.nl/" target='_blank' >ICT Methods</a></li>
						<li style="float: right"><a href="http://www.cmdmethods.nl/" target='_blank' >CMD Methods</a></li>
						
						<li style="float: right; background-color: yellow; color: black"><a href="javascript:demo_example();" target='_blank' >Example DOT</a></li>
		
						<li style="float: right; background-color: yellow; color: black"><a href="https://maken.wikiwijs.nl/127721/" target='_blank' >DOT-Framework</a></li>
						
						<li style="float: right; background-color: yellow; color: black"><a href="DOT_TOOL_V1.0.zip"  >SOURCE CODE </a></li>
					</ul>
				</li>
			</ul>
		</div>
					
		<div class="flex-container">
		
			<div id="left">
				<div id="container"></div>
			</div>
			
			<div id="right" >
				<div id="mainQuestion" ><?php include "dot-visualisation.php"; ?></div>
				<div id="subQuestions" ></div>
			</div>
			
			
		</div>
		<script src="js/ini.js"></script>
		
	</body>
</html>