const  express = require("express");
const { signup, signin, requireSignin } = require("../controller/auth");
const router = express.Router();

// signin and signup
router.post('/signup', signup);
router.post('/signin', signin);

// profile 
/* router.post('/profile', requireSignin, (req, res)=>{
    res.status(200).json({
        user: "profile"
    })
})
 */
module.exports = router;
