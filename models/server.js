const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        this.productsPath = '/api/products'

        // Middlewares
        this.middlewares()

        // App routes
        this.routes()
    }

    middlewares() {
        // this.app.options('*', cors())
        this.app.use( cors() )

        /**
         * Read and parse body
         * Con este meddleware se hace el parseo a json de todos los
         * datos enviados con los metodos put, post, delete
         */
        this.app.use( express.json() )

        // Public directory
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users.routes'))
        this.app.use(this.productsPath, require('../routes/products.routes'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Listening at http://localhost:'+ this.port )
        })
    }
}

module.exports = Server