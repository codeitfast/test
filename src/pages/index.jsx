import {ImCopy} from 'react-icons/im'
import {AiFillCaretDown, AiFillCaretUp, AiOutlineDownload} from 'react-icons/ai'
import { useRouter } from 'next/router';
import Search from '../../components/search';
import {useState, useEffect} from 'react'
import {BsFillPersonFill, BsFillChatRightTextFill, BsChatLeftText, BsChatRightText} from 'react-icons/bs'
import ReactDOMServer from 'react-dom/server';

import {BiSolidDownload} from 'react-icons/bi'

import Sidebar from '../../components/sidebar'
import Fakebar from '../../components/fakebar'
import HexColors from '../../components/hexcolors'
import Draggable from 'react-draggable';

export default function Home() {

  const [open, setOpen] = useState(true);
  const [color, setColor] = useState("#aabbcc");
  const [bg, setBg] = useState('#ffffff')
  const [text, setTextColor] = useState('#000000')
  const [css, setCss] = useState('')

  const [xPos, setXPos] = useState(384)
  const handleDrag = (e, ui) => {
    setXPos(ui.x);
  };
  const [yPos, setYPos] = useState(500)
  const handleDragUp = (e, ui) => {
    setYPos(ui.y)
  }

  //make this a setstate
  let fakeData = []
  for(let i = 0; i < 10; i ++){
    fakeData.push('lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
  }

  async function clear(event){
  }

  function handleClick(event){
    return '2'
  }

  return (
    <div>

  <div className="w-screen flex mt-1">
      <div className="flex w-11/12 max-w-md">
        <HexColors bg={bg} setBg={setBg} color={color} setColor={setColor} text={text} setTextColor={setTextColor}/>
      </div>



    <div className="block">
    <div className={`relative outline outline-1 outline-black rounded-md`} style={{width: xPos, height: yPos}}>

    <Draggable axis="y" onDrag={handleDragUp} defaultPosition={{y: yPos, x: -40}}>
      <div className="w-10 h-10 bg-slate-400 rounded-full rounded-tr-md cursor-pointer text-center right-10 flex items-center justify-center">{yPos}</div>
    </Draggable>

      <Sidebar load={[open, setOpen, bg, color, text, fakeData, handleClick, clear]}/>

    </div>
      <Draggable axis="x" onDrag={handleDrag} defaultPosition={{x: xPos, y: 0}}>
        <div className="w-10 h-10 bg-slate-400 rounded-full rounded-tl-sm cursor-pointer text-center flex items-center justify-center">←{xPos}→</div>
      </Draggable>
      </div>

  </div>
</div>


    
  )
}


/*


<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="http://localhost:3000" style="border:none; min-height: 400px;" width="100%"></iframe>
</div>


*/