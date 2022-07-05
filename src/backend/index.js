const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
const port = 3001
const fs = require('fs');
require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: process.env.DB_TIMEZONE !== undefined ? process.env.DB_TIMEZONE : "+00:00"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const rawDataQuery = fs.readFileSync('query.json');
const query = JSON.parse(rawDataQuery);

app.get("/api/getVariables", (req, res) => {
    const sqlVariables = query.variable_name;
    db.query(sqlVariables, (err, result) => {
        if (err) console.log(err)
        else {
            const list = [];
            for (variable of result){
                list.push(variable.variable_name);}
            res.send(list);
        }
    })
})

app.get("/api/getEntities", (req, res) => {
    const sqlGetEntities = query.entity_name;
    db.query(sqlGetEntities, (err, result) => {
        if (err) console.log(err)
        else {
            const list = [];
            for(variable of result)
                list.push(variable.entity_name);
            res.send(list);
        }
    })
})

app.get("/api/getFunctions", (req, res) => {
    const sqlGetFunctions = query.function_name;
    db.query(sqlGetFunctions, (err, result) => {
        if (err) console.log(err)
        else {
            const list = [];
            for (variable of result)
                list.push(variable.function_name);
            res.send(list);
        }
    })
})

app.get("/api/getMinValue/:entity/:variable", (req, res) => {
    var sqlGetMin = query.min_value;
    sqlGetMin = sqlGetMin.replace("$variableName$", req.params.variable);
    sqlGetMin = sqlGetMin.replace("$entityName$", req.params.entity);

    db.query(sqlGetMin, (err, result) => {
        if (err) console.log(err)
        else {
            res.send([result[0].min_value]);
        }
    })
})

app.get("/api/getMaxValue/:entity/:variable", (req, res) => {
    var sqlGetMax = query.max_value;
    sqlGetMax = sqlGetMax.replace("$variableName$", req.params.variable);
    sqlGetMax = sqlGetMax.replace("$entityName$", req.params.entity);

    db.query(sqlGetMax, (err, result) => {
        if (err) console.log(err)
        else {
            res.send([result[0].max_value]);
        }
    })
})


app.get("/api/getLast2Weeks/:entity/:variable", (req,res) =>{
    var sqlGetLast2Weeks = query["date_last2weeks, value_last2weeks"];
    sqlGetLast2Weeks=  sqlGetLast2Weeks.replace("$variableName$", req.params.variable);
    sqlGetLast2Weeks =  sqlGetLast2Weeks.replace("$entityName$", req.params.entity);

    db.query(sqlGetLast2Weeks, (err, result) => {
        if (err) console.log(err)
        else {
            const list = [];
            for(variable of result)
                list.push([variable.date_last2weeks.toISOString().slice(0,10), variable.value_last2weeks]);
                
            res.send(list);
        }
    })
})

app.listen(port, () => {
    console.log("Running on port " + port)
})
