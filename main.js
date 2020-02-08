//importing packages
const express = require('express');
const cors = require('cors');

//initailize express
const app = express();

//initializing port 
const port = process.env.PORT || 3000;

//initializing cross-origin-resource-sharing and JSON parsing via express (middlewares)
app.use(cors()); 
app.use(express.json()); 

//stating the static resources folder
app.use(express.static('frontend'));

//initializing static page response.
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/frontend/index.html');
})
//initilizing server to listen on the port
app.listen(port, () => {
    console.log(`server is running on port - ${port}`);
})


