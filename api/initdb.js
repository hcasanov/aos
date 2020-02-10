const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true, useNewUrlParser: true }, async function (err, client) {
    if (err) {
        console.log(err)
    } else {
        const db = client.db('test');
        
        var email = "test@test.fr"
        var password = "mypassword"
        var hashPassword = await bcrypt.hash(password, 10)

        await db.collection('users').insertOne({ 'email': email, 'password': hashPassword })
    }
    client.close()
    process.exit()
})