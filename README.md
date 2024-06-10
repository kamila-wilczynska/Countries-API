
# Countries API



The Countries API provides access to information about various countries, including details such as country names, capitals, and interesting facts. This RESTful API is designed to be simple and straightforward for users needing to interact with country-specific data.

## Base URL
The base URL for accessing the API is:
https://countries-api-1-onug.onrender.com/

## Endpoints:
### Get All Countries
URL: /api/countries  
Method: GET  
Success Response: Code: 200, Content: JSON array of countries  
Example: curl -X GET https://countries-api-1-onug.onrender.com/api/countries

### Get Country by ID
URL: /api/countries/:id  
Method: GET  
URL Params: Required: id=[integer]  
Success Response: Code: 200, Content: JSON object of a single country  
Error Response: Code: 404 NOT FOUND, Content: { error : "Country not found" }  
Example: curl -X GET https://countries-api-1-onug.onrender.com/api/countries/1

### Get country image
Url: /images/country.jpg
Method: GET  
URL Params: Required: country=[string]
Example: https://countries-api-1-onug.onrender.com/images/brasil.jpg


### Create a New Country
URL: /api/countries  
Method: POST  
Data Params: Required: { "country": "string" }  
Functionality: This endpoint allows users to add a new country to the database. It includes validation to ensure that the country name meets specific criteria, such as a minimum length requirement, to maintain data quality and consistency.  
Success Response: Code: 201, Content: JSON object of created country  
Example: curl -X POST https://countries-api-1-onug.onrender.com/api/countries -H "Content-Type: application/json" -d '{"country": "NewCountry"}'
Using POSTMAN 
![image](https://github.com/kamila-wilczynska/Countries-API/assets/107350829/83fa1db8-a080-4ed7-9782-7cc95c7fd0a5)



### Update an Existing Country
URL: /api/countries/:id  

Method: PUT  

URL Params:  

Required: id=[integer] — Specifies the unique identifier of the country you want to update.  
Data Params:

Required: { "country": "string" } — JSON object containing the updated name of the country.  
Functionality:
This endpoint allows you to update the details of an existing country specified by the id. It performs validation on the incoming data to ensure that the new country name meets the required criteria (at least 3 characters long). If the specified country is found and the validation passes, the country's name is updated.  

Validation:  

The country name must be at least 3 characters long. This is enforced by Joi, a data validation library, to ensure data integrity.
Success Response:  

Code: 200 OK  
Content: Returns the JSON object of the country with updated data.  
Example: curl -X PUT https://countries-api-1-onug.onrender.com/api/countries/2 -H "Content-Type: application/json" -d '{"country": "Japan"}'
Using POSTMAN
![image](https://github.com/kamila-wilczynska/Countries-API/assets/107350829/bbca888a-6e2c-4c35-8a2a-e267ddb2dc1a)




### Delete the country

URL: /api/countries/:id  
Method: DELETE  
URL Params:  
Required: id=[integer] — Specifies the unique identifier of the country you want to delete.  
Functionality:  
This endpoint deletes a country specified by the id parameter from the list of countries. It first searches for the country in the array using the provided ID. If the country is found, it is removed from the array, and the details of the deleted country are returned to the user.  
Success Response:  
Code: 200 OK  
Content: Returns the JSON object of the country that was successfully deleted.  
Example: curl -X DELETE https://countries-api-1-onug.onrender.com/api/countries/3
Using POSTMAN
![image](https://github.com/kamila-wilczynska/Countries-API/assets/107350829/39b56dc7-4c04-4411-b9b6-4e16a42a0775)







