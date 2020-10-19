const request = require('supertest')
const app = require('../src/app')

test('Should store a user information', async () => {
    user = {
        name: "Deepak",        
        email: "deepak@anc.com",
        password: "123456@qwerty",
        age: 21
    }
    await request(app)
    .post('/users')
    .send(user)
    .expect(201)
})