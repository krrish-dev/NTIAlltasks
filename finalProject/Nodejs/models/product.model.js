const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    shortName:{
        type:String,
        trim:true,
        required:true,
    },
    longName:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    specifications:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
 
    category:[
        {
        name:{
            type:String,
            trim:true,
            required:true,
            }
    }
    ],
    mainImage:{
            type: String,
            trim: true,
            default: "uploads/product.png"
    },
    images:[
        {
            type: String,
            trim: true,
            default: "uploads/product.png"
        }
    ] ,
    inventoryQuantity:{
        type: Number,
        min: 1,
        required: true
    },
    discount:
        {
        name:{
            type: String,
            trim:true,
            maxlength:20
        },
        description:{
            type:String,
            trim:true
        },
        percent:{
            type:Number,
            min:1
        },
        active:{
            type:Boolean,
            dafault:true
        }
    }
    ,
    reviews:[
        {
            reviewerName:{
                type:String
            },
            reviewerPic:{
                type:String
            },
            message:{
                type:String
            },
            date:{
                type:String
            },
            rate:{
                type:Number
            }
        }
    ]
},{timestamps:true})
productSchema.methods.toJSON=function(){
    const product=this.toObject()
    const {__v,...others}=product
    return others
}
productSchema.virtual('productOrders',{
    ref:"Order",
    localField:"_id",
    foreignField:"productId"
})
productSchema.virtual('productCart',{
    ref:"Cart",
    localField:"_id",
    foreignField:"productId"
})

productSchema.virtual('productWishlist',{
    ref:"Wishlist",
    localField:"_id",
    foreignField:"productId"
})

const Product = mongoose.model("Product", productSchema)

module.exports=Product