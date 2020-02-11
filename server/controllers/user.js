'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp (req, res) {
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(200).send({ token: service.createToken(user) })
  })
}

function signIn (req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })
    console.log(user);
    if(user.password == req.body.password){
        req.user = user;
        res.status(200).send({
            message: 'te has logueado correctamente',
            token: service.createToken(user)
        });
    } else {
        res.status(404).send({message: 'contraseña incorrecta'});
    }
  });
}


module.exports = {
  signUp,
  signIn
}