import Sidebar from '../src/pages/index'

export default function DONTRUNTHIS() {
  return (
    <div className="w-[390px] h-[844px]outline outline-1 outline-black rounded-2xl">
      <Sidebar load={[open, setOpen, bg, color, text, fakeData]} />
    </div>
  )
}