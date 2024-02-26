const express = require ('express')
const router = express.Router()

//@edc login Login/Landing page
//@route GET/
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'},)
   
})

//@edc Dashboard
//@route GET/dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})
module.exports = router