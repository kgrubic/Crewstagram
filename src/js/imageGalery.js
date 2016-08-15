/* will make home page with gallery of images */

function imageGalery(uuid,url){
				$("<img>")
					.attr("class","images")
					.attr("width","500px")
					.attr("src",url)
					.appendTo("#galery")
					.click(function(){
							$('#'+uuid).show();
							$('#galery').hide();
					})
				}