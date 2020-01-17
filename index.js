// import express from "express";
// import consign from "consign";

// const app = express();

// consign()
//     .include("libs/config.js")
//     .then("db.js")
//     .then("libs/middlewares.js")
//     .then("routes")
//     .then("libs/boot.js")
//     .into(app);



import express from "express";

const PORT = 3000;

const app = express();

app.set("json spaces", 4);
    
app.get("/", (req, res) => {res.json(
    {status: "NTask API"});
console.log(`A pasta / foi acessada!!`);
    
});

app.get("/tasks", (req, res) => {
 res.json({
     tasks: [
        {title: "Fazer compras"},
        {title: "Consertar o pc"},
     ]
    
    }) ;

    console.log(`A pasta tasks foi acessada!!`);
});

app.listen(PORT, () => {
    console.log(`NTask API - porta ${PORT}`);
});