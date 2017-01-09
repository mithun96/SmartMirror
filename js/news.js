
$.getJSON('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=4105da21c58c40cab8687280ebb449b8', function(newsResults){
	
	document.getElementById("placeNewsTitle1").innerHTML = newsResults.articles[1].title;
	document.getElementById("placeNewsDetail1").innerHTML = newsResults.articles[1].description;

	document.getElementById("placeNewsTitle2").innerHTML = newsResults.articles[2].title;
	document.getElementById("placeNewsDetail2").innerHTML = newsResults.articles[2].description;

	document.getElementById("placeNewsTitle3").innerHTML = newsResults.articles[3].title;
	document.getElementById("placeNewsDetail3").innerHTML = newsResults.articles[3].description;

	//document.getElementById("placeNewsTitle4").innerHTML = newsResults.articles[4].title;
	//document.getElementById("placeNewsDetail4").innerHTML = newsResults.articles[4].description;


});



