import { useState } from 'react'
import { BsChatRightText } from 'react-icons/bs'
import Search from './search'


export default function Sidebar(props) {
  let [open, setOpen, bg, color, textColor, fakeData, handleClick, clear] = props.load
  const [loadingData, set] = useState(false)
  return (
    <div className={"absolute right-0 bottom-0 mx-4 my-4 transition-all ease-out outline outline-1 rounded-lg w-fit max-w-sm overflow-hidden h-fit max-h-[432] " + (open ? 'w-full' : '!w-16')}>
      <div className={"w-full sticky shadow-lg transition-all ease-out " + (open ? 'h-12' : 'h-16')} style={{ backgroundColor: bg }}>
        <div className={"cursor-pointer shadow-md absolute right-0 rounded-md transition-all ease-out grid place-items-center " + (open ? 'h-10 w-10 mr-1 mt-1' : 'h-16 w-16')} onClick={() => setOpen(!open)} style={{ backgroundColor: color }}><BsChatRightText className="h-4/6 w-auto text-white mx-auto my-auto drop-shadow-2xl" style={{ color: textColor }} /></div>

      </div>
      <div className={"shrink overflow-scroll overflow-x-hidden transition-all ease-out"} style={{ backgroundColor: bg, height: 384 * open }}>
        <Search className="shrink" inputValue={'lorem ipsum'} data={[fakeData, useState(false)[1]]} writtenText={['this is the ai text. this is the ai text.', 'lorem ipsum']} update={undefined} handleClick={handleClick} clear={clear} loadingData={loadingData} colors={{ back: '#ff00ff', front: color, text: textColor }} />
      </div>
    </div>
  )
}