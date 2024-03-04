const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config()
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSSWORD)

//middleware
app.use(express.json())
app.use(cors())

//user: Christine
//password: B5b9Kq261HiKRyof
//ipaddress: 196.202.207.49/32
//ip name: My IP Address



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSSWORD}@job-portal-server.pe3pwyu.mongodb.net/?retryWrites=true&w=majority&appName=Job-portal-server`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create  db
    const db = client.db("myJobBlog");
    const jobsCollections = db.collection("realJobs");

    //get all jobs
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find().toArray();
      res.send(jobs);  
  })
  //post a job
  app.post("/post-job", async (req, res) => {
    const body = req.body;
    body.createAt = new Date();
    console.log(body)
    // const result = await jobsCollections.insertOne(job);
    // res.send(result);
  })
  //get a job
  app.get("/get-job/:id", async (req, res) => {
    const id = req.params.id;
    const job = await jobsCollections.findOne({_id: id});
    res.send(job);
  })
  //update a job
  app.put("/update-job/:id", async (req, res) => {
    const id = req.params.id;
    const job = req.body;
    const result = await jobsCollections.updateOne({_id: id}, job);
    res.send(result);
  })
  //delete a job

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Developer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})