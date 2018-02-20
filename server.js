const express = require('express');
const path = require('path');
const app = express();
const mkdirp = require('mkdirp');
const fs = require('fs');
const getDirName = require('path').dirname;
const subsrt = require('subsrt');
const PORT = process.env.PORT || 8080;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.all('/srt', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next()
});

app.post('/srt', function (req, res) {
    const body = req.body

	let options = { format: 'srt' };
	let content = subsrt.build(body, options);

	
	  mkdirp(getDirName('./subcomp/src/srt/generated.srt'), function (err) {
	    if (err) return err;
	    console.log('progress')
	    fs.writeFileSync('./subcomp/src/srt/generated.srt', content);
	  });
	

	fs.writeFileSync('generated.srt', content);
	res.send('success');
});

app.get('/srt', function(req, res) {
	res.sendFile(__dirname + '/generated.srt');
});

const server = app.listen(PORT, function () {
	console.log('Express server is running on port ' + PORT);
}).on('error', err => console.error(err));