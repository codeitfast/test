import { useState, useEffect } from "react"
import { BiPaperPlane } from "react-icons/bi"

export default function Searchbar(props){

    const [clicked, setClicked] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(() => {
      if (props.loadingData == false) {
        setClicked(false)
      }
    }, [props.loadingData])

    return(
        <div>
            <input disabled={props.loadingData} value={props.inputValue} placeholder="Keywords, Themes, Etc..." onChange={(event) => {
            if (props.update != undefined) {
              props.update(event)
              setErr(false)
            }
            //todo: add update function that the button currently does
          }} className={`transition-all w-full p-4 border-gray-400 rounded-lg px-4 outline outline-1 outline-black ${err && 'outline outline-2 outline-red-600'} disabled:bg-gray-100 disabled:placeholder-gray-400 disabled:text-gray-700`} style={{ backgroundColor: 'white' }} />
           <button className={`rounded-md absolute top-0 bottom-0 my-auto right-2 h-10 w-10 bg-opacity-0 backdrop-blur-md`} onClick={() => {

            if (props.inputValue != '') {
              setClicked(true)
              props.handleClick(props.inputValue)
            } else {
              props.setErr(true)
            }

            }} style={{backgroundColor: props.colors.front}} ><BiPaperPlane className={`mx-auto text-3xl  ${clicked && 'animate-wiggle animate-appear'}`} style={{ color: props.colors.text }} /></button>
        </div>
    )
}