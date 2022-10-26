const { MongoClient, ServerApiVersion } = require("mongodb");

function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const uri =
      "mongodb+srv://Zus:yochanan9898@cluster0.2phhvt2.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });
    client.connect(async (err) => {
      if (err) {
        throw err;
      }
      const collection = client.db().collection("meetups");
      const result = await collection.insertOne(data);
      console.log(result);
      setTimeout(() => {
        client.close();
      }, 4000);
    });

    res.status(200).json({ message: "Meetup Created Succesfully" });
  }
}

export default handler;