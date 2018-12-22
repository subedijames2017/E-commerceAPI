const express = require("express");
var router = express.Router();
const multer = require('multer')
const { ManProduct,WomanProduct,ElectricaluseProduct,DailyuseProduct } = require('../../models/Product')

//seting the upload critaria
var uploadFnct = function(dest){
    var storage = multer.diskStorage({ 
        //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, `./uploads/${dest}`);
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname);
        }
    });
    //achieving the file filter
    const fileFilter = (req, file, cb) => {
        // reject a file
        
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
        } else {
          cb(null, false);
        }
    };
    //uploadinig storage andcritaria
    var upload = multer({
         storage: storage,
        fileFilter:fileFilter
    }).single('image');

    return upload;
};
//@route api/dashboard/
//Access  private
router.get('/',(req,res)=>{
    res.json({
        add:"add the products",
        udate:"update the products",
        delete:"delete the products",
    })
})
//@route api/dashboard/add
//Access  private
router.get('/add',(req,res)=>{
    res.json({
        man:"enter the dailyuse product",
        woman:"Enter Woman products",
        electrical:"Enter woman product",
        dailyuse:"Enter tha dailyuse product"
        })
})
//@route api/dashboard/add/man
//Access  private
router.post('/add/man',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('man');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new ManProduct({
                        name:req.body.name,
                        price:req.body.price,
                        description:req.body.description,
                        image:req.file.path
                    })
                    console.log(newProduct)
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
    })
//@route api/dashboard/add/woman
//Access  private
router.post('/add/woman',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('woman');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new WomanProduct({
                        name:req.body.name,
                        price:req.body.price,
                        description:req.body.description,
                        image:req.file.path
                    })
                    console.log(newProduct)
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})

//@route api/dashboard/add/man
//Access  private
router.post('/add/electrical',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('electrical');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new ElectricaluseProduct({
                        name:req.body.name,
                        price:req.body.price,
                        description:req.body.description,
                        image:req.file.path
                    })
                    console.log(newProduct)
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})
//@route api/dashboard/add/man
//Access  private
router.post('/add/dailyuse',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('dailyuse');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new DailyuseProduct({
                        name:req.body.name,
                        price:req.body.price,
                        description:req.body.description,
                        image:req.file.path
                    })
                    console.log(newProduct)
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})

module.exports = router;