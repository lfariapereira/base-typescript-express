import { NextFunction, Request, Response } from 'express'

export class HelloEndpoints {

    public getHello = (_1: Request, res: Response, _3: NextFunction) => {
        res.json('Hello!!!');
    }
}
