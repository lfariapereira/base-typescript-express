import { NextFunction, Request, Response } from 'express'
import { SumService } from '../services/SumService'

interface SumRequest {
  a: number
  b: number
}

export class SumEndpoints {

    public getSum = (req: Request, res: Response, _3: NextFunction) => {
        const { a, b }: SumRequest = req.body

        res.json(`Summing ${a} + ${b} equals to ${SumService.sum(a, b)}!!!`);
    }
}
