import { expect } from 'chai'
import request from 'superagent'
import { SumRequest } from '../SumEndpoints'

describe('SumEndpoints', () => {
    it('should get message with sum', async () => {
        const sumRequest: SumRequest = {
            a: 11,
            b: 2
        }
        const { body } = await request
            .post(`localhost:3000/api/sum`)
            .send(sumRequest)
        expect(body).to.deep.equal({ message: 'Summing 11 + 2 equals to 13!!!' })
    })
})
