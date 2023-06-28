import { useState } from 'react'
import { BsFillPersonFill, BsFillChatRightTextFill, BsChatLeftText, BsChatRightText } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Search from '../../../components/search'
import SearchComponent from '../iframe/test'

function Fakebar(props) {
    const [open, setOpen, bg, color, textColor, fakeData] = props.load
    //why does h-11/12 not exist?
    return (
        <div className="h-screen w-screen">
            <div className={"absolute right-0 bottom-0 transition-all ease-out overflow-hidden rounded-md " + (open ? 'w-screen h-screen' : '!w-16 !h-16')}>
                <div className={"w-full sticky shadow-lg transition-all ease-out " + (open ? 'h-12' : 'h-16')} style={{ backgroundColor: bg }}>
                    <div className={"cursor-pointer shadow-md absolute right-0 rounded-md transition-all ease-out grid place-items-center " + (open ? 'h-10 w-10 mr-1 mt-1' : 'h-16 w-16')} style={{ backgroundColor: color }} onClick={() => setOpen(!open)}><BsChatRightText className="h-4/6 w-auto text-white mx-auto my-auto drop-shadow-2xl" style={{ color: textColor }} /></div>

                </div>
                <div className={"shrink overflow-hidden transition-all ease-out h-screen"} style={{ backgroundColor: bg }}>
                    <SearchComponent back={bg} front={color} text={textColor} />
                </div>
            </div>

        </div>
    )
}

export default function newHomepage() {
    const query = useRouter()
    let queryColors = query.query.slug
    const [open, setOpen] = useState(false)

    let fakeData = []
    for (let i = 0; i < 10; i++) {
        fakeData.push({
            metadata: {
                text: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
            }
        })
    }
    return (
        <div>
            {queryColors && <Fakebar load={[open, setOpen, '#' + queryColors[0], '#' + queryColors[1], '#' + queryColors[2], fakeData]} />}
        </div>
    )
}