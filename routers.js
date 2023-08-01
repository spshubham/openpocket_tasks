const express = require("express")
const router = express.Router();


router.get("/",function(req,res)
{
    console.log("This is get");
    let result = "Hello World";
    res.status(200).send(result);
})

router.post("/",function(req,res)
{
    console.log("This is post");
    let result = "Hello World";
    res.status(200).send(result);
})

router.put("/",function(req,res)
{
    console.log("This is put");
    let result = "Hello World";
    res.status(200).send(result);
})

router.delete("/",function(req,res)
{
    console.log("This is delete");
    let result = "Hello World";
    res.status(200).send(result);
})

module.exports = router;