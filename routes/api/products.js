const express = require("express");
var router = express.Router();
const multer = require('multer')
const { ManProduct,WomanProduct,ElectricaluseProduct,DailyuseProduct,HelthProduct,KidsProduct,AutoProduct,GroceryProduct,BookProduct } = require('../../models/Product')

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
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        previousprice:req.body.previousprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>res.status(400).json(err))
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
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})

//@route api/dashboard/add/electrical
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
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})
//@route api/dashboard/add/dailyuse
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
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
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
//@route api/dashboard/add/helth
//Access  private
router.post('/add/helth',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('helth');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new HelthProduct({
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
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
//@route api/dashboard/add/kid
//Access  private
router.post('/add/kid',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('kids');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new KidsProduct({
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
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
//@route api/dashboard/add/auto
//Access  private
router.post('/add/auto',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('auto');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new AutoProduct({
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})
//@route api/dashboard/add/groceries
//Access  private
router.post('/add/groceries',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('groceries');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new GroceryProduct({
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})
//@route api/dashboard/add/book
//Access  private
router.post('/add/book',(req,res)=>{
    var errors = {};
    const currUpload = uploadFnct('books');
    currUpload(req,res,(err)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(req.file == undefined){
                errors.file="File undefined"
                return res.status(400).json(errors)
            }else{
                    const newProduct = new BookProduct({
                        type:req.body.type,
                        title:req.body.title,
                        name:req.body.name,
                        currentprice:req.body.currentprice,
                        description:req.body.description,
                        image:req.file.path
                    })
                    newProduct
                    .save()
                    .then(product=>res.json(product))
                    .catch(err=>log(err))   
            }
        }
    })
})
module.exports = router;