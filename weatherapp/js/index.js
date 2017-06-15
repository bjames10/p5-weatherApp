// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

$.simpleWeather({
    location: 98816,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp); 
     
    $('.city').text(weather.city);    
 $('.currently').text(weather.currently) 
 $('img').attr('src',weather.image);
       //Change Icon 
      
 $('i').attr('class', 'icon-' + weather.code)     
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });