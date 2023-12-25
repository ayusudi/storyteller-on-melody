const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => res.render("home"))
app.post("/", (req, res) => res.render("home"))

app.listen(port, () => {
  console.log("Hello world at http://localhost:" + port);
})