import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BiPaperPlane} from 'react-icons/bi'

export default function Search(props:any){

  if(props.colors == undefined) props = {...props, colors: {front: '#ffffff'}}

  const loadingBox = <div className="font-black text-6xl absolute mx-auto opacity-50 rounded-md w-20 h-20 bg-transparent justify-self-center left-0 right-0 my-2"><AiOutlineLoading3Quarters className="animate-spin absolute left-0 right-0 ml-2 mt-2 text-black" /></div>
    return(
        <div className='flex place-content-center my-4'>
        <div className="w-11/12 max-w-md mx-auto">
      
      <div className="w-full relative">
        <input value={props.inputValue} placeholder="Keywords, Themes, Etc..." onChange={(event)=>{
            if(props.update != undefined){
              props.update(event)
            }
          //todo: add update function that the button currently does
          }} className="w-full p-4 border-gray-400 rounded-lg px-4 outline-1 outline-double" style={{backgroundColor: 'white' }}/>

    <button className="rounded-md absolute top-0 bottom-0 my-auto right-2 h-10 w-10" style={{background: props.colors.front}}><BiPaperPlane className="mx-auto text-3xl" style={{color: props.colors.text}}/></button>
    </div>
    
          {(props.inputValue.length == 0) && <h1 className="font-black text-6xl text-center opacity-50">Start Typing to Search.</h1>}
          {(props.data.length == 0 && props.inputValue.length != 0) && loadingBox}

          <div className="bg-white text-black p-2 rounded-md shadow-2xl  my-2 break-words styled-bubble box">this is where the ai chat would be. this is where the ai chat would be. this is where the ai chat would be. this is where the ai chat would be. this is where the ai chat would be. this is where the ai chat would be. this is where the ai chat would be.</div>
        {(props.data.length >= 0 && props.inputValue.length !== 0) && props.data.map((book:any, num:any) => {
          return(<div className="p-2 rounded-md shadow-2xl my-2 break-words styled-bubble box text-white" style={{background: props.colors.front, color: props.colors.text /* filter: 'opacity(calc(calc(var(--scroll) / 100) - ' + num/5 + '))' */}} >{book.metadata.text}</div>)
        })}
      </div>
    </div>
    )
}