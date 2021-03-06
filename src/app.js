const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")
app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/static`))
app.use(routes)
module.exports = app
