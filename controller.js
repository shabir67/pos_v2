'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API berjalan",res)
};

//menampilkan data user

exports.tampildatauser =  function(req,res){
    connection.query('SELECT * FROM user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan data user berdasarkan id
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id
    connection.query('SELECt * FROM user WHERE id = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data mahasiswa
exports.tambahuser = function(req,res){
    var ei_numb = req.body.ei_numb;
    var name = req.body.name;
    var section = req.body.section;
    var cp = req.body.cp;

    connection.query('INSERT INTO user (ei_numb,name,section,cp) VALUES (?,?,?,?)',
    [ei_numb,name,section,cp],
    function (error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menambahkan data!",res)
        }
    });
};

//mengubah data berdasarkan id
exports.ubahuser =  function(req,res){
    var id = req.body.id;
    var ei_numb = req.body.ei_numb;
    var name = req.body.name;
    var section = req.body.section;
    var cp = req.body.cp;

    connection.query('UPDATE user set ei_numb=?, name=?, section=?, cp=? WHERE id=?', [ei_numb,name,section,cp,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("Berhasil mengubah data!",res)
            }
        });
};

//hapus user berdasarkan id
exports.hapususer = function(req,res){
    var id = req.body.id;
    connection.query('DELETE FROM user WHERE id=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("Berhasil menghapus data",res)
        }
    });
};