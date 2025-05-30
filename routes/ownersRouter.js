const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.get("/", function(req,res){

        res.send("hey");
});


if(process.env.NODE_ENV === "development"){
        router.post("/create", async function(req,res){
                let owners = await ownerModel.find();

                if(owners.length> 0 ){
                        return res.status(503).send("you dont have permission to create");
                }

                let {fullname, email, password} = req.body;
                let CreatedOwner = await ownerModel.create({
                        fullname,
                        email,
                        password    
                });

                res.status(201).send(CreatedOwner);
                res.send("we can create a new owner")
                console.log("REQ BODY:", req.body);

        })
}
module.exports = router;
