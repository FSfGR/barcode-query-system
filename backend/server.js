const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Connect MySQL DB on cloud/localhost
const db = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'bbLE5zIBKW',
  password: 'lyhWBXBfGL',
  database: 'bbLE5zIBKW'
});
db.connect();

// GET request for querying DB by barcode
app.get('/details/:barcode/', function(req,res){
  // Form SQL query and execute it
  let sql = "SELECT * FROM ProductDetails WHERE Barcode = ?";
  let barcode = req.params.barcode;
  db.query(sql, barcode, (err, result)=>{
    if(err) throw err;
    console.log("Results fetched from ProductDetails:");
    console.log(result);
    res.send(result);
  });
});

// POST request for inserting new product detail with passed in data in req body
app.post('/details/', function(req, res){
	console.log(req.body);
  // Format data from request body
  let data = {
    Barcode: req.body.barcode,
    Name: req.body.name,
    RetailPrice: req.body.retailPrice,
    WholesalePrice: req.body.wholesalePrice,
    Amount: req.body.amount,
    Status: req.body.status,
    Description: req.body.description,
    Remarks: req.body.remarks,
    ImageLink: req.body.imageLink
  };
  // Form SQL query and execute it
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
