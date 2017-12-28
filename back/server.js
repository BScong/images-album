const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

var url = "http://localhost:3000"
var img_path = "/img"

var pictures = []
fs.readdir(path.join(__dirname, 'pictures'), function(err, items){
	for(var i=0;i<items.length;i++){
		pictures.push({'url':url+img_path+'/'+items[i],
						'alt':items[i]
						})
	}
	app.get('/', (req, res) => res.send(pictures))
});

app.use(img_path, express.static(path.join(__dirname, 'pictures')))

app.listen(3000, () => console.log('App listening on port 3000'))