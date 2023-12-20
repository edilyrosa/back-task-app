import express from "express";

const app = express() //The server


app.get('/', (req, res) => {
    res.send('¡ESTOY EN EL HOMEeeeeeeeeeeeeeeeee!! 🚀');
  });

app.listen(3000) //will listen on p0rt 3000
console.log('Server on port 3000');
