import { expect } from 'chai'
import request from 'superagent'

describe('helloEndpoints', () => {
    it('should get Hello', async () => {
        const { body } = await request.get(`localhost:3000/api/hello`)
        expect(body).to.deep.equal({ greeting: 'Hello!!!' })
    })
})
