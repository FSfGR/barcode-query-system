'use strict';
var express = require('express');
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'barcode_query_system'
});

connection.connect();

var  sql = 'SELECT * FROM item_info';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

// var  addSql = 'INSERT INTO item_info(item_id,item_name,item_barcode,item_price,last_modification) VALUES(0,?,?,?,?)';
// var  addSqlParams = ['xpf', 'giu','23', '1997/09/10'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//     if(err){
//         console.log('[INSERT ERROR] - ',err.message);
//         return;
//     }
// });

connection.end();