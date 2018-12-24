const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create manproduct schema
const ManProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
            type:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            previousprice:{
                type:String,
            },
            currentprice:{
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
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const ElectricalProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
//create Kidsprodectschema schema
const KidsProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const AutoProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const HelthProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const GroceryProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const BookProductSchema = new Schema({
    //Type and title will be provided in option.Title will depen on type
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    previousprice:{
        type:String
    },
    currentprice:{
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
const ElectricaluseProduct = mongoose.model("electricalproduct",ElectricalProductSchema)
const DailyuseProduct = mongoose.model("dailyuseproduct",DailyuseProductSchema)
const HelthProduct = mongoose.model("helthproduct",HelthProductSchema);
const KidsProduct = mongoose.model("kidsproduct",KidsProductSchema);
const AutoProduct = mongoose.model("autoproduct",AutoProductSchema)
const GroceryProduct = mongoose.model("groceryproduct",GroceryProductSchema )
const BookProduct = mongoose.model("bookproduct",BookProductSchema)
module.exports = {
    ManProduct,
    WomanProduct,
    ElectricaluseProduct,
    DailyuseProduct,
    HelthProduct,
    KidsProduct,
    AutoProduct,
    GroceryProduct,
    BookProduct
}