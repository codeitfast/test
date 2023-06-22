import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BiPaperPlane} from 'react-icons/bi'
import { useState, useEffect } from 'react'


export default function Search(props:any){

  const [clicked, setClicked] = useState(false)
  const [err, setErr] = useState(false)

  useEffect(()=>{
    if(props.loadingData == false){
    setClicked(false)
    }
  }, [props.loadingData])

  if(props.colors == undefined) props = {...props, colors: {front: '#ffffff'}}

  const loadingBox = <div className="font-black text-6xl absolute mx-auto opacity-50 rounded-md w-20 h-20 bg-transparent justify-self-center left-0 right-0 my-2"><AiOutlineLoading3Quarters className="animate-spin absolute left-0 right-0 ml-2 mt-2 text-black" /></div>
    return(
        <div className='flex place-content-center my-4'>
        <div className="w-11/12 max-w-md mx-auto">
      
      <div className="w-full relative">
        <input disabled={props.loadingData} value={props.inputValue} placeholder="Keywords, Themes, Etc..." onChange={(event)=>{
            if(props.update != undefined){
              props.update(event)
              setErr(false)
            }
          //todo: add update function that the button currently does
          }} className={`transition-all w-full p-4 border-gray-400 rounded-lg px-4 outline outline-1 outline-black ${err && 'outline outline-2 outline-red-600'} disabled:bg-gray-100 disabled:placeholder-gray-400 disabled:text-gray-700`} style={{backgroundColor: 'white' }}/>

    <button className={`transition-all rounded-md absolute top-0 bottom-0 my-auto right-2 h-10 w-10`} onClick={()=>{


      if(props.inputValue != ''){
        setClicked(true)
        props.handleClick(props.inputValue)
      }else{
        setErr(true)
      }

      //props.clear('')
      //props.data[1]('')
    }} style={{background: props.colors.front}}><BiPaperPlane className={`mx-auto text-3xl ${clicked && 'animate-wiggle animate-appear'}`} style={{color: props.colors.text}}/></button>
    </div>

    {!props.loadingData && (props.data[0].length == 0) && <h1 className="font-black text-6xl text-center opacity-50">Start Typing to Search.</h1>}
    {props.loadingData && loadingBox}
    
    {!props.loadingData && props.data[0].length > 0 && <div className="bg-blue-500 rounded-md shadow-2xl my-2 styled-bubble box p-2">{props.writtenText[1]}</div>}
          {!props.loadingData && (props.data[0].length > 0) && <div className="bg-white text-black p-2 rounded-md shadow-2xl my-2 break-words styled-bubble box">{props.writtenText[0]}</div>}
        {!props.loadingData && (props.data[0].length > 0) && props.data[0].map((book:any, num:any) => {
          return(<div className="p-2 rounded-md shadow-2xl my-2 break-words styled-bubble box text-white" style={{background: props.colors.front, color: props.colors.text /* filter: 'opacity(calc(calc(var(--scroll) / 100) - ' + num/5 + '))' */}} >{book}</div>)
        })}
      </div>
    </div>
    )
}