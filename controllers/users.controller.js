const { request, response } = require('express')

const usersGet = ( req = request, res = response ) => {
    const query = req.query

    res.json({
        data: "get API - controller",
        query
    })
}
const usersPut = ( req, res = response ) => {
    const id = req.params.id
    const user = req.body

    res.json({
        data: "put API - controller",
        user,
        id
    })
}
const usersPost = ( req, res = response ) => {
    const { name, year } = req.body
    res.json({
        data: "post API - controller",
        body: { name, year }
    })
}
const usersDelete = ( req, res = response ) => {
    res.json({
        data: "delete API - controller"
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}