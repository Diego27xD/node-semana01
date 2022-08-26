import express from "express";

//npm i nodemon -D --> Se utiliza para que el servidor se actualice
const app = express();
//app.use sirve para que nuestro servidor pueda entender lo que el usuario le envies
//npm run dev --> se utiliza porque node no cuenta con el comando dev por defecto, a difenrencia de start, que se puede ejecutar como npm start
app.use(express.json());
const people = [];

app.get("/", (request, response) => {
//response es la respuesta del servidor (JSON)
//request es la peticion del cliente
    return response.json({
        ok:true,
        data: people
    });

});
app.post("/create", function(req,res){
    //body almacena los que el usuario envia
    // destructuracion const { name, last_name} = req.body;
    people.push(res.body);
    //El estatus 201 se envia si fue creado con exito
    //500 es para error (el servidor no respondes)
    //responder que no hay servicio 401 o 404 (no encuentra)
    return res.status(201).json({
        ok:true,
        data:"Persona creada",

    });
});
//COMPLETAR EL PUT Y ELIMINAR
app.listen(6004, () => 
    console.log(`El servidor inicio en http://localhost:6004`)
);