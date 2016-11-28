$(function() {
	var title;
	var page=1;
	var $data;
	$('#search-btn').on('click',function(){
		title=$('#name').val();
		console.log(title);
		$data=$('#data');
		$data.empty();
		Searchresult(page);
	});
	function Searchresult(page){
		$data.empty();
		var filmdetails=$("#Details").html();
		var noimgdet=$("#noimg").html();
		function detaillist(data1){
			$data.append(Mustache.render(filmdetails,data1));
		}
		function detailsnoimg(data1){
			$data.append(Mustache.render(noimgdet,data1));
		}
		$('#name').val("");
		$.ajax({
			type:'GET',
			url : 'http://www.omdbapi.com/?s='+title+'&page='+page,
			success:function(data){
					var count=(parseFloat(data.totalResults))/3;
					console.log(count);
					if(data.Error){
						$data.append('<div class="alert noreslt">Sorry no data found</div>');
					}
					console.log('success',data);
					$.each(data,function(i,datas){
						datas.sort(function(a,b){
							return parseFloat(b.Year)-parseFloat(a.Year);
							});
						$.each(datas,function(i,data1){
							if(data1.Poster=="N/A"){
								detailsnoimg(data1);
							}
							else{
								detaillist(data1);
							}
						});
				});
			}
		});
	}
	$('#next').on('click',function()
	{
		page++;
		Searchresult(page);
	});
	$('#prev').on('click',function()
	{
		page--;
		Searchresult(page);
	});
});
		
	