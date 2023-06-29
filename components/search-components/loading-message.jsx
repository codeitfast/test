import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function LoadingMessage(props){
    const loadingBox = <div className="font-black text-6xl absolute mx-auto opacity-50 rounded-md w-20 h-20 bg-transparent justify-self-center left-0 right-0 my-2"><AiOutlineLoading3Quarters className="animate-spin absolute left-0 right-0 ml-2 mt-2 text-black" /></div>
    return(
        <div>
            {!props.loadingData && (props.data[0].length == 0) && <h1 className="font-black text-6xl text-center opacity-50">{props.placeholder}</h1>}
            {props.loadingData && loadingBox}
        </div>
    )
}