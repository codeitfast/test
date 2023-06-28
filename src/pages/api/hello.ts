// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PineconeClient } from '@pinecone-database/pinecone';
const axios = require('axios');

let embed: object
const apiKey = 'JSlDfIltkO5UM9l9iMT4UlDMFMoxvtHxUEN20AKD';
type Data = {
  name: string
}

/*const pineconeClient = new PineconeClient();
pineconeClient.init({
    environment: "us-central1-gcp",
    apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
});
console.log('pinecode running')*/

let pineCone: any = false

async function loadPinecone() {
  const pineconeClient = new PineconeClient();
  await pineconeClient.init({
    environment: "us-central1-gcp",
    apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
  });
  return pineconeClient
}


export async function hello(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  let find = req.body

  find = req.body['lookup']
  if (find.length == 0) {
    console.log('FIND LENGTH')
    res.status(200).json({
      newUpdate: {
        results: [],
        matches: [],
        namespace: 'bornacrime'
      }
    })
    return
  }

  const options = {
    method: 'POST',
    url: 'https://api.cohere.ai/v1/embed',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    data: { texts: [find], truncate: 'END', model: 'embed-english-light-v2.0' }
  };
  /*console.log('req: ', req.body)
  console.log('find: ', [find])*/

  await axios
    .request(options)
    .then(function (response: any) {
      //console.log(response.data.embeddings[0]);
      embed = response.data.embeddings[0]
    })
    .catch(function (error: any) {
      console.error(error);
    });

  if (pineCone === false) {
    pineCone = await loadPinecone()

    console.log('loaded pinecone')
  } else console.log('pinecode finished')

  /*let embed = req.body
  embed = embed[0]*/
  //console.log(embed)

  const index = pineCone.Index('books');
  const queryRequest = {
    vector: embed,
    topK: 10,
    namespace: 'bornacrime',
    includeMetadata: true
  }
  const newUpdate = await index.query({ queryRequest })
  //console.log(newUpdate)

  const data = { newUpdate }
  console.log(data)
  res.status(200).json(data)
}

export default async function newHello(req: NextApiRequest,
  res: NextApiResponse) {
  let find = req.body

}