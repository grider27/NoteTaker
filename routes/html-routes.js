var path = require('path');

module.exports = function (app) {
	// /notes should return the notes.html file
	app.get('/notes', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	// route default to return the index.html file.
	//app.use(function(req, res){
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});
}
