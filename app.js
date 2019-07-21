const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join( __dirname + '/sample-app/dist/sample-app' )));

// app.use(express.static(path.join(__dirname, "./static")));
// app.set("views", path.join(__dirname, "./views"));
// app.set("view engine", "ejs");

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});