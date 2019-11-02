// marcheaza itemii facuti
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});
// sterge itemi
	$("ul").on("click", "span", function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
	});
	$("input[type='text']").keypress(function(event){
		if(event.which === 13) {
			var newTodo = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class=\"fas fa-trash\"></i></span>" + newTodo + "</li>");
		}
	});

	 //slideDown la input
	 $("#plus").on("click", function(){
	 	$("input").fadeToggle();
	 });