const express = require('express');
const axios = require('axios');

const PORT = 8080;
const app = express();

app.get('/categories', async (req, res) => {
    try {
        const info = await axios.get('https://www.cubyt.io/data/categories/');
        res.send(JSON.stringify(info.data))
    } catch (err) {
        // res.send({'error':'something went wrong'})
        console.error(err.message)
    }
}); 

app.get('/categories/:cat', async (req, res) => {
    try {
        const category  = req.params.cat;

        const info = await axios.get(`https://www.cubyt.io/data/categories/${category}`);
        res.send(JSON.stringify(info.data))
    } catch (err) {
        // res.send({'error':'something went wrong'})
        console.error(err.message)
    }
}); 


app.listen(PORT, () => {
    console.log('app is running in port :: ' + PORT);
})

