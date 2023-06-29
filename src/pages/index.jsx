import { useState, useEffect } from 'react'

import Sidebar from '../../components/sidebar'
import Fakebar from '../../components/fakebar'
import HexColors from '../../components/sidebar/hexcolors'
import Draggable from 'react-draggable';
import DragWindow from '../../components/draggable-window'

export default function Home() {

  const [open, setOpen] = useState(true);
  const [color, setColor] = useState("#aabbcc");
  const [bg, setBg] = useState('#ffffff')
  const [text, setTextColor] = useState('#000000')

  


  return (
    <div>

      <div className="w-screen flex mt-1">
        <div className="flex w-11/12 max-w-md">
          <HexColors bg={bg} setBg={setBg} color={color} setColor={setColor} text={text} setTextColor={setTextColor} />
        </div>

        <DragWindow open={open} setOpen={setOpen} bg={bg} text={text} color={color} />
      </div>
    </div>



  )
}


/*


<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="http://localhost:3000" style="border:none; min-height: 400px;" width="100%"></iframe>
</div>


*/