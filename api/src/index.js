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
      // /rickandmorty/character/:id. // sola vamos a poder buscar del 1 al 40
      const character = characters.find((ch) => {
        return ch.id === Number(id);
      });
      if (character)
        return res
          .writeHead(200, { "content-type": "application/json" })
          .end(JSON.stringify(character));
    }
    return res
      .writeHead(404, { "content-type": "text/plain" })
      .end("not found");
  })
  .listen(3001, "localhost", () => {
    console.log("in port http://localhost:3001");
  });
