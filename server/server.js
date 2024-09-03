const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use( morgan("tiny"));
app.use(express.json());
app.listen(5000, ()=> {
                      console.log("server run at http://localhost:5000")
                   } )