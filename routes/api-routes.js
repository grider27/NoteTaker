const fs = require ('fs');
var uniqid = require('uniqid'); // unique id generator
var notesData = require('../db/db.json');

module.exports = function(app){

    app.get('/api/notes', function (req, res) {
        return res.json(JSON.parse(fs.readFileSync("./db/db.json")));
    });

    // add new note
    app.post('/api/notes', function(req, res){
        let addNote = req.body;
        console.log("new note:", addNote);
        notesData.push(addNote);
        addNote.id = uniqid();

        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
            if (err) throw err;
        });
        res.json(true); 
	});

    //delete notes
    app.delete("/api/notes/:id", function (req, res) {
    let id = req.params.id;
    notesData.splice(notesData.indexOf(id), 1);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
        if (err) throw err;
    });
    res.json(true); 
    });

}