const express = require('express');
const app = express();

const request = require('request');

const options = {
	url: 'https://uat-api.synapsefi.com/v3.1/users/5c10ae89bb650f0068118902',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'X-SP-GATEWAY':'client_id_t0pFaeVnZTifBKz8Mw6c5SbLOxyIYsCkQD2hlHgA|client_secret_BinNe8Jx6uksY9CX02jIgdL5HAhmOETlMW4wrzGF',
		'X-SP-USER-IP':'192.168.1.50',
		'X-SP-USER':'oauth_T7aeUnDoEsQjhVgL86r3vXfKRtI9k2ydClJ5xpcO|96cc19a6d931c753c12f369e683cdf5e'
	},

	body: {
		documents: [{
      	email:"christmas@gmail.com",
        phone_number:"901.111.1111",
        ip:"::1",
        name:"Christmas Tree",
        alias:"Test",
        entity_type:"M",
        entity_scope:"Arts & Entertainment",
        day:2,
        month:5,
        year:1989,
        address_street:"39878 Parada St",
        address_city:"Newark",
        address_subdivision:"CA",
        address_postal_code:"94560",
        address_country_code:"US",
        virtual_docs:[{
            document_value:"2222",
            document_type:"SSN"
        }]
        }]
	},
	json: true

};

request.patch(options, function(err, res){
	console.log(res);
	console.log("done")
})




app.listen(8080, () => console.log('running'))