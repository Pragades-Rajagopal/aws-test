const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/getall', async (req, res) => {
    try {
        const info = await axios.get('https://www.cubyt.io/data/categories/');
        res.send(JSON.stringify(info.data))
    } catch (err) {
        // res.send({'error':'something went wrong'})
        console.error(err.message)
    }
}); 

app.get('/get/:cat', async (req, res) => {
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

