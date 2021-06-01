$(document).ready(function(){
	$("#ThingsInput").keypress(function(e){
		if ((e.keyCode == 13) && ($("#ThingsInput").val().trim() != '')){
			$('#TaskLista').prepend('<li class="itemElement">'+'<i class="OFFCheck fas fa-check-square"></i>'+
			'<span class="ListaItems">' +$('#ThingsInput').val()+'</span>'+
			'<i class="remove fas fa-backspace"></i>');
			$('#ThingsInput').val('');
			$('#mensaje').addClass('display-none');
		}
	});

$('#TaskLista').on('click','.remove', function(e){
	$(this).parent().remove();
	diplayEmptyMessage();
	});

$('#TaskLista').on('click', '.ListaItems', function(e){
	$(this).toggleClass('subrayado');
	});

$('#TaskLista').on('click', '.OFFCheck', function(e){
	$(this).toggleClass('Verde');
	});






$('#Selected').click( function(e){
   $('.OFFCheck').toggleClass('Verde');
   });

$('#Delete').click( function(e){
   $('.Verde').parent().remove();
      diplayEmptyMessage();
   });

$('#UnSelected').click(function(e){
   $('.OFFCheck').removeClass('Verde');
   });






$('#Hide').click(function(e){
   	slideContent();
   });

$('#Show').click(function(e){
   	slideContent();
   });


function slideContent(){
	$('.itemElement').slideToggle();
	$('#Hide, #Show').toggleClass('display-none');
   }






$('#NoFilter').click(function(e){
   $('.ListaItems').parent().removeClass('display-none');
   	diplayEmptyMessage();
   });

$('#SelectedFilter').click(function(e){
   	filterElement('.Verde');
   });

$('#Underlined').click(function(e){
   	filterElement('.subrayado');
   });


function diplayEmptyMessage(){
   	if ($('.itemElement').length == 0){
   		$('#mensaje').removeClass('display-none');
   	}else{
   		$('#mensaje').addClass('display-none');
   	}
   }

function filterElement(className){
   	let existenElementos = false;
   	$('.itemElement').removeClass('display-none');
   	$('#mensaje').addClass('display-none');
   	$('.itemElement').each(function(elementIndex){
   		if ($(this).find(className).length == 0){
   			$(this).addClass('display-none');
   		}else{
   			existenElementos = true;
   		}
   	})
   	if (existenElementos === false){
   		$('#mensaje').removeClass('display-none');
   	}
   }


});