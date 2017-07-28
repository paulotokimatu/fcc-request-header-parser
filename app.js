var express = require("express");
var app = express();

app.get("/", (req, res) => {
    console.log(process.env);
    var result = {
        ipaddress: req.headers["x-forwarded-for"],
        language: req.headers["accept-language"].split(",")[0],
        software: req.headers["user-agent"]
    }
    res.send(result);
});

app.use(function (req, res, next) {
  res.status(404).send("Page not found!")
})

app.listen((process.env.PORT || 3000), () => {
    console.log("Server up");
});