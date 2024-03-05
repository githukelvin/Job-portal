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



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    const jobsCollections = db.collection("demoJobs");


  //post a job
  // Assuming you're using Express.js
app.post('/post-job', async (req, res) => {
  const job = req.body; // Assuming job data is sent in the request body
  try {
      const result = await jobsCollections.insertOne(job);
      res.status(201).json({ message: 'Job created successfully', data: result });
  } catch (error) {
      res.status(500).json({ message: 'Failed to create job', error: error.message });
  }
});


   //get all jobs
   app.get("/all-jobs", async (req, res) => {
    // No need to convert it to an array it to an array 
    // const jobs = await db.demoJobs.find()
    const jobs = await jobsCollections.find().toArray();
    res.send(jobs);  
})

//get jobs using id
app.get("/all-jobs/:id", async(req, res) =>{
  const id = req.params.id;
  const job = await jobsCollections.findOne({_id: new ObjectId(id)})
  res.send(job);
})

//get jobs by email
   app.get("/myJobs/:email", async(req, res) =>{
    // console.log(req.params.email)
    const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
    res.send(jobs);
   })

   //delete a job
   app.delete("/job/:id", async(req, res) =>{
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)}
    const result = await jobsCollections.deleteOne(filter);
    res.send(result);
   
   })


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