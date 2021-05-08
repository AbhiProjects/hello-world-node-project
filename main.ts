import express from 'express';
import { NextFunction, Request, Response } from 'express';

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        message: 'Hello World'
    });
});

app.get('*', (request: Request, response: Response, next: NextFunction) => {
    response.status(404).json({
        message: 'Page does not exist'
    });
});

app.listen(PORT, () => {
    console.log(`Node server listening on http://localhost:${PORT}`);
});