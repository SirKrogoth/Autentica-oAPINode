import { AnyARecord } from 'dns';
import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

//get /users
//get /users/:uuid
//post /users
//put /users/:uuid
//delete /users/:uuid 

const userRoute = Router();

userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{
        userName: 'João Menezes'
    }];

    res.status(StatusCodes.OK).json(users);
});

userRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({
        uuid
    })
});

userRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    res.status(StatusCodes.CREATED).send(user);
});

userRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({ uuid });
});

userRoute.delete('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});


export default userRoute;