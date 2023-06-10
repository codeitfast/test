import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export default function Search(props:any){

  if(props.colors == undefined) props = {...props, colors: {front: '#ffffff'}}

  const loadingBox = <div className="font-black text-6xl absolute mx-auto opacity-50 rounded-md w-20 h-20 bg-transparent justify-self-center left-0 right-0 my-2"><AiOutlineLoading3Quarters className="animate-spin absolute left-0 right-0 ml-2 mt-2 text-black" /></div>
    return(
        <div className='flex place-content-center my-4'>
        <div className="w-11/12 max-w-md mx-auto">
        <input value={props.inputValue} placeholder="Keywords, Themes, Etc..." onChange={(event)=>{
          if(props.update != undefined){
            props.update(event)
          }
        //todo: add update function that the button currently does
        }} className="p-4 border-gray-400 rounded-lg px-4 outline-1 outline-double w-full" style={{backgroundColor: 'white' }}/>
    
          {(props.inputValue.length == 0) && <h1 className="font-black text-6xl text-center opacity-50">Start Typing to Search.</h1>}
          {(props.data.length == 0 && props.inputValue.length != 0) && loadingBox}

        {(props.data.length >= 0 && props.inputValue.length !== 0) && props.data.map((book:any, num:any) => {
          return(<div className="p-2 rounded-md outline outline-1 outline-black my-2 break-words styled-bubble box text-white" style={{background: props.colors.front, color: props.colors.text /* filter: 'opacity(calc(calc(var(--scroll) / 100) - ' + num/5 + '))' */}} >{book.metadata.text}</div>)
        })}
      </div>
    </div>
    )
}