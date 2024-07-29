const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/an-open-door-leading-to-a-living-room-SVAYr9s1jcY",
        set: (v) =>
        v === ""
        ? "https://unsplash.com/photos/an-open-door-leading-to-a-living-room-SVAYr9s1jcY" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports  = Listing;