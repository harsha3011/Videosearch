$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('#btn_sub').click(function(e) {
		
		e.preventDefault();
		
		$('#al_sub').slideDown();
		
	});
});