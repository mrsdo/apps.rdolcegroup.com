/*
 * userRouter.js | M.Dolce, React Native Portfolio, marti.dolce@29signals.org, 202212
 * Function ---
 * This file is uses the Express Router for Campsites "/users/"
 * ------------
 */

const express = require('express');
const Campsite = require('../models/user');

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res, next) => {
    Campsite.find()
      .then(users => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
      })
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Campsite.create(req.body)
      .then(user => {
        console.log('Campsite Created ', user);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      })
      .catch(err => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
  })
  .delete((req, res, next) => {
    Campsite.deleteMany()
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
  });

userRouter.route('/:userId')
  .get((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      })
      .catch(err => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /users/${req.params.userId}`);
  })
  .put((req, res, next) => {
    Campsite.findByIdAndUpdate(req.params.userId, {
      $set: req.body
    }, { new: true })
      .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      })
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Campsite.findByIdAndDelete(req.params.userId)
      .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      })
      .catch(err => next(err));
  });

//Handling roles
userRouter.route('/:userId/roles')
  .get((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user.roles);
        } else {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user) {
          user.roles.push(req.body);
          user.save()
            .then(user => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user);
            })
            .catch(err => next(err));
        } else {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /users/${req.params.userId}/roles`);
  })
  .delete((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user) {
          for (let i = (user.roles.length-1); i >= 0; i--) {
            user.roles.id(user.roles[i]._id).remove();
          }
          user.save()
            .then(user => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user);
            })
            .catch(err => next(err));
        } else {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  });

userRouter.route('/:userId/roles/:roleId')
  .get((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user && user.roles.id(req.params.roleId)) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user.roles.id(req.params.roleId));
        } else if (!user) {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.roleId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /users/${req.params.userId}/roles/${req.params.roleId}`);
  })
  .put((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user && user.roles.id(req.params.roleId)) {
          if (req.body.rating) {
            user.roles.id(req.params.roleId).rating = req.body.rating;
          }
          if (req.body.text) {
            user.roles.id(req.params.roleId).text = req.body.text;
          }
          user.save()
            .then(user => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user);
            })
            .catch(err => next(err));
        } else if (!user) {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.roleId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Campsite.findById(req.params.userId)
      .then(user => {
        if (user && user.roles.id(req.params.roleId)) {
          user.roles.id(req.params.roleId).remove();
          user.save()
            .then(user => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(user);
            })
            .catch(err => next(err));
        } else if (!user) {
          err = new Error(`Campsite ${req.params.userId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.roleId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  });

module.exports = userRouter;