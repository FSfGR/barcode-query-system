const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'bbLE5zIBKW',
  password: 'lyhWBXBfGL',
  database: 'bbLE5zIBKW'
});

db.connect();

app.get('/details', function(req,res){
  let sql = 'SELECT * FROM ProductDetails';
  db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log("Results fetched from ProductDetails:");
    console.log(result);
    res.send(result);
  });
});

app.post('/details', function(req, res){
	console.log(req.body);
  let data = {
    Barcode: req.body.Barcode,
    Name: req.body.Name,
    RetailPrice: req.body.RetailPrice,
    WholesalePrice: req.body.WholesalePrice,
    Amount: req.body.Amount,
    Status: req.body.Status,
    Description: req.body.Description,
    Remarks: req.body.Remarks,
    ImageLink: req.body.ImageLink
  };
  let sql = 'INSERT INTO ProductDetails SET ?';
  db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
      requestStatus: 'Successful',
      Barcode: req.body.Barcode,
      Name: req.body.Name,
      RetailPrice: req.body.RetailPrice,
      WholesalePrice: req.body.WholesalePrice,
      Amount: req.body.Amount,
      Status: req.body.Status,
      Description: req.body.Description,
      Remarks: req.body.Remarks,
      ImageLink: req.body.ImageLink
  	});
  });
});

app.listen(3306, () => {
  console.log('Server listens to port 3306');
});
