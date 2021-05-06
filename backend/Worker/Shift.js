
var express = require('express');
var app = express();
var con = require('../config/database.js');
app.use(express.json());


app.get("/shiftInsert", (req, res) => {

    con.query("SELECT order_no, company FROM cust_order where  MONTH(date) >= MONTH(now())-2", function(err, data, fields) {
        if (err) throw err;
        res.send(data);
    });

});

app.post('/shiftInsert', (req, res) => {

    const params = req.body.form;
    console.log(params);
	params["warped_yarn_received"] = req.body.received;
    con.query('INSERT INTO shift SET ?', params, (err, rows) => {
        if (!err) {
            res.send(`added.`)
        } else {
            console.log(err)
        }

        console.log('The data from shift table is: \n', rows)

    })
});


module.exports = app;