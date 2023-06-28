import { useState, useEffect } from "react";
import Search from '../../../components/search';


export default function SearchComponent(props) {

  const [loadingData, setLoading] = useState(false)
  const [aiText, setAiText] = useState('This is ai text. This is ai text. This is ai text.')
  const [prompt, setPrompt] = useState('')
  
  useEffect(()=>{
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
      console.log('runss --> ' + scrollTop)
      
      
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
          const boxHeight = box.offsetHeight;
          console.log(boxHeight);
      });
  });
  }, [])

  const [data, setData] = useState([]);
  const [inputValue,setInputValue] = useState('')
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

  async function update(event){
    await setInputValue(event.target.value)
  }
  async function clear(event){
    await setInputValue('')
  }


  return (
    <div>
      <Search inputValue={inputValue} data={[data, setData]} writtenText={[aiText, prompt]} update={update} handleClick={handleClick} clear={clear} loadingData={loadingData} colors={{back:props.back, front:props.front, text:props.text}}/>
      </div>
  )
}