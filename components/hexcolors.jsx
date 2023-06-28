import { HexColorPicker } from 'react-colorful';
import { AiOutlineDownload } from 'react-icons/ai';
import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import {FaRegCopy} from 'react-icons/fa'

/*import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';*/
//import SyntaxHighlighter from 'react-syntax-highlighter';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


function simpleCode(bg, color, text){
  
  return(
    ReactDOMServer.renderToStaticMarkup(
      <div style={{width: '360px', position: 'absolute', right: '0px', bottom: '0px', marginRight: '10px', marginBottom: '10px'}}>
      <iframe src={"https://cmd-react-as99.vercel.app/newIframe/" + bg.substring(1) + '/' + color.substring(1) + '/' + text.substring(1)} style={{border:'none', minHeight: '400px'}} width="100%"></iframe>
    </div>
  )
  )
}

export default function HexColors({bg, setBg, color, setColor, text, setTextColor}){

  const simple = <SyntaxHighlighter data-prefix="1" lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
  wrapLines={true} language="markdown" style={atomOneDark}>{simpleCode(bg, color, text)}</SyntaxHighlighter>

  const [selected, setSelected] = useState(false)
    
    return(
    <div>

<button className="btn" onClick={()=>window.my_modal_2.showModal()}><AiOutlineDownload />Download Popup</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Download your popup:</h3>
    <p className="py-4 text-sm text-gray-400">(Press ESC key or click outside to close)</p>

<div>
  <div className="flex items-center justify-center">
    <div className={`btn w-48 h-48 max-w-sm outline outline-2 outline-black rounded-md mr-2 text-center cursor-pointer ${selected == 'simple' && "bg-green-400 outline-green-400 bg-opacity-50"}`} onClick={()=>setSelected('simple')}>Simple</div>
    <div className={`btn w-48 h-48 max-w-sm outline outline-2 outline-black rounded-md ml-2 text-center cursor-pointer ${selected == "advanced" && "bg-green-400 outline-green-400 bg-opacity-50"}`} onClick={()=>setSelected('advanced')}>Advanced</div>
    
    </div>


    <div><h4 className="font-bold text-md">Copy and Paste:</h4>
    <div className="rounded-2xl bg-Atom break-all col-start-1 row-start-1 flex items-start justify-center p-2">
    {selected == 'simple' && simple}

    <div className="p-2 pl-0"><FaRegCopy className="text-2xl ml-4 cursor-pointer text-white" onClick={()=>{
      navigator.clipboard.writeText(simpleCode(bg, color, text))
    }}/></div>

</div>
    </div>
    
    
    
    </div>
  </form>
  <form method="dialog" className="modal-backdrop" >
    <button>close</button>
  </form>
</dialog>


    <div className="px-1">
        <p className="text-center">Background</p>
      <HexColorPicker color={bg} onChange={setBg} className="!w-full !rounded-none"/>
      <input className="rounded-b-md bg-slate-300 text-center border-none focus:outline-none" value={bg} onChange={(event)=>{
          if(event.target.value.startsWith('#')){
            setBg(event.target.value)
          }else{
            setBg('#' + event.target.value)
          }
        }
      }/>
      </div>


      <div className="px-1">
        <p className="text-center">Front</p>
      <HexColorPicker color={color} onChange={setColor} className="!w-full"/>
      <input className="rounded-b-md bg-slate-300 text-center border-none focus:outline-none" value={color} onChange={(event)=>{
          if(event.target.value.startsWith('#')){
            setColor(event.target.value)
          }else{
            setColor('#' + event.target.value)
          }
        }
      }/>
      </div>

      <div className="px-1">
        <p className="text-center">Text</p>
      <HexColorPicker color={text} onChange={setTextColor} className="!w-full"/>
      <input className="rounded-b-md bg-slate-300 text-center border-none focus:outline-none" value={text} onChange={(event)=>{
          if(event.target.value.startsWith('#')){
            setTextColor(event.target.value)
          }else{
            setTextColor('#' + event.target.value)
          }
        }
      }/>
      </div>
      </div>
      
    )
}