var axios = require('axios');

 const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=1a7cce7643eda8dc5630fe232d69bf11&units=imperial';
//
 module.exports = {
 	getTemp: function (location) {
 		var encodedLocation = encodeURIComponent(location);
 		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

 		 return axios.get(requestUrl).then(function (res){
 		 	
 			if(res.data.cod && res.data.message)
 			{
 				throw new Error(res.data.message);
 				res.addHeader("Access-Control-Allow-Origin", "*");
 			}
 			else
 			{
 				return res.data.main.temp;
 			}
 		}, function (res) {
				throw new Error(res.data.message);
 		});
 	}
 }