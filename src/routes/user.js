const  express = require("express");
const router = express.Router();
const User = require('../models/user');

router.post('/signin', (req, res, next)=>{
    

});

router.post('/signup', (req, res, next)=>{

    User.findOne({ email: req.body.email})
    .exec((error, user)=>{
        if(user) return res.status(400).json({
            message: 'User already registered.'
        });
        
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
        });

        _user.save((error, data)=>{
            if(error){
                return res.status(400).json({
                    message: 'Something wrong happend !'
                })
            }
            if(data){
                return res.status(201).json({
                    message: "User created successfully !"
                })
            }
        })
    })
});

module.exports = router;
