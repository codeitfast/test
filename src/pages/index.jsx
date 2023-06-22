import {ImCopy} from 'react-icons/im'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { useRouter } from 'next/router';
import Search from '../../components/search';
import {useState, useEffect} from 'react'
import {BsFillPersonFill, BsFillChatRightTextFill, BsChatLeftText, BsChatRightText} from 'react-icons/bs'
import { HexColorPicker } from 'react-colorful';
import ReactDOMServer from 'react-dom/server';

import textStyle from '../../components/ahhhh'


export function Sidebar(props) {
  let [open, setOpen, bg, color, textColor, fakeData, handleClick, clear]  = props.load
  const [loadingData, set] = useState(false)
  return(
    <div className={"absolute right-0 bottom-0 mx-4 my-4 transition-all ease-out outline outline-1 rounded-lg w-6/12 max-w-sm overflow-hidden " + (open ? 'w-full' : '!w-16')}>
    <div className={"w-full sticky shadow-lg transition-all ease-out " + (open ? 'h-12' : 'h-16')} style={{backgroundColor: bg}}>
   <div className={"cursor-pointer shadow-md absolute right-0 rounded-md transition-all ease-out grid place-items-center " + (open ? 'h-10 w-10 mr-1 mt-1': 'h-16 w-16')} onClick={()=>setOpen(!open)} style={{backgroundColor: color}}><BsChatRightText className="h-4/6 w-auto text-white mx-auto my-auto drop-shadow-2xl" style={{color:textColor}}/></div>

      </div>
    <div className={"shrink overflow-scroll overflow-x-hidden transition-all ease-out"} style={{backgroundColor: bg, height:384*open}}>
    <Search className="shrink" inputValue={'lorem ipsum'} data={[fakeData, useState(false)[1]]} writtenText={['this is the ai text. this is the ai text.', 'lorem ipsum']} update={undefined} handleClick={handleClick} clear={clear} loadingData={loadingData} colors={{back:'#ff00ff', front:color, text:textColor}}/>
    </div>
      </div>
  )
}

export function Fakebar(props) {
  const [open, setOpen, bg, color, textColor, fakeData] = props.load
  return(
    <div className={"absolute right-0 bottom-0 mx-4 my-4 transition-all ease-out outline outline-1 rounded-lg w-6/12 max-w-sm overflow-hidden " + (open ? 'w-full' : '!w-16')}>
    <div className={"w-full sticky shadow-lg transition-all ease-out " + (open ? 'h-12' : 'h-16')} style={{backgroundColor: bg}}>
   <div className={"cursor-pointer shadow-md absolute right-0 rounded-md bg-red-400 transition-all ease-out grid place-items-center " + (open ? 'h-10 w-10 mr-1 mt-1': 'h-16 w-16')} onClick={()=>setOpen(!open)}><BsChatRightText className="h-4/6 w-auto text-white mx-auto my-auto drop-shadow-2xl"/></div>

      </div>
    <div className={"shrink overflow-hidden transition-all ease-out"} style={{backgroundColor: bg, height:384*open}}>
    <iframe src={"https://cmd-react-as99.vercel.app/iframe/" + bg.substring(1) + '/' + color.substring(1) + '/' + textColor.substring(1)} style={{border:'none', minHeight: '400px'}} width="100%"></iframe>
    </div>
      </div>
  )
}

