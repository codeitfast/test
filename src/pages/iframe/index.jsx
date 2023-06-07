import { useState, useEffect } from "react";
import { PineconeClient } from "@pinecone-database/pinecone";
import Search from '../../../components/search';


export default function Home() {

  //this pinecone isn't used
  const pineconeClient = new PineconeClient();
  pineconeClient.init({
      environment: "us-central1-gcp",
      apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
  });

  const [data, setData] = useState([]);
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
      <Search inputValue={inputValue} data={data} update={update}/>
      </div>
  )
}