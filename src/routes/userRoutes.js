const express = require("express");
const router = express.Router();
const getHome=require("../middlewares/home")
const { getContact, postContact } = require("../middlewares/Contact");
const { getPricing, postPricing } = require("../middlewares/Pricing");
const getAllDetails = require("../middlewares/secret");
const getAbout = require("../middlewares/About");
const getServices = require("../middlewares/Services");

//APIs

//getHome code is present in src/middlewares/home.js
router.get("/", getHome);


//getContact code is present in src/middlewares/Contact.js
router.get("/Contact", getContact);


//postContact code is present in src/middlewares/Contact.js
router.post("/Contact", postContact);


//getPricing code is present in src/middlewares/Pricing.js
router.get("/Pricing", getPricing);


//postPricing code is present in src/middlewares/Pricing.js
router.post("/Pricing", postPricing);


//getAbout code is present in src/middlewares/About.js
router.get("/About", getAbout);


//getServices code is present in src/middlewares/Services.js
router.get("/Services", getServices);


//getAllDetails code is present in src/middlewares/secret.js
router.get("/:custom",getAllDetails);



module.exports = router;
