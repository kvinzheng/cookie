const app = require("express")();
app.get("/", (req, res) => {
  res.setHeader("set-cookie", ["setfromserver=1"])
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/path1",(req, res) => {
    res.send(`path1: I have been sent these cookies: s${req.headers.cookie}`)
});


app.get("/path2",(req, res )=> {
    res.send(`path2: I have been sent these cookies: s${req.headers.cookie}`)
});

app.listen(8080, () => console.log("listening on port 8080"));
