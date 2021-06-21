const { request } = require('express')
const express=require ('express')
const router = express.Router()
const account = require('../models/account')

router.get('/', async(req,res) =>{
    try{
        const accounts =  await account.find()
        res.json(accounts)
    }
    catch(err)
    {
    res.send('error' + err)
   
    }
} )


router.post("/", async function (req, res, next) {
    const newAc = await account.create(req.body);
    res.send(newAc);
  });

  router.put("/:id", async function (req, res, next) {
  const { id } = req.params;
  const payload = req.body;

  await accounts.findByIdAndUpdate(id, payload);

  const updatedaccount = await account.findById(id);

  res.send(updatedaccount);
});


router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;

  await account.findByIdAndDelete(id);

  res.send();
});




  

/*
router.post('/',async(req,res) =>{
    const accounts =new accounts({
        name:req.body.name,
        accountNumber:req.body.accountNumber
    })*/

    //   try{
    //       const a1 = await accounts.save()
    //       res.json(a1)
    //   }catch(err){
    //       res.send('error')
    //   }






module.exports = router

