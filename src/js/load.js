/* This function is loading JSON file from a server and send each parameter to two
functions, one will make home page with gallery of images, other will make image detail page */

function loadImages(){
	var url =  "http://alpha-web.crewapp.com/crewstagram";  
	$.getJSON( url, function( data ) {


			var listOfImages = data.images;
				$.each(listOfImages,function(i,elem){
					var url = elem.imageUrl;
					var favorites = elem.favorites;
					var comments = elem.comments;
					var uuid = elem.uuid;
					var favorites = elem.favorites;
			
					/* make image detail page */
					imageDetail(i,uuid,url,favorites,comments);

					/* make home page with image galery */
					imageGalery(uuid,url);
				});
	})			 
	.done(function() {
		console.log( "GET request success" );
	})
	.fail(function() {
		console.log( "error" );
	})
}

