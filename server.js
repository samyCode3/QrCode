const express = require('express')
const app = express()
const ejs = require("ejs")
const routes = require("./route/pages")


const path = require("path")
const Port =  process.env.PORT || 5500

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.set("views", "./views");
app.use('*/css',express.static('public/css'));
app.use("/", routes);

app.listen(Port)