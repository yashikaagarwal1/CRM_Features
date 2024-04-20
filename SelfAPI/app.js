//used node.js and express 
//app.js
const express = require('express');
const app = express ();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT");
  });

  app.get("/status", (request, response) => {
   const status = {
       "Status": "Running"
    };
    //response.json({data:'ok'});
 // });
    response.send(status);
 });
