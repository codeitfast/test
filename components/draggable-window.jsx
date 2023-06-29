import { useState } from "react"
import Draggable from "react-draggable"
import Sidebar from './sidebar'


export default function DragWindow(props){

    const [xPos, setXPos] = useState(384)
  const [yPos, setYPos] = useState(500)
  const handleDrag = (e, ui) => {
      setXPos(ui.x + 384);
      setYPos(ui.y)
  };

    let fakeData = []
    for (let i = 0; i < 10; i++) {
      fakeData.push('lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
    }
  
    async function clear(event) {
    }
  
    function handleClick(event) {
      return '2'
    }


    return(
        <div className="block">
        <div className="flex">
          <div className={`relative outline outline-1 outline-black rounded-md`} style={{ width: xPos, height: yPos }}>

            <Sidebar load={[props.open, props.setOpen, props.bg, props.color, props.text, fakeData, handleClick, clear]} />

          </div>
          <Draggable axis="y" onDrag={handleDrag} defaultPosition={{ x: 0, y: yPos }} bounds={{top: 500, left: - 200}}>
            <div className="w-4 h-4 bg-slate-400 rounded-full cursor-pointer text-center flex items-center justify-center"></div>
          </Draggable>

        </div>
        <div style={{width: xPos}} className="flex justify-center items-center place-content-center"><input value={xPos} className="text-center w-3/6" onChange={(event)=>{
            setXPos(event.target.value)
         }} />x<input value={yPos} className="text-center w-3/6" onChange={(event)=>setYPos(event.target.value)} /></div>
        </div>
    )
}