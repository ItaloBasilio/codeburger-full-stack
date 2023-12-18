import { Router } from 'express'
import { v4 } from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
    const user = await User.create({
        id: v4(),
        name: 'Italo',
        email: 'italobasilio2@email.com',
        password_hash: '23asdf234',
        admin: true,
    })
    return response.json(user)
})

export default routes