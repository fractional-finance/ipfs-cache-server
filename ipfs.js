import { create } from "ipfs-http-client";
import * as dotenv from 'dotenv'
dotenv.config();

const getIpfsAuthHeader = () => {
  if (!process.env.PROJECT_ID)
    throw new Error("PROJECT_ID not set in environment variables");
  if (!process.env.PROJECT_SECRET)
    throw new Error("PROJECT_SECRET not set in environment variables");
  return (
    "Basic " +
    Buffer.from(
      process.env.PROJECT_ID + ":" + process.env.PROJECT_SECRET
    ).toString("base64")
  );
};

const baseInfuraURL = "https://ipfs.infura.io:5001/api/v0";

class IPFSClient {
  constructor() {
    this.ipfsAPIClient = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: getIpfsAuthHeader(),
      },
    });
  }

  getFile = (name) =>
    new Promise((resolve) => {
      const url = `${baseInfuraURL}/cat`;

      let params = {
        arg: name,
      };

      let headers = {
        Authorization: getIpfsAuthHeader(),
      };

      let data = {};
      network
        .postRequest(url, params, headers, data)
        .then((res) => {
          resolve(res.value || null);
        })
        .catch((err) => {
          resolve(null);
        });
    });
}

export default IPFSClient;
