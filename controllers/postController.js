const postServices = require('../services/postServices');

module.exports = {
    getAllPost: function (req, res, next) {
        postServices.getAllPosts()
        .then(data => res.json({data}))
        .catch(err => res.json({message: err.message}))
    },
    createPost: function (req, res, next) {
        const data = req.body;

        postServices.createPost(data)
        .then(() => res.json({message: "success", data: []}) )
        .catch(err => res.json({message: err.message}))
    },
    updatePost: function(req, res, next) {
        const postId = req.params.id;
        const data = req.body;
        postServices.updatePost(postId, data)
        .then((data) => res.json({message: "success"}) )
        .catch(err => res.json({message: err.message}))
    },
    deletePost: function(req, res, next) {
        const postId = req.params.id;
        postServices.deletePost(postId)
        .then((data) => res.json({message: "success"}) )
        .catch(err => res.json({message: err.message}))
    }
}