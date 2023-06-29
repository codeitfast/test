import { useState, useEffect } from 'react'

import Sidebar from '../../components/sidebar'
import Fakebar from '../../components/fakebar'
import HexColors from '../../components/sidebar/hexcolors'
import Draggable from 'react-draggable';

export default function Home() {

  const [open, setOpen] = useState(true);
  const [color, setColor] = useState("#aabbcc");
  const [bg, setBg] = useState('#ffffff')
  const [text, setTextColor] = useState('#000000')

  const [xPos, setXPos] = useState(384)
  const [yPos, setYPos] = useState(500)
  const handleDrag = (e, ui) => {
      setXPos(ui.x);   
      setYPos(ui.y)
  };


  //make this a setstate
  let fakeData = []
  for (let i = 0; i < 10; i++) {
    fakeData.push('lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
  }

  async function clear(event) {
  }

  function handleClick(event) {
    return '2'
  }

  return (
    <div>

      <div className="w-screen flex mt-1">
        <div className="flex w-11/12 max-w-md">
          <HexColors bg={bg} setBg={setBg} color={color} setColor={setColor} text={text} setTextColor={setTextColor} />
        </div>


      <div className="block">
        <div className="flex">
          <div className={`relative outline outline-1 outline-black rounded-md`} style={{ width: xPos, height: yPos }}>

            <Sidebar load={[open, setOpen, bg, color, text, fakeData, handleClick, clear]} />

          </div>
          <Draggable axis="y" onDrag={handleDrag} defaultPosition={{ x: 0, y: yPos }} bounds={{left:108, top: 500}}>
            <div className="w-4 h-4 bg-slate-400 rounded-full cursor-pointer text-center flex items-center justify-center"></div>
          </Draggable>

        </div>
        <div style={{width: xPos}} className="flex justify-center items-center place-content-center"><input value={xPos} className="text-center w-3/6" onChange={(event)=>setXPos(event.target.value)} />x<input value={yPos} className="text-center w-3/6" onChange={(event)=>setYPos(event.target.value)} /></div>
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