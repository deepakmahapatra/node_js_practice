const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')

test("Should create a task", async () => {
    task = {
        "description": "This is a test task"
    }
    await request(app).post('/tasks').send(task).expect(200)
})