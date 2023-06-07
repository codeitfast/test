export default function Search(props:any){
    return(
        <div className='flex w-screen place-content-center my-4'>
        <div className="w-11/12 max-w-md absolute mx-auto">
        <input value={props.inputValue} placeholder="Keywords, Themes, Etc..." onChange={(event)=>{
          props.update(event)
        //todo: add update function that the button currently does
        }} className="p-4 border-gray-400 rounded-lg px-4 outline-1 outline-double w-full" />
    
          {(props.inputValue.length == 0) && <h1 className="font-black text-6xl text-center opacity-50">Start Typing to Search.</h1>}
          {(props.data.length == 0 && props.inputValue.length != 0) && <h1 className="font-black text-6xl text-center opacity-50">Searching...</h1>}
        {(props.data.length >= 0 && props.inputValue.length !== 0) && props.data.map((book:any) => {
          return(<div className="p-2 rounded-md outline outline-1 outline-black my-2 break-words">{book.metadata.text}</div>)
        })}
      </div>
    </div>
    )
}