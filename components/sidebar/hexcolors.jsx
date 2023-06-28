import { HexColorPicker } from 'react-colorful';
import Download from './download';


export default function HexColors({bg, setBg, color, setColor, text, setTextColor}){

    return(
    <div>

      <Download color={color} bg={bg} text={text} />

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