import { asyncLoad } from "../../components/asyncLoad"
import { useState } from "react";
import { PineconeClient } from "@pinecone-database/pinecone";
//import Cohere from "cohere-ai"
//const cohere = require("cohere-ai")



//const client = Cohere.init(apiKey)

//import Cohere from 'cohere-ai';
//const cohere = require("cohere-ai");
//cohere.init(apiKey)

//const client = cohere.init(apiKey);




const model_id = "sentence-transformers/multi-qa-mpnet-base-dot-v1";
const hf_token = "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";
const api_url = `https://api-inference.huggingface.co/pipeline/feature-extraction/${model_id}`;
const headers = { Authorization: `Bearer ${hf_token}` };

async function query(texts:object) {
  //const data = { inputs: texts, options: { wait_for_model: true } };
  //const response = await fetch(api_url, { headers, method: "POST", body: JSON.stringify(data) });
 // console.log(cohere.tokenize(texts))
  //const response = cohere.predict(texts)

  return 'asdf'//response.json();
}

export default function Home() {

  //this pinecone isn't used
  const pineconeClient = new PineconeClient();
  pineconeClient.init({
      environment: "us-central1-gcp",
      apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
  });

  const [data, setData] = useState([]);
  const [encode, setEncode] = useState([])
  const [inputValue,setInputValue] = useState('')
  async function handleClick() {
    
    /*await query([inputValue]).then((embed)=> {
      setEncode(embed)
    })*/

    const options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(inputValue)//JSON.stringify(encode)
    }
    console.log('INPUTVAL: ', inputValue)
    const newData = await fetch('api/hello', options).then(response => response.json())
    .then(data => {
      // Access the resolved value of the promise here
      console.log('update', data.newUpdate.matches);
      setData(data.newUpdate.matches)
    });
  }
  
  return (
    <div>
      <input value={inputValue} placeholder="filler" onChange={(event)=>{
        setInputValue(event.target.value)
        handleClick()
        //todo: add update function that the button currently does
        }} className="p-4 border-gray-400 rounded-lg px-4 outline-none" />
      {data.map((book) => {
        return(<div className="p-2 rounded-md outline outline-1 outline-black my-2">{book.metadata.text}</div>)
      })}
    </div>
  )
}
