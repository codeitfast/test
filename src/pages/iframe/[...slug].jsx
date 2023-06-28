import { useState, useEffect } from "react";
import { PineconeClient } from "@pinecone-database/pinecone";
import Search from '../../../components/search';
import { useRouter } from 'next/router';

export default function Page() {

  const query = useRouter()
  let queryColors = query.query.slug
  console.log(queryColors)

  const [loadingData, setLoading] = useState(false)
  const [aiText, setAiText] = useState('This is ai text. This is ai text. This is ai text.')
  const [prompt, setPrompt] = useState('')


  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();

    window.addEventListener('resize', () => {
      setVh();
    });

    window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement;

      document.documentElement.style.setProperty('--scroll', scrollTop);

      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
        const boxHeight = box.offsetHeight;
      });
    });
  }, [])

  //this pinecone isn't used
  const pineconeClient = new PineconeClient();
  pineconeClient.init({
    environment: "us-central1-gcp",
    apiKey: "deaf3c5e-9b6f-4cae-bc93-94c7b7c0edd1",
  });

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('')
  async function handleClick(input) {
    setLoading(true)

    var formData = {
      query: input,
      namespace: "bornacrime",
      index: "books"
    };
    await fetch("http://localhost:8000/query", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.response)
        setData(data.response.documents);
        setAiText(data.response.result)
        setPrompt(data.response.query)
      })
    setLoading(false)
  }

  async function update(event) {
    await setInputValue(event.target.value)
    //handleClick(event.target.value)
  }
  async function clear(event) {
    await setInputValue('')
  }

  return (
    <div>
      {queryColors && <Search inputValue={inputValue} data={[data, setData]} writtenText={[aiText, prompt]} update={update} handleClick={handleClick} clear={clear} loadingData={loadingData} colors={{ back: '#' + queryColors[0], front: '#' + queryColors[1], text: '#' + queryColors[2] }} />}
    </div>
  )
}