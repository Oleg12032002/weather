$(function(){
  let input = $('#city'),
      inpVal = input.val();
  
  $('.select').on('change', function(){
    input.val(inpVal + $(this).val());
  });
});

$('#cityB').on('click', function(){
	$('#tablo').css('display','flex');
			
	var city=$('#city').val();

	var apiURI2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cd6d4452d63ebc0d80e58245307fee50`;
		console.log("success getWeather2");
		console.log(apiURI2);
		$.ajax({
		  url: apiURI2,
		  dataType: "jsonp",
		  type: "GET",
		  async: "true",		 
	      timeout : 1000,
                    success : function(data) {
                        console.log("Success");
                    },
                    error : function(e) {
                        console.log("Error");
						$('#cityC').html('<p style="color:red";>ERROR</p><p style="color:#bef7f1";>Перевірте коректність назви</p>');
						$('#tablo').css('display','none');
                    },
                    done : function(e) {
                        console.log("DONE");
                    },  
		}).done(dataHandler3);
	
$('#cityC').text('в' + ' ' + city);	 
function dataHandler3(data) {
	dataString = JSON.stringify(data);
	console.log(data);
	var now = new Date();
	let h = now.getHours();
    var num = 1;

		// document.getElementById("demo6").innerHTML = data.list[num].dt_txt;
		document.getElementById("demo4").innerHTML = "Макс." + " " + Math.floor((data.list[num].main["temp_max"])-273,15)+"°C";
		// document.getElementById("demo7").innerHTML = data.list[num].dt_txt;
		document.getElementById("demo5").innerHTML = "Мін." +  " " + Math.floor((data.list[num].main["temp_min"])-273,15)+"°C";
		var imgURL = "https://openweathermap.org/img/w/" + data.list[num].weather[0].icon + ".png";
		$("#tmp4").attr("src", imgURL);

    // document.getElementById("demo8").innerHTML = data.list[num+1].dt_txt;
		document.getElementById("demo9").innerHTML = "Макс. " + " " + Math.floor((data.list[num+1].main["temp_max"])-273,15)+"°C";
		// document.getElementById("demo10").innerHTML = data.list[num+1].dt_txt;
		document.getElementById("demo11").innerHTML = "Мин." +  " " + Math.floor((data.list[num+1].main["temp_min"])-273,15)+"°C";
		var imgURL = "https://openweathermap.org/img/w/" + data.list[num+1].weather[0].icon + ".png";
		$("#tmp5").attr("src", imgURL);

    // document.getElementById("demo12").innerHTML = data.list[num+2].dt_txt;
		document.getElementById("demo13").innerHTML = "Макс." + " " + Math.floor((data.list[num+2].main["temp_max"])-273,15)+"°C";
		// document.getElementById("demo14").innerHTML = data.list[num+2].dt_txt;
		document.getElementById("demo15").innerHTML = "Мин." +  " " + Math.floor((data.list[num+2].main["temp_min"])-273,15)+"°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num+2].weather[0].icon + ".png";
		$("#tmp6").attr("src", imgURL);		

    // document.getElementById("demo16").innerHTML = data.list[num+3].dt_txt;
		document.getElementById("demo17").innerHTML = "Макс." + " " + Math.floor((data.list[num+3].main["temp_max"])-273,15)+"°C";
		// document.getElementById("demo18").innerHTML = data.list[num+3].dt_txt;
		document.getElementById("demo19").innerHTML = "Мин." +  " " + Math.floor((data.list[num+3].main["temp_min"])-273,15)+"°C";
        var imgURL = "https://openweathermap.org/img/w/" + data.list[num+3].weather[0].icon + ".png";
		$("#tmp7").attr("src", imgURL);		
				
   }
 
   });


  function showDateTime() {
				
				
				var d = new Date();
				var n1, n2, n3, n4, n5;
				var weekday = new Array(7);
					weekday[0] = "Неділя";
					weekday[1] = "Понеділок";
					weekday[2] = "Вівтоорок";
					weekday[3] = "Середа";
					weekday[4] = "Четвер";
					weekday[5] = "Пятниця";
					weekday[6] = "Субота";
					 
					 if(d.getDay() >= 3){
						   n1 = weekday[(d.getDay())];
						   n2 = weekday[(d.getDay()+1)];
						   n3 = weekday[(d.getDay()+2)];
						   n4 = weekday[7-(d.getDay()+3)];} if(d.getDay() >= 4)
					     {
						   n1 = weekday[(d.getDay())];
						   n2 = weekday[(d.getDay()+1)];
						   n3 = weekday[7-(d.getDay()+2)];
						   n4 = weekday[9-(d.getDay()+3)];} if(d.getDay() >= 5)
					     {
						   n1 = weekday[(d.getDay())];
						   n2 = weekday[7-(d.getDay()+1)];
						   n3 = weekday[9-(d.getDay()+2)];
						   n4 = weekday[11-(d.getDay()+3)];} if(d.getDay() >= 6)
					     {
						   n1 = weekday[7-(d.getDay())];
						   n2 = weekday[9-(d.getDay()+1)];
						   n3 = weekday[11-(d.getDay()+2)];
						   n4 = weekday[13-(d.getDay()+3)];}  if(d.getDay() < 3) 
						 {
					       n1 = weekday[(d.getDay())];
						   n2 = weekday[(d.getDay()+1)];
						   n3 = weekday[(d.getDay()+2)];
						   n4 = weekday[(d.getDay()+3)];
						  
					     }
						
								document.getElementById("day1").innerHTML = n1;
								document.getElementById("day2").innerHTML = n2;
								document.getElementById("day3").innerHTML = n3;
								document.getElementById("day4").innerHTML = n4;								
			}
				showDateTime(); 