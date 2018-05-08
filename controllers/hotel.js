const Hotel = require('../models/hotel')
var fs = require('fs')


module.exports.getAll = (req, res) => {
    Hotel.find({}).then(data => {
        res.status(200).send(data)
    }).catch(e => res.status(400).send(e))
}

module.exports.get = (req, res) => {
    Hotel.find({
        id: req.params.id
    }).then(data => {
        res.status(200).send(data)
    }).catch(e => res.status(400).send(e))
}

module.exports.search = (req, res) => {
    let query = [];
    if (req.query.stars) var stars = req.query.stars.split(',').map((x) => parseInt(x, 10));
    else var stars = null

    if (req.query.name) query.push({ name: new RegExp(req.query.name, 'i') })
    else query.push({})

    Hotel.find(query[0])
        .and([{ $or: [{ stars: { $in: stars } }] }])
        .then(data => {
            res.status(200).send(data)
        }).catch(e => res.status(400).send(e))
}

module.exports.image = (req, res) => {
    var path = `hotels/${req.params.img}`;
    fs.exists(path, image => {
        if (!image) {
            path = 'assets/no-img.jpg';
        }
        res.sendFile(path, { root: './' })
    })

}