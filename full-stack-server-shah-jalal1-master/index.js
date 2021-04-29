const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.owenr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DB_USER);

app.get('/', (req, res) => {
  res.send('Hello Wforld!')
})



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const foodCollection = client.db("freshValley").collection("foods");
  const ordersCollection = client.db("freshValley").collection("orders");
  console.log("database connected");

  app.get('/foods', (req, res) => {
    foodCollection.find({})
      .toArray((err, items) => {
        res.send(items)
      })
  })
  // {email: req.query.email}

  app.get('/orders', (req, res) => {
    // console.log(req.query.email);
    ordersCollection.find({ email: req.query.email })
      .toArray((err, items) => {
        res.send(items)
      })
  })

  app.get('/food/:id', (req, res) => {
    // console.log(req.params.id);
    foodCollection.find({ _id: ObjectId(req.params.id) })
      .toArray((err, documents) => {
        res.send(documents[0]);
      })

  })

  app.post('/addOrder', (req, res) => {
    const order = req.body;
    ordersCollection.insertOne(order)
      .then(result => {
        res.send(result.insertedCount > 0)
      })
  })

  app.delete('/delete/:id', (req, res) => {
    console.log(req.params.id);
    foodCollection.deleteOne({ _id: ObjectId(req.params.id) })
      .then((result) => {
        console.log(result);
        res.send(result.deletedCount > 0)
      })
  })

  app.post('/addFood', (req, res) => {
    const newFood = req.body;
    console.log('adding new food', newFood);

    foodCollection.insertOne(newFood)
      .then(result => {
        console.log('inserted count', result.insertedCount);
        res.send(result.insertedCount > 0)

      })
  })
});




app.listen(port, () => {
})