export default function Home() {

  const [open, setOpen] = useState(true);
  const [color, setColor] = useState("#aabbcc");
  const [bg, setBg] = useState('#ffffff')
  const [text, setTextColor] = useState('#000000')
  const [css, setCss] = useState('')

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
      <div className="text-5xl absolute right-0 top-0 w-24 h-auto">
        <img className="cursor-pointer grayscale hover:grayscale-0" 
      onClick={()=> {
        navigator.clipboard.writeText(ReactDOMServer.renderToStaticMarkup(
          <div style={{width: '360px', position: 'absolute', right: '0px', bottom: '0px', marginRight: '10px', marginBottom: '10px'}}>
          <iframe src={"https://cmd-react-as99.vercel.app/newIframe/" + bg.substring(1) + '/' + color.substring(1) + '/' + text.substring(1)} style={{border:'none', minHeight: '400px'}} width="100%"></iframe>
        </div>
      ))
      }}
      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwIDQwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Y1QzI3NjsiIGQ9Ik02LjM2NCwzNS41Yy0wLjQ3NiwwLTAuODY0LTAuMzk3LTAuODY0LTAuODg1VjMuMzg1QzUuNSwyLjg5Nyw1Ljg4OCwyLjUsNi4zNjQsMi41SDE2LjU0DQoJCUMxNi41MTMsMi42NjgsMTYuNSwyLjgzNCwxNi41LDNjMCwxLjkzLDEuNTcsMy41LDMuNSwzLjVzMy41LTEuNTcsMy41LTMuNWMwLTAuMTY2LTAuMDEzLTAuMzMyLTAuMDQtMC41aDEwLjE3Ng0KCQljMC40NzYsMCwwLjg2NCwwLjM5NywwLjg2NCwwLjg4NXYzMS4yM2MwLDAuNDg4LTAuMzg4LDAuODg1LTAuODY0LDAuODg1SDYuMzY0eiI+PC9wYXRoPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNDMjk2NTM7IiBkPSJNMzMuNjM2LDNDMzMuODM3LDMsMzQsMy4xNzMsMzQsMy4zODV2MzEuMjMxQzM0LDM0LjgyNywzMy44MzcsMzUsMzMuNjM2LDM1SDYuMzY0DQoJCUM2LjE2MywzNSw2LDM0LjgyNyw2LDM0LjYxNVYzLjM4NUM2LDMuMTczLDYuMTYzLDMsNi4zNjQsM0gxNmMwLDIuMjA2LDEuNzk0LDQsNCw0czQtMS43OTQsNC00SDMzLjYzNiBNMzMuNjM2LDJoLTEwLjgyDQoJCUMyMi45MjgsMi4zMTQsMjMsMi42NDcsMjMsM2MwLDEuNjU3LTEuMzQzLDMtMywzcy0zLTEuMzQzLTMtM2MwLTAuMzUzLDAuMDcyLTAuNjg2LDAuMTg0LTFINi4zNjRDNS42MTEsMiw1LDIuNjIsNSwzLjM4NXYzMS4yMzENCgkJQzUsMzUuMzgsNS42MTEsMzYsNi4zNjQsMzZoMjcuMjczQzM0LjM4OSwzNiwzNSwzNS4zOCwzNSwzNC42MTVWMy4zODVDMzUsMi42MiwzNC4zODksMiwzMy42MzYsMkwzMy42MzYsMnoiPjwvcGF0aD4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2Njc5OEY7IiBkPSJNMjIuMjg5LDJjMC4yMjUsMC41MTUsMC4yODksMS4xMTYsMC4wOTksMS43NDdjLTAuMjQ3LDAuODE5LTAuOTM3LDEuNDc5LTEuNzY5LDEuNjc5DQoJQzE4Ljk3LDUuODIxLDE3LjUsNC41ODIsMTcuNSwzYzAtMC4zNTYsMC4wNzctMC42OTMsMC4yMTEtMUgxM3Y0YzAsMS4xMDUsMC44OTUsMiwyLDJoMTBjMS4xMDUsMCwyLTAuODk1LDItMlYySDIyLjI4OXoiPjwvcGF0aD4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM2Njc5OEY7IiBkPSJNMjAsMWMxLjEwMywwLDIsMC44OTcsMiwycy0wLjg5NywyLTIsMnMtMi0wLjg5Ny0yLTJTMTguODk3LDEsMjAsMSBNMjAsMGMtMS42NTcsMC0zLDEuMzQzLTMsMw0KCQlzMS4zNDMsMywzLDNzMy0xLjM0MywzLTNTMjEuNjU3LDAsMjAsMEwyMCwweiI+PC9wYXRoPg0KPC9nPg0KPGc+DQoJPHJlY3QgeD0iMTUuNSIgeT0iMTUuNSIgc3R5bGU9ImZpbGw6I0YyRkFGRjsiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyI+PC9yZWN0Pg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojNzg4QjlDOyIgZD0iTTM4LDE2djIySDE2VjE2SDM4IE0zOSwxNUgxNXYyNGgyNFYxNUwzOSwxNXoiPjwvcGF0aD4NCgk8L2c+DQo8L2c+DQo8cmVjdCB4PSIzNCIgeT0iMTUiIHN0eWxlPSJmaWxsOiNGMkZBRkY7IiB3aWR0aD0iMSIgaGVpZ2h0PSIyNCI+PC9yZWN0Pg0KPHJlY3QgeD0iMjkiIHk9IjE1IiBzdHlsZT0iZmlsbDojRjJGQUZGOyIgd2lkdGg9IjEiIGhlaWdodD0iMjQiPjwvcmVjdD4NCjxyZWN0IHg9IjI0IiB5PSIxNSIgc3R5bGU9ImZpbGw6I0YyRkFGRjsiIHdpZHRoPSIxIiBoZWlnaHQ9IjI0Ij48L3JlY3Q+DQo8cmVjdCB4PSIxOSIgeT0iMTUiIHN0eWxlPSJmaWxsOiNGMkZBRkY7IiB3aWR0aD0iMSIgaGVpZ2h0PSIyNCI+PC9yZWN0Pg0KPHJlY3QgeD0iMjYuNSIgeT0iMjIuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwZS0xNiAxIC0xIC0xLjgzNjk3MGUtMTYgNjEuNSA3LjUpIiBzdHlsZT0iZmlsbDojRjJGQUZGOyIgd2lkdGg9IjEiIGhlaWdodD0iMjQiPjwvcmVjdD4NCjxyZWN0IHg9IjI2LjUiIHk9IjE3LjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xLjgzNjk3MGUtMTYgMSAtMSAtMS44MzY5NzBlLTE2IDU2LjUgMi41KSIgc3R5bGU9ImZpbGw6I0YyRkFGRjsiIHdpZHRoPSIxIiBoZWlnaHQ9IjI0Ij48L3JlY3Q+DQo8cmVjdCB4PSIyNi41IiB5PSIxMi41IiB0cmFuc2Zvcm09Im1hdHJpeCgtMS44MzY5NzBlLTE2IDEgLTEgLTEuODM2OTcwZS0xNiA1MS41IC0yLjUpIiBzdHlsZT0iZmlsbDojRjJGQUZGOyIgd2lkdGg9IjEiIGhlaWdodD0iMjQiPjwvcmVjdD4NCjxyZWN0IHg9IjI2LjUiIHk9IjcuNSIgdHJhbnNmb3JtPSJtYXRyaXgoLTEuODM2OTcwZS0xNiAxIC0xIC0xLjgzNjk3MGUtMTYgNDYuNSAtNy41KSIgc3R5bGU9ImZpbGw6I0YyRkFGRjsiIHdpZHRoPSIxIiBoZWlnaHQ9IjI0Ij48L3JlY3Q+DQo8L3N2Zz4=" />
        </div>

      <div className="flex w-11/12 max-w-md">
      <HexColorPicker color={bg} onChange={setBg} className="!w-full px-1"/>
      <HexColorPicker color={color} onChange={setColor} className="!w-full px-1"/>
      <HexColorPicker color={text} onChange={setTextColor} className="!w-full px-1"/>
      </div>

      <div className="w-[390px] h-[844px]outline outline-1 outline-black rounded-2xl">
        <Sidebar load={[open, setOpen, bg, color, text, fakeData, handleClick, clear]}/>
      </div>
    
      </div>


    
  )
}


/*


<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="http://localhost:3000" style="border:none; min-height: 400px;" width="100%"></iframe>
</div>


*/