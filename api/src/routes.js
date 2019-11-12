import {Router} from 'express'

const routes = new Router();

routes.get('/test' , (req , res) => {
    res.json({test : true})
})

export default routes;