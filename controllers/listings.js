const Listing = require("../models/listing")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//index route shows all listed place
module.exports.index = async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
}


//new form, rander new form 
module.exports.renderNewForm = (req, res)=>{
    res.render("listing/new.ejs");
}

// shows individual places
module.exports.showListing = async (req, res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}, }).populate("owner");
    if(!listing){
        req.flash("error", "Requested listing does not exist!");
        res.redirect("/listings"); 
    }else{
        // console.log(listing);
        res.render("listing/show.ejs", { listing });
    }
}

// create listing in db
module.exports.createListing = async (req, res, next)=>{
    let respons = await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1,
    })
    .send();

    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url,'...',filename);
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = respons.body.features[0].geometry;

    let savedListing = await newListing.save();
    // console.log(savedListing);

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}


//Edit listing, rander form for edit
module.exports.randerEditForm = async (req, res)=>{
    let {id} = req.params;
    let editListing = await Listing.findById(id);
    if(!editListing){
        req.flash("error", "Requested listing for edit does not exist!");
        res.redirect("/listings"); 
    }else{
        let originalImageUrl = editListing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
        res.render("listing/edit.ejs", {editListing, originalImageUrl});
    }
}

module.exports.updateListing = async (req, res)=>{
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}