import { NextFunction, Request, Response } from 'express'
import { SumService } from '../services/SumService'

export interface SumRequest {
  a: number
  b: number
}

export class SumEndpoints {

    public getSum = (req: Request, res: Response, _3: NextFunction): void => {
        const { a, b }: SumRequest = req.body

        res.json({message: `Summing ${a} + ${b} equals to ${SumService.sum(a, b)}!!!`});
    }
}
