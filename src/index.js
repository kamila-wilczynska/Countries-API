const express = require('express');
const app = express();
const Joi = require('joi');
const countries = require('./countriesData.js');


//create router for countries
const countriesRouter = express.Router();

//to be able to parse JSON, if we want to use req.body
app.use(express.json());

// get the all countries
countriesRouter.get('/', (req, res) => {
	res.send(countries);
});

// mount routera
//all routes will have prefix '/api/countries'
app.use('/api/countries', countriesRouter);

// Opcjonal:'/'
countriesRouter.get('/', (req, res) => {
	res.send('Welcome to the Countries API! =)');
});

//get country by id
countriesRouter.get('/:id', (req, res) => {
	// search for country with id
	const country = countries.find(country => country.id === parseInt(req.params.id));

	// check if country is found
	if (!country) {
		// if country found send status 404 and message
		res.status(404).send('The course not found');
	} else {
		// if country found send:
		res.send(country);
	}

});


countriesRouter.post('/', (req, res) => {
	//validation
	const schema = Joi.object({
		country: Joi.string().min(3).required(),
	});

	const result = schema.validate(req.body);
	console.log(result);

	if (result.error) { //min 3 characters in counrty name
		return res.status(400).send(result.error);
	}
	const country = {
		id: countries.length + 1,
		country: req.body.country,
	};
	countries.push(country);
	res.send(country);
})


countriesRouter.put('/:id', (req, res) => {
	const country = countries.find(c => c.id === parseInt(req.params.id));

	if (!country) {
		return res.status(404).send('Country not found');
	}
	// Validation
	const schema = Joi.object({
		country: Joi.string().min(3).required(),
	});

	const result = schema.validate(req.body);
	if (result.error) {
		return res.status(400).send(result.error.details[0].message);
	}


	// Update the 'country' field in the country object
	country.country = req.body.country;
	res.send(country);  // Send updated country
});


countriesRouter.delete('/:id', (req, res) => {
	const country = countries.find(c => c.id === parseInt(req.params.id));

	if (!country) {
		return res.status(404).send('The course not found');
	}

	const index = countries.indexOf(country);
	countries.splice(index, 1);

	res.send(country);
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
