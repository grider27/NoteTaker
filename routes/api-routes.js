var notesData = require('../db/db.json');
const fs = require ('fs');

module.exports = function(app){

    app.get("/api/notes", function (req, res) {
        return res.json(JSON.parse(fs.readFileSync("./db/db.json")));
    });

    app.post('/api/tables', function(req, res){
        let addNote = req.body;
        console.log("new note:", addNote);
        notesData.push(addNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8", (err, data) => {
            if (err) throw err;
            console.log("New note successfully added!");
        });
        res.json(true); 

	});

}