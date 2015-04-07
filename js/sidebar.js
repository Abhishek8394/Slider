$(function(){
		var pull=$('#pullmenu');
		var menu=$('myul mysidebar');
		$(pull).on('click',function(e){
			e.preventDefault();
			if($('#navicon').css('left')=="-600px")
			{
				$('#navicon').css('left',function(){
					var width=($('#navicon').css('width'));
					var val="-"+width;
					return val;
				});
				$('body').css('overflow-x','hidden');
				$('body').css('left',function(){
					var width=($('#navicon').css('width'));
					var val=width.substring(0,width.length-2);

					return val/0.5;
				});
			}
			else{
				$('#navicon').css('left','-600px');	
				$('body').css('left','0px');		
				$('body').css('overflow-x','auto');
				// $('.pullmenu').css('margin-left',"0px");
			}
		});
		$(window).resize(function(){
		var w=$(window).width();
		if(w>700){
			$('#navicon').css('left',"0px");
			$('body').css('left','0px');		
			$('body').css('overflow-x','auto');
		}
		if(w<=700){
			$('#navicon').css('left','-600px');
		}
	});
	});