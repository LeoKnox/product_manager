const controller = require("./controller");
const path = require('path');

module.exports = (app) => {
    app
        .get('/api/product', controller.index)
        .get('/api/product/:id', controller.edit)
        .post('/api/product/', controller.create)
        .put('/api/product/:id', controller.update)
        .delete('/api/product/:id', controller.destroy)
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
}