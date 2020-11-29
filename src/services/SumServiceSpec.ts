import { expect } from 'chai'
import { SumService } from './SumService'

describe('SumService', () => {
    it('should sum correctly 2 plus 2', () => {
        expect(SumService.sum(2, 2)).to.equal(4)
    })
})
