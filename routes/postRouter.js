const Router = require('express').Router
const postController = require('../controllers/postController')
const auth = require('../middlewares/authJwt')
const postValidate = require('../middlewares/postValidate');

const routers = Router()
routers.use(auth);

routers.get('/', postController.getAllPost)
routers.post('/', postValidate, postController.createPost)
routers.put('/:id', postValidate, postController.updatePost)
routers.delete('/:id', postController.deletePost)

module.exports = routers;