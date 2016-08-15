/* will make image detail page */

function imageDetail(i,uuid,url,favorites,comments){

				/* main dev.id = uuid, contain image detail, hide() by default */
				$("<div>")
					.attr("id",uuid)
					.attr("class","one-detail")
					.append($("<img src = "+url+" class = \"image-one\">"))
					.appendTo("#detail");
				
				/* back button, on click show galeru and hide image detail */
				$('<input/>').attr({
                            type: "button",
                         	value : "back",
                         	"class" : "back-button"})
							.appendTo('#'+uuid)
							.click(function(){
								$('#'+uuid).hide();
								$('#galery').show();	
							});

				
				$('<div>').attr("class","comments")
						.attr("id","comments-"+uuid)
						.appendTo('#'+uuid);

				/* for every comments body and username, makes div */
				for(var j = 0; j < comments.length; j++){
					$('<div class="username">').text(comments[j].username)
						.append($('<div class = "comment">').text(comments[j].body))
						.appendTo('#comments-'+uuid);
				}


				

				$('<div>').attr("class","favorites")
						.attr("id",i+'th')
						.appendTo('#'+uuid);


						
	
					$('<div>').attr("class","like-count")
						.attr("id",i)
						.text(favorites)
						.appendTo('#'+i+'th')

				/* this is like, on click update content of div.like-count 
				and send POST request to  update number of likes for uuid */

				$('<span>').text('like').attr('class','like-text').appendTo('#'+i+'th')
							.on('click',function(){
								var num = $('#'+i).html();
								var value = parseInt(num) + 1;
								$('#'+i).html(value);
								$.post("http://alpha-web.crewapp.com/crewstagram/"+uuid)
									.done(function(data){
										console.log('POST request : '+data);
									});
						});

				/* onload , hide all image detail  */			
				$('#'+uuid).hide();
			}