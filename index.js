import express from "express";
import JSONdb from "simple-json-db";
import IPFSClient from "./ipfs.js";

const app = express();
app.use(express.json());
const db = JSONdb("./database.json");
const ipfsClient = new IPFSClient();
const port = 3000;

// db.get(key)

// db.set(key, value)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/ipfs", async (req, res) => {
  console.log(req.query);
  console.log(db);
  const hashes = req.query.hashes; // Array of IPFS CID paths
  console.log(hashes);
  let values = [];

  for (let i = 0; i < hashes.length; i++) {
    const value = db.get(hashes[i]);
    if (!value) {
      const fetchedIpfsFile = await ipfsClient.getFile(hashes[i]);
      db.set(hashes[i], fetchedIpfsFile);
      values[i] = fetchedIpfsFile;
    } else {
      values[i] = value;
    }
  }

  res.send(values);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
