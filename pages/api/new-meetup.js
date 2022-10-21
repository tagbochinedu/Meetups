import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
   
    const client = await MongoClient.connect(
      "mongodb+srv://Zus:yochanan9898@meetups.foxbhxb.mongodb.net/?retryWrites=true&w=majority"
    );
 console.log('hello')
    const db = client.db();

    const MeetUpsCollection = db.collection();
    const result = await MeetUpsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(200).json({ message: "Meetup Created Succesfully" });
  }
};

export default handler
