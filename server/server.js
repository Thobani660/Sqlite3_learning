const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(cors());
app.use( morgan("tiny"));
app.use(express.json());


app.get( '/', (req , res) => {
    const book = {id: 2023, 
                  Tittle:"Philasande",
                  Publisher:"SamkeloZondi",
                  
                }
    res.json(book)
    res.send('Philasto ')
})
































app.listen(5000, ()=> {
                      console.log("server run at http://localhost:5000")
                   } )


