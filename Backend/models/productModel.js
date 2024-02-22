const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category"
        type: String,
        required: true
    },
    brand: {
        type: String,
        // enum: ["Apple", "Samsung", "Lenovo"]
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        //select: false, // this line is for hiding this quantity attribute for the user
    },
    sold: {
        type: Number,
        default: 0
    },
    images: {
        type: Array
    },
    color: {
        type: String,
        // enum: ["Black", "Brown", "Red"]
        required: true,
    },
    ratings: [
        {
            star: Number,
            postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        },
    ]
},
    { timestamps: true }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);