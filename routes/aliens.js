const express = require("express")

const router = express.Router()
const Alien = require("../models/alien.js")

router.get("/",async(req,res) =>{
    
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }catch (err)
    {
        res.send("Error: "+err)
        res.end()
    }
    console.log("Get alien base")
})
router.get("/:id",async(req,res) =>{
    
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien)
    }catch (err)
    {
        res.send("Error: "+err)
        res.end()
    }
    console.log("Get alien base")
})

router.patch("/:id",async(req,res) =>{
    
    try{
        //const alien = await Alien.findById(req.params.id);
        const alien =await Alien.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        const a1 = await Alien.findById(req.params.id);
        res.json(a1)
    }catch (err)
    {
        res.send("Error: "+err)
        res.end()
    }
    console.log("Get alien base")
})

router.delete("/:id",async(req,res) =>{
    
    try{
        //const alien = await Alien.findById(req.params.id);
        const alien = await Alien.findByIdAndDelete(req.params.id)
        //const alien =await Alien.findByIdAndUpdate(req.params.id, req.body, { runValidators: true });
        res.json({deleted:true})
    }catch (err)
    {
        res.send("Error: "+err)
        res.end()
    }
    console.log("Get alien base")
})

router.post("/", async(req,res) =>{
    try{
        const alien = new Alien({
            name: req.body.name,
            tech:req.body.tech,
            sub:req.body.sub,
        })
        const a1= await alien.save()
        res.json(a1)
        res.end()
    }
    catch(err){
        res.send("Error: "+err)
        res.end()
    }
})

router.get("/a/:id", async(req,res) =>{
    try{
        res.send(`Hello Alien: ${req.params.id}`)
        res.end()
    }
    catch(err){
        res.send(`Error: ${error}`)
        res.end()
    }

})

module.exports = router