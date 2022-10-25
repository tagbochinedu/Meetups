const { MongoClient, ServerApiVersion } = require("mongodb");

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    
    const uri =
      "mongodb+srv://Zus:yochanan9898@cluster0.2phhvt2.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    client.connect((err) => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });

    res.status(200).json({ message: "Meetup Created Succesfully" });
  }
}

export default handler;
