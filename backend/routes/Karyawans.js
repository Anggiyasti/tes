var express = require('express');
var router = express.Router();
var Karyawan=require('../models/Karyawan');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

        Karyawan.getKaryawanById(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{

     Karyawan.getAllKaryawan(function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
     
        });
    }
});

router.post('/',function(req,res,next){

        Karyawan.addKaryawan(req.body,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);
            }
        });
});

router.post('/delete/:id',function(req,res,next){

        Karyawan.deleteKaryawan(req.params.id,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});

router.post('/edit/:id',function(req,res,next){
    Karyawan.updateKaryawan(req.params.id,req.body,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(req.body);
        }
    });
});
module.exports=router;