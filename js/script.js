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
		$('#searchResults').hide();
	});

	$('#a_company').click(function(){
		$('#Home').hide();
		$('#Company').toggle();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').hide();
		$('#searchResults').hide();
	});
	$('#a_vision').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').toggle();
		$('#Mission').hide();
		$('#div_contact').hide();
		$('#searchResults').hide();
	});
	$('#a_mission').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').toggle();
		$('#div_contact').hide();
		$('#searchResults').hide();
	});
	$('#a_contact').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').toggle();
		$('#searchResults').hide();
	});
	
	$('#search').click(function(){
		$('#Home').hide();
		$('#Company').hide();
		$('#Vision').hide();
		$('#Mission').hide();
		$('#div_contact').hide();
		$('#searchResults').toggle();		
	});
	
}); //end of document loading

//Google API feeds
google.load("feeds",1);
function initialize(){
		/*var feed = new google.feeds.Feed("http://www.sciencenews.org/view/feed/name/allrss");
		feed.load(function(result){
			if (!result.error) {
				var container = document.getElementById("feed");
      			for (var i = 0; i < result.feed.entries.length; i++) {
		            var entry = result.feed.entries[i];
		            var div = document.createElement("div");
		            div.appendChild(document.createTextNode(entry.title));
		            container.appendChild(div);
      			}
    		}
		});*/
		var feed =[ "http://feeds.feedburner.com/JavaCodeGeeks",
					"http://www.javaworld.com/category/mobile-java/index.rss",
					"http://www.javaworld.com/category/enterprise-java/index.rss",
					"http://www.javaworld.com/category/core-java/index.rss"];
		var fg = new GFdynamicFeedControl(feed[0],"feed5");
		/*var fg = new GFdynamicFeedControl(feed[1],"feed2");
		var fg = new GFdynamicFeedControl(feed[2],"feed3");
		var fg = new GFdynamicFeedControl(feed[3],"feed4");*/		
	}	
	google.setOnLoadCallback(initialize);	
	
	//Google Search API feeds
    google.load("search", "1");

    // Call this function when the page has been loaded
    function onSearch() {
      var searchControl = new google.search.SearchControl();
   // create a draw options object so that we
      // can position the search form root
      var options = new google.search.DrawOptions();
      options.setSearchFormRoot(document.getElementById("search"));
      
      searchControl.addSearcher(new google.search.WebSearch());
      searchControl.addSearcher(new google.search.NewsSearch());
      //searchControl.draw(document.getElementById("searchcontrol");
      searchControl.draw(document.getElementById("searchResults"), options);
      //searchControl.execute("Ferrari Enzo");
      //$('#content').hide();
      //$('#searchResults').show();
    }
    google.setOnLoadCallback(onSearch);
    
	