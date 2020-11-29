import express from 'express'
import bodyParser from 'body-parser'
import { HelloEndpoints } from './endpoints/HelloEndpoints';
import { SumEndpoints } from './endpoints/SumEndpoints'

const app = express();
const portNumber = 3000;

const helloEndpoints = new HelloEndpoints()
const sumEndpoints = new SumEndpoints()

app.use(bodyParser.json())

app.get("/api/hello", helloEndpoints.getHello)
app.post("/api/sum", sumEndpoints.getSum)

app.listen(portNumber, () => {
    console.log(`Express web server started: http://localhost:${portNumber}`);
});
