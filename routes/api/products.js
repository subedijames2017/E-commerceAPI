const express = require("express");
var router = express.Router();
const multer = require('multer')
const { ManProduct,WomanProduct,ElectricaluseProduct,DailyuseProduct,HelthProduct,KidsProduct,AutoProduct,GroceryProduct,BookProduct } = require('../../models/Product')

//seting the upload critaria
var uploadFnct = function(dest){
    var storage = multer.diskStorage({ 
        //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, `./public/uploads/${dest}`);
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
//@route api/dashboard/man/:type
//Access  private
router.get('/man/:type',(req,res)=>{
    var errors = {};
    ManProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/woman/:type
//Access  private
router.get('/woman/:type',(req,res)=>{
    var errors = {};
    WomanProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/electrical/:type
//Access  private
router.get('/electrical/:type',(req,res)=>{
    var errors = {};
    ElectricaluseProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/dailyuse/:type
//Access  private
router.get('/dailyuse/:type',(req,res)=>{
    var errors = {};
    DailyuseProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})

//@route api/dashboard/kid/:type
//Access  private
router.get('/kid/:type',(req,res)=>{
    var errors = {};
    KidsProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/auto/:type
//Access  private
router.get('/auto/:type',(req,res)=>{
    var errors = {};
    AutoProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/groceries/:type
//Access  private
router.get('/groceries/:type',(req,res)=>{
    var errors = {};
    GroceryProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/book/:type
//Access  private
router.get('/book/:type',(req,res)=>{
    var errors = {};
    BookProduct.find({type:req.params.type})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{
            const titles = product.map(item=>item.title);
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        var unique = titles.filter( onlyUnique ).sort(); 
        res.json(unique)
        }
    })
    .catch(err=>console.log(err))
})



//@route api/dashboard/book/:type/:title
//Access  private
router.get('/man/:type/:title',(req,res)=>{
    var errors = {};
    ManProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/woman/:type/:title
//Access  private
router.get('/woman/:type/:title',(req,res)=>{
    var errors = {};
    WomanProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/man/:type/:title
//Access  private
router.get('/electrical/:type/:title',(req,res)=>{
    var errors = {};
    ElectricaluseProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/dailyuse/:type/:title
//Access  private
router.get('/dailyuse/:type/:title',(req,res)=>{
    var errors = {};
    DailyuseProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/helth/:type/:title
//Access  private
router.get('/helth/:type/:title',(req,res)=>{
    var errors = {};
    HelthProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/auto/:type/:title
//Access  private
router.get('/auto/:type/:title',(req,res)=>{
    var errors = {};
    AutoProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/groceries/:type/:title
//Access  private
router.get('/groceries/:type/:title',(req,res)=>{
    var errors = {};
    GroceryProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/book/:type/:title
//Access  private
router.get('/book/:type/:title',(req,res)=>{
    var errors = {};
    BookProduct.find({title:req.params.title})
    .then(product=>{
        if(!product[0]){
            errors.product = "No product yet"
            return res.status(400).json(errors)
        }else{ 
           const type = product.map(
               item=>item.type
           )
           if(type[0]===req.params.type){
            return res.json(product) 
           }else{
            return res.status(400).json({Msg:"urlerror"})  
           }
        }
    })
    .catch(err=>console.log(err))
})
//@route api/dashboard/edit/man/:id
//Access  private
router.post('/edit/man/:id',(req,res)=>{
    var errors = {};
    ManProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            ManProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/woman/:id
//Access  private
router.post('/edit/woman/:id',(req,res)=>{
    var errors = {};
    WomanProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            WomanProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/electrical/:id
//Access  private
router.post('/edit/electrical/:id',(req,res)=>{
    var errors = {};
    ElectricaluseProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            ElectricaluseProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/dailyuse/:id
//Access  private
router.post('/edit/dailyuse/:id',(req,res)=>{
    var errors = {};
    DailyuseProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            DailyuseProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/kid/:id
//Access  private
router.post('/edit/kid/:id',(req,res)=>{
    var errors = {};
    KidsProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            KidsProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/helth/:id
//Access  private
router.post('/edit/helth/:id',(req,res)=>{
    var errors = {};
    HelthProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            HelthProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/auto/:id
//Access  private
router.post('/edit/auto/:id',(req,res)=>{
    var errors = {};
    AutoProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            AutoProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/groceries/:id
//Access  private
router.post('/edit/groceries/:id',(req,res)=>{
    var errors = {};
    GroceryProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            GroceryProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/edit/book/:id
//Access  private
router.post('/edit/book/:id',(req,res)=>{
    var errors = {};
    GroceryProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            const productField = {}
            productField._id=product._id
            productField.type=product.type
            productField.title=product.title
            if(req.body.name) productField.name=req.body.name
            productField.previousprice=product.currentprice;
            if(req.body.currentprice) productField.currentprice=req.body.currentprice
            if(req.body.description) productField.description=req.body.description
            productField.image=product.image
            
            GroceryProduct.findOneAndUpdate(
                {_id:product._id},
                {$set:productField},
                {new:true}
            ).then(finalproduct=>res.json(finalproduct))
            .catch(err=>console.log(err))
        }
    })
})
//@route api/dashboard/delete/man/:id
//Access  private
router.delete('/delete/man/:id',(req,res)=>{
    var errors = {};
    ManProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            ManProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/woman/:id
//Access  private
router.delete('/delete/woman/:id',(req,res)=>{
    var errors = {};
    WomanProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            WomanProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/electrical/:id
//Access  private
router.delete('/delete/electrical/:id',(req,res)=>{
    var errors = {};
    ElectricaluseProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            ElectricaluseProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/dailyuse/:id
//Access  private
router.delete('/delete/dailyuse/:id',(req,res)=>{
    var errors = {};
    DailyuseProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            DailyuseProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/helth/:id
//Access  private
router.delete('/delete/helth/:id',(req,res)=>{
    var errors = {};
    HelthProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            HelthProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/kid/:id
//Access  private
router.delete('/delete/kid/:id',(req,res)=>{
    var errors = {};
    KidsProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            KidsProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/auto/:id
//Access  private
router.delete('/delete/auto/:id',(req,res)=>{
    var errors = {};
    AutoProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            AutoProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/groceries/:id
//Access  private
router.delete('/delete/groceries/:id',(req,res)=>{
    var errors = {};
    GroceryProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            GroceryProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
//@route api/dashboard/delete/book/:id
//Access  private
router.delete('/delete/book/:id',(req,res)=>{
    var errors = {};
    GroceryProduct.findOne({_id:req.params.id})
    .then(product=>{
        if(!product){
            errors.product = "product not found"
            res.status(400).json(errors)
        }else{
            GroceryProduct.findByIdAndDelete(req.params.id)
            .then(()=>{
                res.json({ success: true })
            })
            .catch(err=>console.log(err))
        }
    })
    .catch(err=>console.log(err)) 
})
module.exports = router;