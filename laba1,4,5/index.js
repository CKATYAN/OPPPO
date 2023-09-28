import express from 'express'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile('sources/html/index.html', {root: __dirname});
});

app.listen(port, () => { 
    console.log(`Now listening on port ${port}`);
}); 