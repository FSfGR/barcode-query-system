const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'remotemysql.com',
    user : 'bbLE5zIBKW',
    password : 'lyhWBXBfGL',
    database : 'bbLE5zIBKW'
});

db.connect();

app.get('/data', function(req,res){
var sql = 'SELECT * FROM ProductDetails';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log("Results fetched from ProductDetails:");
    console.log(result);
    res.send(result);
});
});

app.post('/data', function(req, res){
	console.log(req.body);
    var data = {nama:req.body.nama, usia:req.body.usia};
    var sql = 'INSERT INTO ninja SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
        status: 'Data sukses diinput!',
        no: null,
		nama: req.body.nama,
		usia: req.body.usia
	});
});
});

app.listen(3306, ()=>{
    console.log('Server aktif di port 3306')
});
