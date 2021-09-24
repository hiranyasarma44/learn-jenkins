import request from 'supertest'

import app from '../index.js'

describe('GET', function(){
     it('respond with hello world', (done) => {
        request(app).get('/').expect('hello world', done)
     })
})