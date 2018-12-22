const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create manproduct schema
const ManProductSchema = new Schema({
            name:{
                type:String,
                required:true
            },
            price:{
                type:String,
                required:true
            },
            description:{
                type:String
            },
            posted:{
                type:Date,
                default:Date.now
            },
            image:{
                type:String,
                required:true
            }
})
//create woman product schema
const WomanProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    posted:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        required:true
    }
})
//create  electricalproduct schema
const ElectricaluseProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    posted:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        required:true
    }
})
//create dailyuseproduct schema
const DailyuseProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    posted:{
        type:Date,
        default:Date.now
    },
    image:{
        type:String,
        required:true
    }
})
const ManProduct = mongoose.model("manproduct",ManProductSchema);
const WomanProduct = mongoose.model("womanproduct",WomanProductSchema)
const ElectricaluseProduct = mongoose.model("electricalproduct",ElectricaluseProductSchema)
const DailyuseProduct = mongoose.model("dailyuseproduct",DailyuseProductSchema)
module.exports = {
    ManProduct,
    WomanProduct,
    ElectricaluseProduct,
    DailyuseProduct
}