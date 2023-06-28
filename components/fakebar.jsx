import { BsChatRightText } from 'react-icons/bs'


export default function Fakebar(props) {
  const [open, setOpen, bg, color, textColor, fakeData] = props.load
  return (
    <div className={"absolute right-0 bottom-0 mx-4 my-4 transition-all ease-out outline outline-1 rounded-lg w-6/12 max-w-sm overflow-hidden " + (open ? 'w-full' : '!w-16')}>
      <div className={"w-full sticky shadow-lg transition-all ease-out " + (open ? 'h-12' : 'h-16')} style={{ backgroundColor: bg }}>
        <div className={"cursor-pointer shadow-md absolute right-0 rounded-md bg-red-400 transition-all ease-out grid place-items-center " + (open ? 'h-10 w-10 mr-1 mt-1' : 'h-16 w-16')} onClick={() => setOpen(!open)}><BsChatRightText className="h-4/6 w-auto text-white mx-auto my-auto drop-shadow-2xl" /></div>

      </div>
      <div className={"shrink overflow-hidden transition-all ease-out"} style={{ backgroundColor: bg, height: 384 * open }}>
        <iframe src={"https://cmd-react-as99.vercel.app/iframe/" + bg.substring(1) + '/' + color.substring(1) + '/' + textColor.substring(1)} style={{ border: 'none', minHeight: '400px' }} width="100%"></iframe>
      </div>
    </div>
  )
}