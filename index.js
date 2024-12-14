//console.log("Hola Mundo");

// importamos
const express = require("express");

// creamos una instacia
const app = express();

// puerto
const port = 5010;+

//Midleware: es una función que se ejecuta antes o despues de una petición Htto

// verbos http https
app.get('/persona/list',(req,res) => {
    res.send("Lista de persona");
});

app.post("/persona/guardar",(req,res)=>{
    
    // req.params
    //req.body
    //req.query
    console.log("body",req.body);
    const persona = req.body;

    res.send("Persona Creada POST");

});



app.put("/persona/actualizar",(req,res)=>{
    
    res.send("Persona modificada PUT");

});

app.delete("/persona/eliminar",(req,res)=>
{
res.send("Persona eliminada DELETE");
});


app.listen(port,()=>{
    // ruta base localhost
console.log("http://localhost:5010/")
});


