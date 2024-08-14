import express, { Request, Response } from 'express';
import logger from './middleware/logger';
import { Logger } from './logs/logger';
import { generate, score, rank, GenerateOptions } from 'password.js';
import configDevEnv from '../config';

configDevEnv();

Logger.log("Express.js server with database connection, starts it on port 8080.")

const app = express();
const port = 8080;


app.use(logger);

app.use(express.json());


app.post('/generate', (req: Request, res: Response) => {
    const options: GenerateOptions = {
        length: 12,
        specials: 2,
        nums: 2,
        uppers: 2,
        lowers: 3
    };

    const generatedPassword = generate(options);
    console.log(`Generated password: ${generatedPassword}`);
    res.send({ generatedPassword });
});


app.post('/score', (req: Request, res: Response) => {
    const plainPassword = req.body.password;

    const passwordScore = score(plainPassword);
    console.log(`Password score: ${passwordScore}`);
    res.send({ passwordScore });
});


app.post('/rank', (req: Request, res: Response) => {
    const plainPassword = req.body.password;

    const passwordRank = rank(plainPassword);
    console.log(`Password rank: ${passwordRank}`);
    res.send({ passwordRank });
});


app.get('/user/:id', (req: Request, res: Response) => {
    const userId = req.params.id;


    console.log(`Fetching details for user ID: ${userId}`);
    res.send({ userId, name: "User Name", email: "user@example.com" });
});


app.put('/user/:id/password', (req: Request, res: Response) => {
    const userId = req.params.id;
    const newPassword = req.body.password;


    console.log(`Updating password for user ID: ${userId}`);
    res.send({ userId, message: "Password updated successfully" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`App is running in ${process.env.NODE_ENV} mode`);
});
