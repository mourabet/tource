const express = require('express')
const app = express()

var postmark = require("postmark");

app.use('/static', express.static('public'))

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/game', function (req, res) {
	var client = new postmark.Client("47b260d8-0bab-4532-93f0-8f4eb79a74fb");


	var emails = req.body.name.split(";");
	emails.forEach(function (email){
		console.log(email);

		client.sendEmail({
		  "From": "mourabet@mit.edu",
		  "To": email,
		  "Subject": "please fill out this form",
		  "TextBody": "please fill out this form http://tsource.org/static/orderform3.html"
		}, function(error, result) {
		    if(error) {
		        console.error("Unable to send via postmark: " + error.message);
		        return;
		    }
		    console.info("Sent to postmark for delivery")
		});
	});

    res.send('thank you for using T-source. You sent ' + req.body.name + ' the order form to fill out');
});




app.listen(80, () => console.log('tsource listening on port 80!'))