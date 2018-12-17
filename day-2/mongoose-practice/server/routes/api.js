const express = require('express')
const router = express.Router()


const Person = require('../models/Person')


router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person', function(req , res){
    let p = new Person(req.body)
    p.save()
    res.end()
})

router.put('/person/:id',function(req, res){
    let id = req.params.id
    Person.findById(id , function(err, person){
        person.age = 80
        person.save()
    })
    res.end()

})

router.delete('/apocalypse', function(req ,res){
    Person.remove(function (err) {
        console.log(err) 
    })
    res.end()
})

module.exports = router