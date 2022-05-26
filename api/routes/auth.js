const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");

//Register
router.post('/register',async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            nameAndLastName: req.body.nameAndLastName,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = User.findOne({nameAndLastName: req.body.nameAndLastName});
        !user && res.status(400).json("Hatalı bilgi girdiniz!");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated&& res.status(400).json("Hatalı bilgi girdiniz!");

        const {password, ...other} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;