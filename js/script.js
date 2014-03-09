$(document).ready(function(){

	//showing the dynamic menu drop downs
	$("#navlinks li > a").on('click', function(e){
        $(this).siblings('ul').toggle('slow');
    });
	
	//Showing the dynamic date and time
	function myClock(){
			var now = new Date();
			var dd = now.getDate(); 
			var mm= now.getMonth()+1;
			var yyyy = now.getFullYear();
			var currTime = now.toLocaleTimeString();
			setTimeout(myClock,1000);

			$("#today").text(mm+'/'+dd+'/'+yyyy+' '+currTime);	

	}
	myClock();


	//the hide and show of the divs upon menu selection
	$('#Home').show();
	$('#Company').hide();
	$('#Vision').hide();
	$('#Mission').hide();
	$('#error').hide();
	$('#div_contact').hide();

	$('#a_home').click(function(){
		$('#Home').toggle();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').hide();
	});

	$('#a_company').click(function(){
		$('#Home').hide();
		$('#Company').toggle();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').hide();
	});
	$('#a_vision').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').toggle();
		$('#Mission').hide();
		$('#div_contact').hide();
	});
	$('#a_mission').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').toggle();
		$('#div_contact').hide();
	});
	$('#a_contact').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').toggle();
	});

	function load(){
			var feed =[ "http://www.sciencenews.org/view/feed/name/allrss",
						"http://feeds.nature.com/news/rss/today"];
			var fg = new GFdynamicFeedControl(feed[0],"div_blog");
			var fg = new GFdynamicFeedControl(feed[0],"div_blog1");
		}
		google.load("feeds",1);
		google.setOnLoadCallback(load);	

});