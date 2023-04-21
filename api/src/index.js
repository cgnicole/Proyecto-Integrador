const http = require("http");
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // rutas
    // /rickandmorty/characters
    // /rickandmorty/character/:id.

    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];

    if (param1 === "rickandmorty" && param2 === "characters") {
      // /rickandmorty/characters
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(characters));
    }
    if (param1 === "rickandmorty" && param2 === "character") {
      // /rickandmorty/character/:id.
    }

    console.log(url);
    res.end("hola a todos");
  })
  .listen(3001, "localhost", () => {
    console.log("in port http://localhost:3001");
  });
