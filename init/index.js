const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_image = "mongodb://127.0.0.1:27017/wonderlust";

main().then((res)=>{
    console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_image);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: '68b94d1fd5defc0ac66f815a'}));
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
}

initDB();