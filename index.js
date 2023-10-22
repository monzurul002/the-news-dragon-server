const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const catagories = require('./data/categories.json');
const news = require('./data/news.json');

const cors = require('cors');
app.use(cors())
app.get('/', async (req, res) => {
    return res.send("Hello The dsfdsfdsfd  dfdf dfdfdNews Dragon.")
})


app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {

        const selectedCatagory = news.filter(n => parseInt(n.category_id) === id);
        res.send(selectedCatagory)
    }

})

app.get('/news', (req, res) => {
    res.send(news)
})


app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})



app.listen(port, () => {
    console.log("working bondhu");
}
)
