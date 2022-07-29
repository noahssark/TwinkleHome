const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');
//model
const Comments = require('../models/comments');

const commentRouter = express.Router();

commentRouter.use(bodyParser.json())

//**************************    About all property     ************************************ */
commentRouter.route('/')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200)})
.get(cors.cors ,(req,res,next)=>{
    Comments.find(req.query)
    .populate('author')
    .then((comments)=>{    
        res.statusCode =200;
        res.setHeader('Content-Type', 'application/json');
        res.json(comments);
       
    })
    .catch(err=>console.log(err));
})

.post(cors.corsWithOptions ,authenticate.verifyUser,(req,res,next)=>{
    if(req.body != null) {
        req.body.author = req.user._id;
        req.body.home = req.body.home;
        Comments.create(req.body)
        .then((comment)=>{
            Comments.findById(comment._id)
            .populate('author')
            .then((comment) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json')
                res.json(comment);
            })
        })
    }
    else
    {
        err = 'Comment not found in request';
        err.status = 404;
        res.json(err);
    }
    
    
})

.delete(cors.corsWithOptions ,authenticate.verifyUser,(req, res, next) => {
    Comments.remove({})
    .then((resp) => {
        res.statusCode =200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    })
    .catch((err) => console.log(err));    
});

/*************************  Specific Comment   ******************************* */
commentRouter.route('/:commentId')
.options(cors.corsWithOptions, (req,res)=>{ res.sendStatus(200)})
.get(cors.cors , (req,res,next)=>{
    Comments.findById(req.params.commentId)
    .populate('author')
    .then((comment)=>{
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json(comment);
    })
})

.put(cors.corsWithOptions ,authenticate.verifyUser,(req,res,next)=>{
    Comments.findById(req.params.commentId)
    .then((comment) => {
        if (comment != null) {
            if(!comment.author.equals(req.user._id)) {
                var err= 'You are not Authorized to change this comment';
                err.status = 403;
                return res.json(err);
            }
            req.body.author = req.user._id;
            Comments.findByIdAndUpdate(req.params.commentId , {
                $set:req.body
            } , { new:true })
            .then((comment) => {
                Comments.findById(comment._id)
                .populate('author')
                .then((comment)=>{
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(comment);
                })                 
            });
        }
        
        else {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json('Comment not found or removed by admin');         
        }
    })
    .catch((err) => console.log(err));
})

.delete(cors.corsWithOptions ,authenticate.verifyUser,(req, res, next) => {
    Comments.findById(req.params.commentId)
    .then((comment) => {
        if (comment != null ) {
            if(!comment.author.equals(req.user._id)) {
                var err= 'You are not Authorized to change this comment';
                err.status = 403;
                return res.json(err);
            }
            Comments.findByIdAndRemove(req.params.commentId)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);                   
            })
            .catch((err) => console.log(err));
        }
        else {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.json('Comment not found or removed by admin');           
        }
    })
    .catch((err) => console.log(err));
});

module.exports = commentRouter;