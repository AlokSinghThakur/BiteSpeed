const express = require('express');

const app = express();
app.use(express.json());

const models = require('./models')

const IDENTITY_ROUTES = require('./routes')

app.use('/',IDENTITY_ROUTES)
app.use("*", (req, res, next) => {
    res.status(404).send({ code: 404, status: 'failed', msg: "Make sure url is correct!!!" });
});

models.db_config
    .sync({
        // force: true,
        // alter: true,n
    })
    .then(() => {
        console.log(`Connected to Database!`);
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    });


app.listen(6000, () => {
    console.log('Server is running on http://localhost:6000')
})