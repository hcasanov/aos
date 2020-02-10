const express = require('express');
const body = require('body-parser');
const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

// Set extensions
let app = express();

// Start server
app.use(body.urlencoded({ extended: true }))
app.use(body.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/login', (req, res) => {
    if (req.body.email === undefined || req.body.password === undefined)
        return res.statut('400').send('Bad Request')

    // Connect to database
    MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true, useNewUrlParser: true }, async (err, client) => {
        const db = client.db('test');
        if (err) {
            console.log(err)
            res.status(500).send('Internal Server Error')
        } else {
            var query = { email: req.body.email };
            await db.collection('users').findOne(query)
                .then(async (result) => {
                    if (result === null)
                        res.status(401).send('Unauthorized')
                    else {
                        // Compare password
                        bcrypt.compare(req.body.password, result.password, (err, auth) => {
                            if (err)
                                res.status(500).send('Internal Server Error')
                            else if (auth)
                                res.status(200).send('OK')
                            else
                                res.status(401).send('Unauthorized')
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                    return res.status('500').send('Internal Server Error')
                });

        }
        client.close();
    })
});

app.listen(8080)