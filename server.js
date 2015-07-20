var express = require('express'),
	bodyParser = require('body-parser'),
	api = require('./api'),
	app = express(),
	router = express.Router();
	
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);
app.listen(1337);

router.use(function(req, res, next) {
    next(); 
});

/*===========================================================*/

router.route('/country')

	.get(function (req,res){
		var getAllCountries = function() {
			return JSON.stringify(Object.keys(api.data));
		};
		res.json(getAllCountries);
	})

	.post(function (req,res){
		var countryName = req.body.country;
		var addCountry = function(countryName) {
			api.data[country] = {};
		};
		res.json({status: "success"});
	});

router.route('/country/:countryName/hotel')

	.get( function (req,res) {
		var getHotelsByCountry = function(req.params.countryName) {
			return JSON.stringify(api.data[country].hotels);
		};
		res.json(getHotelsByCountry);
	})

	.post( function (req,res){
		var hotel = req.body.hotel;
		var description = req.body.description;
		var country = req.params.countryName;
		var addNewHotel = function(country,hotel,description) {
			api.data[country].hotels.push({
						'hotel': hotel,
						'description': description
			});
		};
		res.json({status: "success"});
	});

router.route('/hotel/:hotelName')

	.delete( function (req, res) {
		var deleteHotel = function(req.params.hotelName){
			for (var country in data) {
				api.data[country].hotels.forEach( function (item,i,arr){
														if (item.name == hotel){
																arr.splice(i,1);
			}	
		});
	}
		};
		res.json({status: "success"});
	});


