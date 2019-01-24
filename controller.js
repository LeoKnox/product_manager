const Product = require("./models");

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },

    edit: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        console.log('updateing');
        Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    destroy: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}