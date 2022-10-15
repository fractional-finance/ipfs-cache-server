import express from "express";
import JSONdb from "simple-json-db";
import IPFSClient from "./ipfs.js";

const app = express();
app.use(express.json());
const db = new JSONdb("./database.json", {});
const ipfsClient = new IPFSClient();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const fetchPath = async (path) => {
    const fetchedIpfsFile = JSON.stringify(await ipfsClient.getFile(path));
    db.set(path, fetchedIpfsFile);
    return fetchedIpfsFile;
} 

app.post("/ipfs", async (req, res) => {
  const hashes = req.query.hashes; // Array of IPFS CID paths
  console.log(hashes);
  let values = [];

  for (let i = 0; i < hashes.length; i++) {
    console.log(hashes[i]);
    const value = db.get(hashes[i]);
    if (!value || value === null) {
        try{
          values[i] = await fetchPath(hashes[i])
        } catch(e) {
            console.log(e);
        }
    } else {
        values[i] = value;
    }
  }

  res.send(values);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
