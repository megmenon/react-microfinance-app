// const express = require('express');
// const app = express();
//
// const request = require('request');

// const options = {
// 	url: 'https://uat-api.synapsefi.com/v3.1/users',
// 	headers: {
// 		'Access-Control-Allow-Origin': '*',
// 		'Accept': 'application/json',
// 		'Content-Type': 'application/json',
// 		'X-SP-GATEWAY':'client_id_t0pFaeVnZTifBKz8Mw6c5SbLOxyIYsCkQD2hlHgA|client_secret_BinNe8Jx6uksY9CX02jIgdL5HAhmOETlMW4wrzGF',
// 		'X-SP-USER-IP':'192.168.1.50',
// 		'X-SP-USER':'oauth_BPLwT9oIuvkU4YHqSEjpcQ0z7xVC8lRyZaJtnDsi|96cc19a6d931c753c12f369e683cdf5e'
// 	},

// 	body: {
// 			logins: [
// 			    {
// 			      email: 'bootsbaby@gmail.com',
// 			      password: 'boots123',
// 			      read_only: false
// 			    }
//   			],
// 			phone_numbers: [
// 			    '510.936.3244'
// 			],
//   			legal_names: [
//    				 'JENNY'
//   			],
// 			extra: {
// 			    note: 'New user',
// 			    supp_id: '122efffgbeafrfvccc',
// 			    is_business: false
// 			}
// 	},
// 	json: true

// };

// request.post(options, function(err, res){
// 	console.log(res);
// 	console.log("done")
// })




// app.listen(8080, () => console.log('running'))