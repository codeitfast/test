import {ImCopy} from 'react-icons/im'

import { asyncLoad } from "../../components/asyncLoad"
import { useState, useEffect } from "react";
import { PineconeClient } from "@pinecone-database/pinecone";
import { input } from "@tensorflow/tfjs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from '../../components/search';

import { useRouter } from 'next/router';
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

async function query(texts) {
  //const data = { inputs: texts, options: { wait_for_model: true } };
  //const response = await fetch(api_url, { headers, method: "POST", body: JSON.stringify(data) });
 // console.log(cohere.tokenize(texts))
  //const response = cohere.predict(texts)

  return 'asdf'//response.json();
}



export default function Home() {

  const router = useRouter()
  const { routerQuery } = router.query
  console.log(routerQuery)

  //this pinecone isn't used
  const pineconeClient = new PineconeClient();
  pineconeClient.init({
      environment: "us-central1-gcp",
      apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
  });

  const [data, setData] = useState([]);
  const [encode, setEncode] = useState([])
  const [inputValue,setInputValue] = useState('')
  async function handleClick(input) {
    
    /*await query([inputValue]).then((embed)=> {
      setEncode(embed)
    })*/

    const options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        lookup:input,
      })//JSON.stringify(encode)
    }
    
    if(input.length === 0){
      setData([])
    }else{
      await fetch('api/hello', options).then(response => response.json())
      .then(data => {
        // Access the resolved value of the promise here
        setData(data.newUpdate.matches)
      });
    }
  }

  async function update(event){
    await setInputValue(event.target.value)
    handleClick(event.target.value)
  }
  
  return (
    <div>
      <div className="text-5xl absolute right-0 top-0"><ImCopy className="cursor-pointer" onClick={() => {
        navigator.clipboard.writeText(`<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="https://cmd-react-as99.vercel.app/iframe" style="border:none; min-height: 400px;" width="100%"></iframe></div>`)
    alert('copied!')
    }} /></div>

    
      <div>HOMEPAGE TEST :)</div>
      {router.query == 'iframe' && <Search inputValue={inputValue} data={data} update={update}/>}
      </div>
  )
}


/*


<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="http://localhost:3000" style="border:none; min-height: 400px;" width="100%"></iframe>
</div>


*/